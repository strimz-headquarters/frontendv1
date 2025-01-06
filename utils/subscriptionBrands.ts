import youtube from "@/public/bills/youtube.svg";
import spotify from "@/public/bills/spotify.jpeg";
import Netflix from "@/public/bills/netflix.png";
import airtel from "@/public/bills/airtel.png";
import primeVideo from "@/public/bills/primevideo.png";
import mtn from "@/public/bills/mtn.png";
import boomPlay from "@/public/bills/boomplay.png";
import { StaticImageData } from "next/image";

export type brandImagesType = {
  src: StaticImageData | null;
  alt?: string;
  size?: number;
};

export const brandImages: brandImagesType[] = [
  { src: null }, // Row 1, column 1
  { src: youtube, alt: "youtube", size: 104 },
  { src: null }, // Row 1, column 3
  { src: null }, // Row 1, column 4
  { src: spotify, alt: "spotify", size: 104 },
  { src: null }, // Row 1, column 6
  { src: null }, // Row 2, column 1
  { src: null }, // Row 2, column 2
  { src: null }, // Row 2, column 3
  { src: Netflix, alt: "Netflix", size: 104 },
  { src: null }, // Row 2, column 5
  { src: null }, // Row 2, column 6
  { src: null }, // Row 3, column 1
  { src: airtel, alt: "airtel", size: 104 },
  { src: null }, // Row 3, column 3
  { src: null }, // Row 3, column 4
  { src: primeVideo, alt: "primevideo", size: 104 },
  { src: null }, // Row 3, column 6
  { src: mtn, alt: "mtn", size: 104 },
  { src: null }, // Row 4, column 2
  { src: null }, // Row 4, column 3
  { src: null }, // Row 4, column 4
  { src: null }, // Row 4, column 5
  { src: boomPlay, alt: "boomplay", size: 104 },
];
