<<<<<<< HEAD
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
=======
# ParkWise
A responsive web app for managing parking lot entries and exits. Built with React, includes user roles, overstay detection, CSV export, and admin controls.

# 🚗 Parking Lot Counter App

A responsive web application built with React that helps parking lot personnel track vehicle entries and exits, calculate parking duration, detect overstay, and manage authorized access. Includes admin and staff roles, export functionality, and mobile-friendly design.

## 🔧 Features

- ✅ Secure login system for Admin and Authorized Users
- ✅ Track vehicle license plate, entry time, and exit time
- ✅ Auto-detect overstaying vehicles (over 2 hours)
- ✅ Export logs to CSV
- ✅ Responsive design for mobile and desktop
- ✅ Duration calculator for each vehicle
- ✅ Admin dashboard for exit control and data export

---

## 🧪 Demo


---

## 🔐 Sample Login Credentials

| Role       | Email             | Password   |
|------------|------------------|------------|
| Super Admin| `admin@lot.com`  | `admin123` |
| Staff 1    | `guard1@lot.com` | `guard123` |
| Staff 2    | `guard2@lot.com` | `guard123` |

---

## 📸 Screenshots



---

## 🧰 Tech Stack

- React (Vite or CRA)
- TailwindCSS
- date-fns (for time/duration handling)
- Vercel (for deployment)

---

## 📦 Local Setup

```bash
git clone https://github.com/yourusername/parking-lot-counter-app.git
cd parking-lot-counter-app
npm install
npm start
>>>>>>> d368e4860ff200aaaed2585d82334f88b73c2c91
