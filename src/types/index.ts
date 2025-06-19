export type Vehicle = {
  id: string;
  licensePlate: string;
  parkedAt: Date;
};

export type VehicleListProps = {
  vehicles: Vehicle[];
  onRemove: (id: string) => void;
  admin: boolean;
};

export type VehicleFormProps = {
  onAdd: (vehicle: Vehicle) => void;
};

export type ExportCSVProps = {
  data: Vehicle[];
};