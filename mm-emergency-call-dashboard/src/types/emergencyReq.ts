import { StatesAndRegions } from "./states-and-regions";
import { Status } from "./status";

export interface EmergencyRequest {
  id: number;
  userId: number;
  emergencyName: string;
  incidentLocation: string;
  township: string;
  status: Status;
  stateRegion: StatesAndRegions;
}
