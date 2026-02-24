import { useState, useEffect, useRef } from "react";
import { WeddingCard } from "./components/WeddingCard";
import { StoryReveal } from "./components/StoryReveal";
import { Volume2, VolumeX } from "lucide-react";
import aud from './reel.mp3'
export default function App() {
  const [cardOpened, setCardOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (cardOpened && audioRef.current) {
      // Play audio when card opens
      audioRef.current.play().catch(error => {
        console.log("Audio autoplay failed:", error);
        // Fallback: play on first user interaction
      });
    }
  }, [cardOpened]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-red-50 to-orange-50">
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* Traditional Indian wedding music */}
        <source src={aud} type="audio/mpeg" />
      </audio>

      {/* Music Control Button */}
      {cardOpened && (
        <button
          onClick={toggleMute}
          className="fixed top-4 right-4 md:top-6 md:right-6 z-50 bg-gradient-to-br from-yellow-500 to-orange-600 text-red-950 rounded-full p-3 md:p-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 border-2 md:border-4 border-yellow-300"
          title={isMuted ? "संगीत चालू करें / Play Music" : "संगीत बंद करें / Pause Music"}
        >
          {isMuted ? (
            <>
              <VolumeX size={20} className="md:hidden" />
              <VolumeX size={24} className="hidden md:block" />
            </>
          ) : (
            <>
              <Volume2 size={20} className="md:hidden" />
              <Volume2 size={24} className="hidden md:block" />
            </>
          )}
        </button>
      )}

      {!cardOpened ? (
        <WeddingCard onOpen={() => setCardOpened(true)} />
      ) : (
        <StoryReveal onBack={() => setCardOpened(false)} />
      )}
    </div>
  );
}