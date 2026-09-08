'use client';

import { useEffect, useState } from 'react';
import OpeningIntro from './OpeningIntro';
import InvitationCover from './InvitationCover';
import { useMusicContext } from '../app/contexts/MusicContext';

/*
  Wraps the invitation itself. Guests land on "/" (optionally with ?n=Name) and
  see the animated opening, then the cover, then the invitation -- there is no
  separate route for the cover.
*/
export default function InvitationGate({ children }) {
  const [stage, setStage] = useState('intro'); // intro -> cover -> closing -> open
  const { setShouldPlayMusic } = useMusicContext();

  const opened = stage === 'open';

  // The invitation stays mounted behind the cover so its images are ready.
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

  const handleOpen = () => {
    // Started from the click itself so the browser lets the audio play.
    setShouldPlayMusic(true);
    setStage('closing');
    setTimeout(() => setStage('open'), 700);
  };

  return (
    <>
      {stage === 'intro' && <OpeningIntro onComplete={() => setStage('cover')} />}
      {(stage === 'cover' || stage === 'closing') && (
        <InvitationCover onOpen={handleOpen} exiting={stage === 'closing'} />
      )}
      <div aria-hidden={!opened}>{children}</div>
    </>
  );
}
