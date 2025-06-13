import axios from 'axios';
import { ReceiptDetails } from '../types';

const API_URL = 'http://localhost:4000/receipt/extract';


export const extractReceiptDetails = async (imageFile: File): Promise<ReceiptDetails> => {
    const formData = new FormData();
    formData.append('file', imageFile);
    console.log('Sending file to backend:', imageFile);
    try {
        const response = await axios.post(API_URL, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        const envelope = response.data as {
            statusCode: number;
            message: string;
            data: any;
        };

        if (envelope.statusCode !== 200 || !envelope.data) {
            throw new Error(envelope.message || 'Failed to extract receipt details.');
        }

        const data = envelope.data;

        // Map backend response to frontend ReceiptDetails type
        return {
            id: data.id,
            image_url: data.image_url,
            date: data.date,
            currency: data.currency,
            vendor_name: data.vendor_name,
            receipt_items: (data.receipt_items || []).map((item: any) => ({
                item_name: item.item_name,
                item_cost: item.item_cost,
            })),
            tax: data.tax,
            total: data.total,
        };
    } catch (error: any) {
        let message = 'Error extracting receipt details.';
        if (axios.isAxiosError(error)) {
            message = error.response?.data?.message || error.message || message;
        }
        throw new Error(message);
    }
};