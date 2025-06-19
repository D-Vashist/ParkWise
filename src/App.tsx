import React, { useState } from 'react';
import VehicleForm from './components/VehicleForm';
import VehicleList from './components/VehicleList';
import ExportCSV from './components/ExportCSV';

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const addVehicle = (licensePlate) => {
    const newVehicle = { licensePlate, parkedAt: new Date() };
    setVehicles([...vehicles, newVehicle]);
  };

  const removeVehicle = (licensePlate) => {
    setVehicles(vehicles.filter(vehicle => vehicle.licensePlate !== licensePlate));
  };

  return (
    <div>
      <h1>Parking Lot Counter</h1>
      <VehicleForm onAdd={addVehicle} />
      <VehicleList vehicles={vehicles} onRemove={removeVehicle} admin={isAdmin} />
      <ExportCSV data={vehicles} />
      <button onClick={() => setIsAdmin(!isAdmin)}>
        Toggle Admin Mode
      </button>
    </div>
  );
};

export default App;