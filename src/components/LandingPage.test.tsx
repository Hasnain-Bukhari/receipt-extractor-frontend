import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('renders title and upload button', () => {
    const { getByText } = render(<LandingPage onFileSelected={jest.fn()} />);
    expect(getByText('Receipt Extractor')).toBeInTheDocument();
    expect(getByText('Choose file to Upload')).toBeInTheDocument();
    expect(getByText('drag and drop file here')).toBeInTheDocument();
  });

  it('calls onFileSelected when a file is chosen', () => {
    const onFileSelected = jest.fn();
    const { getByLabelText, container } = render(<LandingPage onFileSelected={onFileSelected} />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(['dummy'], 'test.png', { type: 'image/png' });
    fireEvent.change(input, { target: { files: [file] } });
    expect(onFileSelected).toHaveBeenCalledWith(file);
  });
});