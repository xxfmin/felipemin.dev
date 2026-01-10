"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Song, songs } from "@/lib/data";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import { PiSpotifyLogoFill } from "react-icons/pi";

interface MusicCardProps {
  song: Song;
}

export function MusicCard({ song }: MusicCardProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = song.startTime ?? 0;
      audioRef.current.volume = 0.3;
    }
  }, [song.startTime]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const bgColor = `#${song.bg}`;

  return (
    <div
      className="relative flex flex-row w-full items-center px-2 py-2.5 rounded-xl"
      style={{ backgroundColor: bgColor }}
    >
      <audio ref={audioRef} src={song.audioSrc} onEnded={handleEnded} />
      <Link
        href={song.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <Image
          src={song.coverImage}
          alt="ggs"
          width={60}
          height={60}
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
      </Link>
      <div className="flex flex-col ml-3 space-y-0.5 text-white">
        <p className="font-[550] text-sm">{song.title}</p>
        <h4 className="font-[450] text-[0.6875rem] opacity-80">
          {song.artist}
        </h4>
      </div>
      <Link
        href={song.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2.5 right-2 w-5 h-5 text-white hover:opacity-90 transition-opacity duration-300 cursor-pointer"
      >
        <PiSpotifyLogoFill className="w-full h-full" />
      </Link>
      <motion.button
        onClick={togglePlayPause}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", duration: 0.02, bounce: 0 }}
        className="absolute bottom-1.5 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-white transition-all duration-200 cursor-pointer"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <IoMdPause className="w-4 h-4" style={{ fill: bgColor }} />
        ) : (
          <IoMdPlay className="w-4 h-4 ml-0.5" style={{ fill: bgColor }} />
        )}
      </motion.button>
    </div>
  );
}

export function Music() {
  return (
    <div className="space-y-6">
      <h2 className="section-title">Music</h2>

      <div className="grid grid-cols-2 gap-3.5">
        {songs.map((song, index) => (
          <MusicCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
}
