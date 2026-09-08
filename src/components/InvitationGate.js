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
    setTimeout(() => {
      // Browsers can restore a previous scroll position on reload, so the
      // invitation is pinned back to the hero as it is revealed.
      window.scrollTo(0, 0);
      setStage('open');
    }, 700);
  };

  return (
    <>
      {/*
        The cover is mounted from the start, underneath the opening, so the
        opening fades straight into it. Mounting it only once the opening had
        finished meant the fade briefly exposed the invitation behind both.
      */}
      {!opened && (
        <InvitationCover
          onOpen={handleOpen}
          exiting={stage === 'closing'}
          interactive={stage === 'cover'}
        />
      )}
      {stage === 'intro' && <OpeningIntro onComplete={() => setStage('cover')} />}
      <div aria-hidden={!opened}>{children}</div>
    </>
  );
}
