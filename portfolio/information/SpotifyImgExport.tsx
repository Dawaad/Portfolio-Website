
import Image from "next/image";

const locationPath = "/images/Spotify/";

export const SpotifyImages = [
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

[]

export const SpotifyIcon = () => {
  return <Image src={`${locationPath}Spotify-Icon.png`} alt="Spotify" />;
};
