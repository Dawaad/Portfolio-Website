import Image, { ImageProps } from "next/image";

const locationPath = "/images/Spotify/";

import icon from "../public/images/Spotify/spotify-icon.png";
import dashboard from "../public/images/Spotify/Dashboard.png";
import playlist from "../public/images/Spotify/Playlist.png";
import search from "../public/images/Spotify/Search.png";
import searchFull from "../public/images/Spotify/SearchFull.png";

export const SpotifyImages = [
  {
    src: dashboard,
    alt: "Spotify Dashboard",
  },
  {
    src: playlist,
    alt: "Spotify Playlist",
  },
  {
    src: search,
    alt: "Spotify Search",
  },
  {
    src: searchFull,
    alt: "Spotify Search Full",
  },
];

export const spotifyIcon: ImageProps = {
  src: icon,
  alt: "Spotify Icon",
};
