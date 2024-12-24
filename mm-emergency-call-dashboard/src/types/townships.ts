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
