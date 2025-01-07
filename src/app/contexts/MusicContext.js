'use client';
import { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);

  return (
    <MusicContext.Provider value={{ shouldPlayMusic, setShouldPlayMusic }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusicContext() {
  return useContext(MusicContext);
}