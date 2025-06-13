import React, { useState } from 'react';
import LandingPage from '../components/LandingPage';
import ReceiptUpload from '../components/ReceiptUpload';
import ReceiptDetails from '../components/ReceiptDetails';
import { extractReceiptDetails } from '../api/receiptApi';
import { ReceiptDetails as ReceiptDetailsType } from '../types';
import Loader from '../components/Loader';

const Home: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [extractedDetails, setExtractedDetails] = useState<ReceiptDetailsType | null>(null);

    const handleFileChange = (file: File) => {
        setSelectedFile(file);
        setError(null);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            setLoading(true);
            setError(null);
            try {
                const details = await extractReceiptDetails(selectedFile);
                setExtractedDetails(details);
            } catch (err: any) {
                setError(err.message || 'Failed to extract receipt details.');
            } finally {
                setLoading(false);
            }
        }
    };

    const handleCancel = () => {
        setSelectedFile(null);
        setError(null);
    };

    const handleRestart = () => {
        setSelectedFile(null);
        setExtractedDetails(null);
        setError(null);
    };

    // Show landing page if no file is selected and not loading and no extracted details
    if (!selectedFile && !loading && !extractedDetails) {
        return <LandingPage onFileSelected={handleFileChange} />;
    }
    if (loading) {
        return <Loader />;
    }
    // Show receipt upload if file is selected and not extracted yet
    if (selectedFile && !extractedDetails) {
        return (
            <ReceiptUpload
                selectedFile={selectedFile}
                error={error}
                loading={loading}
                onFileChange={handleFileChange}
                onUpload={handleUpload}
                onCancel={handleCancel}
            />
        );
    }
    

    // Show extracted details if available
    if (extractedDetails) {
        return (
            <div>
                <ReceiptDetails details={extractedDetails} onRestart={handleRestart} />
            </div>
        );
    }

    // Fallback (should not happen)
    return null;
};

export default Home;