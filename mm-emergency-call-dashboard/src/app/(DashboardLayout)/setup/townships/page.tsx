"use client";

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { StatesAndRegions } from "@/types/states-and-regions";
import DropDown from "@/app/components/DropDowns/DropDown";
import { AreaStatus, EmergencyRequest, Township } from "@/types/townships";
import EmergencyReqTable from "@/app/components/TownshipComponents/EmergencyReqTable";

const TownshipPage = () => {
  const [currentStateRegion, setCurrentStateRegion] =
    React.useState<StatesAndRegions>(StatesAndRegions.YANGON);
  const [townShipsBySAndR, setTownShipsBySAndR] = useState<Township[]>([]);
  const [currentTownship, setCurrentTownship] = useState<string>("Pending");
  const [currentEmergencyReqs, setCurrentEmergencyReqs] = useState<
    EmergencyRequest[]
  >([]);

  useEffect(() => {
    const townShipsBySAndR = townships.filter(
      (township) => township.stateRegionName === currentStateRegion
    );
    setTownShipsBySAndR(townShipsBySAndR);

    if (currentTownship === "Pending") {
      const currentEmergencyReqs = emergencyRequests.filter(
        (emReq) =>
          emReq.status === "Pending" && emReq.stateRegion === currentStateRegion
      );
      setCurrentEmergencyReqs(currentEmergencyReqs);
    } else {
      const currentEmergencyReqs = emergencyRequests.filter(
        (emReq) => emReq.township === currentTownship
      );
      setCurrentEmergencyReqs(currentEmergencyReqs);
    }
  }, [currentStateRegion, currentTownship]);

  const handleChangeStateRegion = (event: SelectChangeEvent) => {
    setCurrentStateRegion(event.target.value as StatesAndRegions);
    setCurrentTownship("Pending");
  };
  const handleChangeTownship = (event: SelectChangeEvent) => {
    setCurrentTownship(event.target.value);
  };

  const areaStatuses: AreaStatus[] = [
    { id: 1, name: StatesAndRegions.YANGON },
    { id: 2, name: StatesAndRegions.MANDALAY },
    { id: 3, name: StatesAndRegions.MAGWAY },
    { id: 4, name: StatesAndRegions.SAGAING },
    { id: 5, name: StatesAndRegions.AYEYARWADY },
    { id: 6, name: StatesAndRegions.BAGO },
    { id: 7, name: StatesAndRegions.TANINTHARYI },
    { id: 8, name: StatesAndRegions.KACHIN },
    { id: 9, name: StatesAndRegions.KAYAH },
    { id: 10, name: StatesAndRegions.KAYIN },
    { id: 11, name: StatesAndRegions.CHIN },
    { id: 12, name: StatesAndRegions.MON },
    { id: 13, name: StatesAndRegions.RAKHINE },
    { id: 14, name: StatesAndRegions.SHAN },
  ];

  const townships: Township[] = [
    { id: 1, name: "Hlaing", stateRegionName: StatesAndRegions.YANGON },
    { id: 2, name: "Sanchaung", stateRegionName: StatesAndRegions.YANGON },
    {
      id: 3,
      name: "Aungmyethazan",
      stateRegionName: StatesAndRegions.MANDALAY,
    },
    { id: 4, name: "Maha Aungmye", stateRegionName: StatesAndRegions.MANDALAY },
    { id: 5, name: "Magway", stateRegionName: StatesAndRegions.MAGWAY },
    { id: 6, name: "Natmauk", stateRegionName: StatesAndRegions.MAGWAY },
    { id: 7, name: "Sagaing", stateRegionName: StatesAndRegions.SAGAING },
    { id: 8, name: "Shwe Bo", stateRegionName: StatesAndRegions.SAGAING },
    { id: 9, name: "Ngapudaw ", stateRegionName: StatesAndRegions.AYEYARWADY },
    { id: 10, name: "Pyapon", stateRegionName: StatesAndRegions.AYEYARWADY },
    { id: 11, name: "Bago ", stateRegionName: StatesAndRegions.BAGO },
    { id: 12, name: "Kawa ", stateRegionName: StatesAndRegions.BAGO },
    { id: 13, name: "Dawei ", stateRegionName: StatesAndRegions.TANINTHARYI },
    { id: 14, name: "Myeik ", stateRegionName: StatesAndRegions.TANINTHARYI },
    { id: 15, name: "Bamaw ", stateRegionName: StatesAndRegions.KACHIN },
    { id: 16, name: "Moe Khaung ", stateRegionName: StatesAndRegions.KACHIN },
    { id: 17, name: "Demoso  ", stateRegionName: StatesAndRegions.KAYAH },
    { id: 18, name: "Loikaw ", stateRegionName: StatesAndRegions.KAYAH },
    { id: 19, name: "Hpa-an ", stateRegionName: StatesAndRegions.KAYIN },
    { id: 20, name: "Kawkareik ", stateRegionName: StatesAndRegions.KAYIN },
    { id: 21, name: "Hakha  ", stateRegionName: StatesAndRegions.CHIN },
    { id: 22, name: "Falam ", stateRegionName: StatesAndRegions.CHIN },
    { id: 23, name: "Mawlamyine ", stateRegionName: StatesAndRegions.MON },
    { id: 24, name: "Mudon ", stateRegionName: StatesAndRegions.MON },
    { id: 25, name: "Kyaukphyu ", stateRegionName: StatesAndRegions.RAKHINE },
    { id: 26, name: "Ann ", stateRegionName: StatesAndRegions.RAKHINE },
    { id: 27, name: "Lashio ", stateRegionName: StatesAndRegions.SHAN },
    { id: 28, name: "Hsipaw ", stateRegionName: StatesAndRegions.SHAN },
  ];

  const emergencyRequests: EmergencyRequest[] = [
    {
      id: 1,
      userId: 1,
      emergencyName: "Fire",
      incidentLocation: "Ma sin sar naing tot bu",
      township: "Hlaing",
      status: "Pending",
      stateRegion: StatesAndRegions.YANGON,
    },
    {
      id: 2,
      userId: 2,
      emergencyName: "Car Accident",
      incidentLocation: "Ma sin sar naing tot bu",
      township: "Hlaing",
      status: "Pending",
      stateRegion: StatesAndRegions.YANGON,
    },
    {
      id: 3,
      userId: 12,
      emergencyName: "Sucide",
      incidentLocation: "Ma sin sar naing tot bu",
      township: "Sanchaung",
      status: "Pending",
      stateRegion: StatesAndRegions.YANGON,
    },
    {
      id: 4,
      userId: 6,
      emergencyName: "Cycle Accident",
      incidentLocation: "Ma sin sar naing tot bu",
      township: "Sanchaung",
      status: "ongoing",
      stateRegion: StatesAndRegions.YANGON,
    },
    {
      id: 5,
      userId: 75,
      emergencyName: "Yay Nit",
      incidentLocation: "Ma sin sar naing tot bu",
      township: "Aungmyethazan",
      status: "Pending",
      stateRegion: StatesAndRegions.MANDALAY,
    },
    {
      id: 6,
      userId: 51,
      emergencyName: "Fire",
      incidentLocation: "Ma sin sar naing tot bu",
      township: "Aungmyethazan",
      status: "ongoing",
      stateRegion: StatesAndRegions.MANDALAY,
    },
    {
      id: 7,
      userId: 21,
      emergencyName: "Accident",
      incidentLocation: "Ma sin sar naing tot bu",
      township: "Maha Aungmye",
      status: "ongoing",
      stateRegion: StatesAndRegions.MANDALAY,
    },
    {
      id: 8,
      userId: 14,
      emergencyName: "Snake Bite",
      incidentLocation: "Ma sin sar naing tot bu",
      township: "Maha Aungmye",
      status: "ongoing",
      stateRegion: StatesAndRegions.MANDALAY,
    },
    {
      id: 9,
      userId: 15,
      emergencyName: "Don Bite",
      incidentLocation: "Ma sin sar naing tot bu",
      township: "Magway",
      status: "Pending",
      stateRegion: StatesAndRegions.MAGWAY,
    },
    {
      id: 10,
      userId: 16,
      emergencyName: "Fire",
      incidentLocation: "Ma sin sar naing tot bu",
      township: "Magway",
      status: "ongoing",
      stateRegion: StatesAndRegions.MAGWAY,
    },
  ];

  return (
    <Box>
      <Typography>Township</Typography>
      <Box>
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <DropDown
            value={currentTownship}
            handleChange={handleChangeTownship}
            townShipsBySAndR={townShipsBySAndR}
          />

          <DropDown
            value={currentStateRegion}
            handleChange={handleChangeStateRegion}
            areaStatuses={areaStatuses}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          minHeight: "70vh",
        }}
      >
        <Box sx={{ width: "70%", padding: 1 }}>
          Emergency cases
          {currentEmergencyReqs.length ? (
            <EmergencyReqTable currentEmergencyReqs={currentEmergencyReqs} />
          ) : (
            <Box
              sx={{
                width: "100%",
                padding: 1.5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <Typography variant="h6">There is no request yet</Typography>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            width: "30%",
            bgcolor: "lightgray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          Emergency History
        </Box>
      </Box>
    </Box>
  );
};

export default TownshipPage;
