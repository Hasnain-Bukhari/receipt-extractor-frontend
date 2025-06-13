# Receipt Extractor Frontend

This is a React application that allows users to upload receipt images, processes them through a backend API, and displays the extracted details.

## Features

- Upload receipt images
- Extract and display receipt details including date, currency, vendor name, and items
- Loading indicator while processing the receipt

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 5.6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd receipt-extractor-frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```
This will open the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build, run:
```
npm run build
```
This will generate a `build` folder with the optimized application.

### API Integration

The application interacts with a backend API to extract receipt details. Ensure that the backend service is running and accessible at the specified endpoint.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License.