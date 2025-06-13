import React from 'react';
import Loader from './Loader';
import { MdInsertDriveFile, MdClose } from 'react-icons/md';

interface ReceiptUploadProps {
    selectedFile: File | null;
    error: string | null;
    loading: boolean;
    onFileChange: (file: File) => void;
    onUpload: () => void;
    onCancel: () => void;
}

const ReceiptUpload: React.FC<ReceiptUploadProps> = ({
    selectedFile,
    error,
    loading,
    onFileChange,
    onUpload,
    onCancel,
}) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onFileChange(file);
        }
    };

    // Format current date/time for "Uploaded on"
    const uploadedOn = new Date();
    const formattedDate = uploadedOn.toLocaleString(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }).replace(',', ' at');

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f7f7f7',
            }}
        >
            <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Receipt Extractor</h1>
            {selectedFile && (
                <div
                    style={{
                        background: '#fff',
                        borderRadius: 16,
                        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                        padding: 32,
                        minWidth: 340,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        marginBottom: 32,
                    }}
                >
                    <MdInsertDriveFile size={48} color="#1976d2" style={{ marginBottom: 12 }} />
                    <span style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
                        {selectedFile.name}
                    </span>
                    <button
                        onClick={onCancel}
                        style={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                        }}
                        aria-label="Cancel"
                        disabled={loading}
                    >
                        <MdClose size={24} color="#888" />
                    </button>
                    <div style={{ color: '#888', fontSize: 14, marginBottom: 4 }}>
                        Uploaded by User
                    </div>
                    <div style={{ color: '#888', fontSize: 14, marginBottom: 0 }}>
                        Uploaded on {formattedDate}
                    </div>
                </div>
            )}
            <input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileChange}
                disabled={loading}
                style={{ display: 'none' }}
            />
            {selectedFile && (
                <button
                    onClick={onUpload}
                    disabled={loading}
                    style={{
                        padding: '12px 28px',
                        fontSize: 18,
                        borderRadius: 8,
                        border: 'none',
                        background: '#1976d2',
                        color: '#fff',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        marginBottom: 16,
                        minWidth: 260,
                    }}
                >
                    {loading ? 'Extracting...' : 'Extract Receipts Contents'}
                </button>
            )}
            {error && <p style={{ color: 'red', marginTop: 8 }}>{error}</p>}
            {loading && <Loader />}
        </div>
    );
};

export default ReceiptUpload;