# Parking Lot Counter Application

This is a parking lot counter application built with React and Vite. The application allows users to manage vehicles in a parking lot, including adding and removing vehicles, and exporting vehicle data as a CSV file.

## Features

- **Vehicle Management**: Add and remove vehicles from the parking lot.
- **Vehicle List**: View the list of currently parked vehicles along with their parking duration.
- **CSV Export**: Export the list of parked vehicles as a CSV file for record-keeping.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd parking-lot-counter
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Project Structure

```
parking-lot-counter
├── src
│   ├── components
│   │   ├── VehicleManager.tsx
│   │   └── CSVExport.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Components

- **VehicleManager**: Manages the input form for adding vehicles.
- **VehicleList**: Displays the list of vehicles currently parked.
- **ExportCSV**: Provides functionality to export vehicle data as a CSV file.

## License

This project is licensed under the MIT License.