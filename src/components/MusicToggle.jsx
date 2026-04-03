"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";

export default function MusicToggleButton() {
  const bars = 5;
  const [heights, setHeights] = useState(Array(bars).fill(4));
  const [isPlaying, setIsPlaying] = useState(false);
  
  const [play, { pause }] = useSound("/audio/bg-music.mp3", { loop: true });

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setHeights(Array.from({ length: bars }, () => Math.random() * 12 + 4));
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleClick = () => {
    if (isPlaying) pause();
    else play();
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-gray-700 text-white p-3 rounded-full flex items-center gap-2 cursor-pointer shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-end gap-1 h-6">
        {heights.map((h, i) => (
          <motion.div
            key={i}
            className="bg-blue-500 w-[2px] rounded"
            animate={{ height: h }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </motion.div>
  );
}