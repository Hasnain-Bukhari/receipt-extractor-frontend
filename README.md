# Receipt Extractor Frontend

A modern React application that allows users to upload receipt images, sends them to a backend API for extraction, and displays the extracted receipt details in a clean, user-friendly interface.

---

## Features

- **Landing Page:** Drag-and-drop or select a receipt image to upload (`.jpg`, `.jpeg`, `.png`).
- **File Preview:** Preview the selected file with filename, upload time, and cancel option before extraction.
- **Extraction Loader:** Animated progress bar and status message while the backend processes the receipt.
- **Extraction Results:** Displays the receipt image and all extracted details (vendor, date, currency, items, tax, total) in a two-column layout.
- **Restart Flow:** Easily start a new extraction at any time.
- **Error Handling:** User-friendly error messages for failed uploads or extraction.
- **Responsive UI:** Clean, centered layouts for all screens.
- **Unit Tested:** Key components are covered by unit tests using React Testing Library and Jest.

---

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 5.6 or higher)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Hasnain-Bukhari/receipt-extractor-frontend.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd receipt-extractor-frontend
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

---

## Running the Application

To start the development server:

```sh
npm start
```

This will open the application in your default web browser at [http://localhost:3000](http://localhost:3000).

---

## Building for Production

To create a production build:

```sh
npm run build
```

This will generate a `build` folder with the optimized application.

---

## Testing

To run unit tests:

```sh
npm test
```

Tests are located in `src/components/*.test.tsx` and cover the main UI components.

---

## Project Structure

```
src/
  api/
    receiptApi.ts         # API calls to backend
  components/
    LandingPage.tsx       # Landing/upload screen
    Loader.tsx            # Extraction loader/progress
    ReceiptDetails.tsx    # Extraction results UI
    ReceiptUpload.tsx     # File preview and upload
    *.test.tsx            # Unit tests for components
  pages/
    Home.tsx              # Main page, handles flow
  types/
    index.ts              # TypeScript interfaces
  App.tsx
  index.tsx
public/
  index.html
```

---

## API Integration

- The frontend expects a backend API running at `http://localhost:4000/receipt/extract`.
- The API should accept a `multipart/form-data` POST request with the file field named **`file`**.
- The backend should respond with a JSON envelope:

  ```json
  {
    "statusCode": 200,
    "message": "Extraction successful",
    "data": {
      "id": "string",
      "date": "YYYY-MM-DD",
      "currency": "USD",
      "vendor_name": "Vendor",
      "receipt_items": [
        { "item_name": "Item", "item_cost": 12.34 }
      ],
      "tax": 1.23,
      "total": 13.57,
      "image_url": "http://..."
    }
  }
  ```

- The frontend maps this response to display all details.

---

## Customization

- **Styling:** All styles are inline for simplicity. You can migrate to CSS modules or styled-components as needed.
- **Icons:** Uses [react-icons](https://react-icons.github.io/react-icons/) for UI icons.
- **TypeScript:** All code is written in TypeScript for type safety.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## License

This project is licensed under the MIT License.