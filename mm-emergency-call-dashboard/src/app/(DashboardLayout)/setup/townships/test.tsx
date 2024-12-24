"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { StatesAndRegions } from "@/types/states-and-regions";
import DropDown from "@/app/components/DropDowns/DropDown";
import { AreaStatus, AreaStatusName } from "@/types/townships";

const TownshipPage = () => {
  const [areaStatus, setAreaStatus] = React.useState<AreaStatusName>("Pending");

  const handleChange = (event: SelectChangeEvent) => {
    setAreaStatus(event.target.value as AreaStatusName);
  };

  const areaStatuses: AreaStatus[] = [
    { id: 1, name: "Pending" },
    { id: 2, name: StatesAndRegions.YANGON },
    { id: 3, name: StatesAndRegions.MANDALAY },
    { id: 4, name: StatesAndRegions.MAGWAY },
    { id: 5, name: StatesAndRegions.SAGAING },
    { id: 6, name: StatesAndRegions.AYEYARWADY },
    { id: 7, name: StatesAndRegions.BAGO },
    { id: 8, name: StatesAndRegions.TANINTHARYI },
    { id: 9, name: StatesAndRegions.KACHIN },
    { id: 10, name: StatesAndRegions.KAYAH },
    { id: 11, name: StatesAndRegions.KAYIN },
    { id: 12, name: StatesAndRegions.CHIN },
    { id: 13, name: StatesAndRegions.MON },
    { id: 14, name: StatesAndRegions.RAKHINE },
    { id: 15, name: StatesAndRegions.SHAN },
  ];
  return (
    <Box>
      <Typography>Township</Typography>
      <Box>
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <DropDown
            value={areaStatus}
            handleChange={handleChange}
            areaStatuses={areaStatuses}
          />

          {/*  <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <FormHelperText>Township</FormHelperText>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default TownshipPage;
