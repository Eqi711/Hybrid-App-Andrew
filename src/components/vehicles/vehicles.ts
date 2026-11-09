export type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  tankCapacity: number;
};

export const VEHICLES: Vehicle[] = [
  {
    id: 'honda-civic-rs',
    make: 'Honda',
    model: 'Civic RS',
    year: 2023,
    licensePlate: 'B 1234 GAS',
    tankCapacity: 47,
  },
  {
    id: 'toyota-corolla-cross',
    make: 'Toyota',
    model: 'Corolla Cross Hybrid',
    year: 2024,
    licensePlate: 'B 2087 RKT',
    tankCapacity: 43,
  },
  {
    id: 'mazda-cx-5',
    make: 'Mazda',
    model: 'CX-5 Touring',
    year: 2022,
    licensePlate: 'B 1742 UJK',
    tankCapacity: 56,
  },
];

export const DEFAULT_VEHICLE_ID = VEHICLES[0].id;
