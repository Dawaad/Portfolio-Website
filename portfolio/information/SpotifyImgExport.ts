import { ImageProps } from "next/image";

const locationPath = "/images/Spotify/";

export const SpotifyImages: ImageProps[] = [
  {
    src: `${locationPath}Dashboard.png`,
    alt: "Spotify Dashboard",
  },
  {
    src: `${locationPath}Playlist.png`,
    alt: "Spotify Playlist",
  },
  {
    src: `${locationPath}Search.png`,
    alt: "Spotify Search",
  },
  {
    src: `${locationPath}SearchFull.png`,
    alt: "Spotify Search Full",
  },
];

export const spotifyIcon: ImageProps = {
  src: `${locationPath}spotify-icon.png`,
  alt: "Spotify Icon",
};
