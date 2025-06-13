import React from 'react';
import { ReceiptDetails as ReceiptDetailsType } from '../types';

interface ReceiptDetailsProps {
  details: ReceiptDetailsType;
  onRestart?: () => void;
}

const ReceiptDetails: React.FC<ReceiptDetailsProps> = ({ details, onRestart }) => {
  const total = details.receipt_items.reduce((sum, item) => sum + item.item_cost, 0);
  // For demo, GST/Tax is 10% of total (replace with real value if available)
  const gst = +(total * 0.1).toFixed(2);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f7f7f7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Receipt Extractor</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 40,
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: 900,
          margin: '0 auto 32px auto',
        }}
      >
        {/* Left Column: Receipt Image */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontWeight: 500, marginBottom: 12 }}>Receipt Image</div>
          <img
            src={details.image_url}
            alt="Receipt"
            style={{
              maxWidth: 340,
              width: '100%',
              border: '2px solid #e0e0e0',
              borderRadius: 12,
              background: '#fff',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          />
        </div>
        {/* Right Column: Details */}
        <div
          style={{
            flex: 1.2,
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
            padding: 32,
            minWidth: 320,
            maxHeight: 480,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
            {details.vendor_name}
          </div>
          <div style={{ color: '#555', marginBottom: 4 }}>
            {details.date}
          </div>
          <div style={{ color: '#555', marginBottom: 12 }}>
            {details.currency}
          </div>
          <hr style={{ margin: '12px 0' }} />
          <div>
            {details.receipt_items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                  fontSize: 16,
                }}
              >
                <span>{item.item_name}</span>
                <span>{item.item_cost.toFixed(2)} {details.currency}</span>
              </div>
            ))}
          </div>
          <hr style={{ margin: '12px 0' }} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 16,
              marginBottom: 8,
            }}
          >
            <span>GST/Tax</span>
            <span>{gst.toFixed(2)} {details.currency}</span>
          </div>
          <hr style={{ margin: '12px 0' }} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            <span>Total</span>
            <span>{(total + gst).toFixed(2)} {details.currency}</span>
          </div>
        </div>
      </div>
      {onRestart && (
        <button
          onClick={onRestart}
          style={{
            marginTop: 24,
            padding: '12px 32px',
            fontSize: 18,
            borderRadius: 8,
            border: 'none',
            background: '#1976d2',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
          }}
        >
          Extract Another Receipt
        </button>
      )}
    </div>
  );
};

export default ReceiptDetails;