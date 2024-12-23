import { Box, Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StateOrRegionDataTable from "@/app/components/StateAndRegionsComponents/StateOrRegionDataTable";
import { StatesAndRegions } from "@/types/states-and-regions";

interface Props {
  params: {
    name: string;
  };
}

export default function StateOrRegionPage({ params }: Props) {
  const name = params.name;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
      
        <Link href={`/setup/states-and-regions`} style={{ marginTop: "10px" }}>
          <Button variant="contained" startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </Link>
        <Typography sx={{marginTop: "1rem", fontWeight: 600}}>States and Regions/{name}</Typography>
      </Box>

      <Box sx={{ mt: 5, width: "100%", height: "100%" }}>
        <Box
          width={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              padding: 1,
              width: "18%",
              bgcolor: "lightgray",
              borderRadius: "7px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography>##</Typography>{" "}
            <Typography>Registered Service Providers</Typography>
          </Box>
          <Box
            sx={{
              padding: 1,
              width: "18%",
              bgcolor: "lightgray",
              borderRadius: "7px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography>##</Typography>{" "}
            <Typography> Registered Users</Typography>
          </Box>
          <Box
            sx={{
              padding: 1,
              width: "18%",
              bgcolor: "lightgray",
              borderRadius: "7px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography>##</Typography>{" "}
            <Typography> Available Ambulance Count</Typography>
          </Box>
          <Box
            sx={{
              padding: 1,
              width: "18%",
              bgcolor: "lightgray",
              borderRadius: "7px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography>##</Typography> <Typography> Fire Stations</Typography>
          </Box>
          <Box
            sx={{
              padding: 1,
              width: "18%",
              bgcolor: "lightgray",
              borderRadius: "7px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography>##</Typography>{" "}
            <Typography> Previous Emergency Cases</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 5 }}>
          <StateOrRegionDataTable
            stateOrRegionName={name as StatesAndRegions}
          />
        </Box>
      </Box>
    </Box>
  );
}
