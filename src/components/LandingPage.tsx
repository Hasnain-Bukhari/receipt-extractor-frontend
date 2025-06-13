import React, { useRef, useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';

interface LandingPageProps {
  onFileSelected: (file: File) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onFileSelected }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelected(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileSelected(e.dataTransfer.files[0]);
    }
  };

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
      <div
        onClick={handleButtonClick}
        onDrop={handleDrop}
        onDragOver={e => {
          e.preventDefault();
          setIsDragActive(true);
        }}
        onDragLeave={() => setIsDragActive(false)}
        style={{
          border: '2px dashed #aaa',
          borderRadius: 16,
          background: isDragActive ? '#e3f2fd' : '#fff',
          width: 400,
          height: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
      >
        <MdCloudUpload size={64} color="#90caf9" style={{ marginBottom: 24 }} />
        <button
          type="button"
          onClick={e => {
            e.stopPropagation();
            handleButtonClick();
          }}
          style={{
            padding: '12px 28px',
            fontSize: 18,
            borderRadius: 8,
            border: 'none',
            background: '#1976d2',
            color: '#fff',
            cursor: 'pointer',
            marginBottom: 12,
          }}
        >
          Choose file to Upload
        </button>
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <div style={{ marginTop: 8, color: '#888', fontSize: 16 }}>
          <div style={{ textAlign: 'center' }}>or</div>
          <div>drag and drop file here</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;