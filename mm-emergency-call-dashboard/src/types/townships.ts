import { StatesAndRegions } from "./states-and-regions";

export interface AreaStatus {
  id: number;
  name: StatesAndRegions | "Pending";
}

export interface Township {
  id: number;
  name: string;
  stateRegionName: StatesAndRegions;
}

export interface EmergencyRequest {
  id: number;
  userId: number;
  emergencyName: string;
  incidentLocation: string;
  township: string;
  status: string;
  stateRegion: StatesAndRegions;
}
