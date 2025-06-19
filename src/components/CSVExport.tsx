import React from 'react';

interface ExportCSVProps {
    data: Array<{ licensePlate: string; duration: number }>;
}

const ExportCSV: React.FC<ExportCSVProps> = ({ data }) => {
    const handleExport = () => {
        const csvRows = [
            ['License Plate', 'Duration (hours)'],
            ...data.map(vehicle => [vehicle.licensePlate, vehicle.duration])
        ];

        const csvString = csvRows.map(row => row.join(',')).join('\n');
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'vehicles.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <button onClick={handleExport}>
            Export CSV
        </button>
    );
};

export default ExportCSV;