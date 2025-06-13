import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReceiptUpload from './ReceiptUpload';

describe('ReceiptUpload', () => {
  const file = new File(['dummy'], 'test.png', { type: 'image/png' });

  it('calls onUpload when upload button is clicked', () => {
    const onUpload = jest.fn();
    const { getByText } = render(
      <ReceiptUpload
        selectedFile={file}
        error={null}
        loading={false}
        onFileChange={jest.fn()}
        onUpload={onUpload}
        onCancel={jest.fn()}
      />
    );
    fireEvent.click(getByText('Extract Receipts Contents'));
    expect(onUpload).toHaveBeenCalled();
  });

  it('calls onCancel when cancel button is clicked', () => {
    const onCancel = jest.fn();
    const { getByLabelText } = render(
      <ReceiptUpload
        selectedFile={file}
        error={null}
        loading={false}
        onFileChange={jest.fn()}
        onUpload={jest.fn()}
        onCancel={onCancel}
      />
    );
    fireEvent.click(getByLabelText('Cancel'));
    expect(onCancel).toHaveBeenCalled();
  });
});