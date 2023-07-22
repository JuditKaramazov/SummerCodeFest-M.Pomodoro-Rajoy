import React, { createContext, useContext, useState } from 'react';
import type { AudioContextProps } from '../types/context/audio';

const bunnyAudio = new Audio('/sounds/bunny.mp3');
const ppAudio = new Audio('/sounds/pp.mp3');
const sunsetAudio = new Audio('/sounds/sunset.mp3');
const wavesAudio = new Audio('/sounds/waves.mp3');

const AudioContext = createContext({} as AudioContextProps);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [bunnySongIsPlaying, setBunnySongIsPlaying] = useState<boolean>(false);
  const [ppSongIsPlaying, setPpSongIsPlaying] = useState<boolean>(false);
  const [sunsetSongIsPlaying, setSunsetSongIsPlaying] = useState<boolean>(false);
  const [wavesSongIsPlaying, setWavesSongIsPlaying] = useState<boolean>(false);

  function play(music: string, volume: string) {
    if (music == 'bunny') {
      bunnyAudio.play();
      setBunnySongIsPlaying(true);
      bunnyAudio.volume = Number(volume) / 100;

      ppAudio.pause();
      setPpSongIsPlaying(false);
      sunsetAudio.pause();
      setSunsetSongIsPlaying(false);
      wavesAudio.pause();
      setWavesSongIsPlaying(false);
    } else if (music == 'pp') {
      ppAudio.play();
      setPpSongIsPlaying(true);
      ppAudio.volume = Number(volume) / 100;

      bunnyAudio.pause();
      setBunnySongIsPlaying(false);
      sunsetAudio.pause();
      setSunsetSongIsPlaying(false);
      wavesAudio.pause();
      setWavesSongIsPlaying(false);
    } else if (music == 'sunset') {
      sunsetAudio.play();
      setSunsetSongIsPlaying(true);
      sunsetAudio.volume = Number(volume) / 100;

      bunnyAudio.pause();
      setBunnySongIsPlaying(false);
      ppAudio.pause();
      setPpSongIsPlaying(false);
      wavesAudio.pause();
      setWavesSongIsPlaying(false);
    } else if (music == 'waves') {
      wavesAudio.play();
      setWavesSongIsPlaying(true);
      wavesAudio.volume = Number(volume) / 100;

      bunnyAudio.pause();
      setBunnySongIsPlaying(false);
      ppAudio.pause();
      setPpSongIsPlaying(false);
      sunsetAudio.pause();
      setSunsetSongIsPlaying(false);
    }
  }

  return (
    <AudioContext.Provider
      value={{
        play,
        bunnySongIsPlaying,
        ppSongIsPlaying,
        sunsetSongIsPlaying,
        wavesSongIsPlaying,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  const hasContext = ctx ?? undefined;

  if (!hasContext) throw new Error('Context not found');
  return hasContext;
}
