import { ImageProps } from "next/image";

const locationURL =
  "https://raw.githubusercontent.com/Dawaad/portfolio-project/dev/portfolio/public/images/Spotify/";

export const SpotifyImages: ImageProps[] = [
  {
    src: `${locationURL}Dashboard.png`,
    alt: "Spotify Dashboard",
  },
  {
    src: `${locationURL}Playlist.png`,
    alt: "Spotify Playlist",
  },
  {
    src: `${locationURL}Search.png`,
    alt: "Spotify Search",
  },
  {
    src: `${locationURL}SearchFull.png`,
    alt: "Spotify Search Full",
  },
];

export const spotifyIcon: ImageProps = {
  src: `${locationURL}spotify-icon.png`,
  alt: "Spotify Icon",
};
