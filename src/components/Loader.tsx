import React from 'react';

const Loader: React.FC = () => {
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
            <div style={{ textAlign: 'center', fontSize: 20, marginBottom: 24 }}>
                Extracting receipt contents...
            </div>
            <div style={{
                width: 320,
                height: 10,
                background: '#e0e0e0',
                borderRadius: 5,
                overflow: 'hidden',
                position: 'relative'
            }}>
                <div
                    style={{
                        width: '60%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #90caf9 0%, #1976d2 100%)',
                        borderRadius: 5,
                        animation: 'progressBar 1.2s linear infinite'
                    }}
                />
                <style>
                    {`
                    @keyframes progressBar {
                        0% { width: 0%; }
                        100% { width: 100%; }
                    }
                    `}
                </style>
            </div>
        </div>
    );
};

export default Loader;