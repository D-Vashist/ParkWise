import React, { useState } from 'react';

interface Vehicle {
  licensePlate: string;
  parkedAt: Date;
}

interface VehicleManagerProps {
  onAdd: (vehicle: Vehicle) => void;
}

const VehicleManager: React.FC<VehicleManagerProps> = ({ onAdd }) => {
  const [licensePlate, setLicensePlate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (licensePlate) {
      onAdd({ licensePlate, parkedAt: new Date() });
      setLicensePlate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={licensePlate}
        onChange={(e) => setLicensePlate(e.target.value)}
        placeholder="Enter license plate"
        required
      />
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default VehicleManager;