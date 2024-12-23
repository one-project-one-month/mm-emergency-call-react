import { StatesAndRegions } from "@/types/states-and-regions";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const statesAndRegions = [
  {
    id: 1,
    name: StatesAndRegions.YANGON,
    imageUrl: "/images/maps/ရန်ကုန်.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.YANGON}`,
  },
  {
    id: 2,
    name: StatesAndRegions.MANDALAY,
    imageUrl: "/images/maps/မန္တလေး.png",
    href: `/setup/states-and-regions/${StatesAndRegions.MANDALAY}`,
  },
  {
    id: 3,
    name: StatesAndRegions.MAGWAY,
    imageUrl: "/images/maps/မကွေး.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.MAGWAY}`,
  },
  {
    id: 4,
    name: StatesAndRegions.SAGAING,
    imageUrl: "/images/maps/စစ်ကိုင်း.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.SAGAING}`,
  },
  {
    id: 5,
    name: StatesAndRegions.AYEYARWADY,
    imageUrl: "/images/maps/ဧရာဝတီ.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.AYEYARWADY}`,
  },
  {
    id: 6,
    name: StatesAndRegions.BAGO,
    imageUrl: "/images/maps/ပဲခူး.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.BAGO}`,
  },
  {
    id: 7,
    name: StatesAndRegions.TANINTHARYI,
    imageUrl: "/images/maps/တနင်္သာရီ.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.TANINTHARYI}`,
  },

  {
    id: 8,
    name: StatesAndRegions.KACHIN,
    imageUrl: "/images/maps/ကချင်.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.KACHIN}`,
  },
  {
    id: 9,
    name: StatesAndRegions.KAYAH,
    imageUrl: "/images/maps/ကယား.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.KAYAH}`,
  },
  {
    id: 10,
    name: StatesAndRegions.KAYIN,
    imageUrl: "/images/maps/ကရင်.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.KAYIN}`,
  },
  {
    id: 11,
    name: StatesAndRegions.CHIN,
    imageUrl: "/images/maps/ချင်း.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.CHIN}`,
  },
  {
    id: 12,
    name: StatesAndRegions.MON,
    imageUrl: "/images/maps/မွန်.png",
    href: `/setup/states-and-regions/${StatesAndRegions.MON}`,
  },
  {
    id: 13,
    name: StatesAndRegions.RAKHINE,
    imageUrl: "/images/maps/ရခိုင်.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.RAKHINE}`,
  },
  {
    id: 14,
    name: StatesAndRegions.SHAN,
    imageUrl: "/images/maps/ရှမ်း.jpg",
    href: `/setup/states-and-regions/${StatesAndRegions.SHAN}`,
  },
];
const page = () => {
  return (
    <Box>
      <Typography>States and Regions</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          mt: 5,
        }}
      >
        {statesAndRegions.map((stateOrRegion) => {
          return (
            <Link
              href={stateOrRegion.href}
              key={stateOrRegion.id}
              style={{ color: "black" }}
            >
              {" "}
              <Box
                sx={{
                  position: "relative",
                  width: "250px",
                  height: "250px",
                  border: "1px solid lightgray",
                  borderRadius: "7px",
                  mr: 3,
                  mb: 3,
                  overflow: "hidden",
                  perspective: "1000px",
                }}
              >
                {/* ပုံ */}
                <Box
                  sx={{
                    width: "auto",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "transform 0.5s ease, scale 0.5s ease",
                    transformOrigin: "center",
                    ":hover": {
                      transform: "scale(1.1) translateZ(5px)",
                    },
                  }}
                >
                  <Image
                    alt={stateOrRegion.name}
                    src={stateOrRegion.imageUrl}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
                {/* နာမည် */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 1,
                    left: 1,
                    padding: 1,
                    bgcolor: "lightgray",
                    borderRadius: "7px",
                  }}
                >
                  {" "}
                  <Typography variant="h6">{stateOrRegion.name}</Typography>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default page;
