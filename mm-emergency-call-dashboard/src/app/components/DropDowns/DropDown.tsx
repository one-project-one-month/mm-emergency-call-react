"use client";

import { StatesAndRegions } from "@/types/states-and-regions";
import { AreaStatus, Township } from "@/types/townships";
import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  value: string | StatesAndRegions;
  handleChange: (event: SelectChangeEvent) => void;
  areaStatuses?: AreaStatus[];
  townShipsBySAndR?: Township[];
}
export default function DropDown({
  value,
  handleChange,
  areaStatuses,
  townShipsBySAndR,
}: Props) {
  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormHelperText>
          {areaStatuses
            ? "StateAndRegions Or Pending"
            : townShipsBySAndR
            ? "Township"
            : ""}
        </FormHelperText>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {townShipsBySAndR && <MenuItem value="Pending">Pending</MenuItem>}

          {areaStatuses ? (
            areaStatuses.map((areaStatus) => {
              return (
                <MenuItem key={areaStatus.id} value={areaStatus.name}>
                  {areaStatus.name}
                </MenuItem>
              );
            })
          ) : townShipsBySAndR ? (
            townShipsBySAndR.map((township) => {
              return (
                <MenuItem key={township.id} value={township.name}>
                  {township.name}
                </MenuItem>
              );
            })
          ) : (
            <>
              <Box>hello</Box>
            </>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
