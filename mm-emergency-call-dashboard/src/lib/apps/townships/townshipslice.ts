import { EmergencyRequest } from "@/types/emergencyReq";
import { StatesAndRegions } from "@/types/states-and-regions";
import { Status } from "@/types/status";
import { Township } from "@/types/townships";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  currentStateRegion: StatesAndRegions;
  townShipsBySAndR: Township[];
  currentTownship: string;
  currentStatus: Status;
  currentEmergencyReqs: EmergencyRequest[];
}

const initialState: InitialState = {
  currentStateRegion: StatesAndRegions.YANGON,
  townShipsBySAndR: [],
  currentTownship: "All",
  currentStatus: Status.PENDING,
  currentEmergencyReqs: [],
};

const townshipSlice = createSlice({
  name: "townships",
  initialState,
  reducers: {
    setCurrentStateRegion(state, action: PayloadAction<StatesAndRegions>) {
      state.currentStateRegion = action.payload;
    },
    setTownShipsBySAndR(state, action: PayloadAction<Township[]>) {
      state.townShipsBySAndR = action.payload;
    },
    setCurrentTownship(state, action: PayloadAction<string>) {
      state.currentTownship = action.payload;
    },
    setCurrentStatus(state, action: PayloadAction<Status>) {
      state.currentStatus = action.payload;
    },
    setCurrentEmergencyReqs(state, action: PayloadAction<EmergencyRequest[]>) {
      state.currentEmergencyReqs = action.payload;
    },
  },
});

export const {
  setCurrentStateRegion,
  setTownShipsBySAndR,
  setCurrentTownship,
  setCurrentStatus,
  setCurrentEmergencyReqs,
} = townshipSlice.actions;
export default townshipSlice.reducer;
