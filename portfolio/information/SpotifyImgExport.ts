import { ImageProps } from "next/image";
import { ImageLocationProps } from "../Interfaces";

const locationURL =
  "https://raw.githubusercontent.com/Dawaad/portfolio-project/master/portfolio/public/images/Spotify/";

export const SpotifyImages: ImageLocationProps[] = [
  {
    imageSrc: `${locationURL}Dashboard.png`,
    alt: "Spotify Dashboard",
  },
  {
    imageSrc: `${locationURL}Playlist.png`,
    alt: "Spotify Playlist",
  },
  {
    imageSrc: `${locationURL}Search.png`,
    alt: "Spotify Search",
  },
  {
    imageSrc: `${locationURL}SearchFull.png`,
    alt: "Spotify Search Full",
  },
];

export const spotifyIcon: ImageProps = {
  src: `${locationURL}spotify-icon.png`,
  alt: "Spotify Icon",
};
