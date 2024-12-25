"use client";

import { StatesAndRegions } from "@/types/states-and-regions";
import { Status } from "@/types/status";
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
  statuses?: Status[];
}
export default function DropDown({
  value,
  handleChange,
  areaStatuses,
  townShipsBySAndR,
  statuses,
}: Props) {
  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormHelperText>
          {areaStatuses
            ? "StateAndRegions "
            : townShipsBySAndR
            ? "Township"
            : statuses
            ? "Status"
            : ""}
        </FormHelperText>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {townShipsBySAndR && <MenuItem value="All">All</MenuItem>}

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
          ) : statuses ? (
            statuses.map((status, index) => {
              return (
                <MenuItem key={index} value={status}>
                  {status}
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
