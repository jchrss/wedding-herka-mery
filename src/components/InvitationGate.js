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

  /*
    A revisit would otherwise restore the scroll position from last time, and
    the invitation was being revealed at whatever section the guest left off
    at before jumping to the top. The restore is turned off and the page put
    back to the hero up front, while the cover still hides everything.
  */
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

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
    window.scrollTo(0, 0);
    setStage('closing');
    setTimeout(() => setStage('open'), 700);
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
