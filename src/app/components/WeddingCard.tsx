import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface WeddingCardProps {
  onOpen: () => void;
}

export function WeddingCard({ onOpen }: WeddingCardProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    // Wait for animation to complete before showing next screen
    setTimeout(() => {
      onOpen();
    }, 2000);
  };

  // Auto-open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpening) {
        handleClick();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpening]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background with traditional pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(255, 165, 0, 0.15) 0%, transparent 50%)`,
      }}></div>

      {/* Click instruction */}
      {!isOpening && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-gradient-to-r from-red-700 to-orange-700 text-yellow-100 px-6 py-3 rounded-full shadow-2xl border-2 border-yellow-500">
            <motion.p 
              className="text-sm md:text-base font-semibold flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span>👆</span>
              Click card to open
              <span>👆</span>
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Wedding Card Container */}
      <div className="relative z-10 max-w-4xl w-full perspective-[2000px]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
        >
          {/* Golden glow effect */}
          <div className="absolute -inset-12 bg-gradient-to-r from-yellow-600/30 via-orange-600/30 to-red-600/30 rounded-3xl blur-3xl"></div>
          
          {/* Card wrapper with 3D perspective */}
          <div className="relative" style={{ transformStyle: "preserve-3d" }}>
            <AnimatePresence>
              {!isOpening && (
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl z-50 pointer-events-none"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  🙏
                </motion.div>
              )}
            </AnimatePresence>

            {/* Left door of the card */}
            <motion.div
              animate={isOpening ? { rotateY: -130 } : { rotateY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "left center",
                position: "absolute",
                left: 0,
                top: 0,
                width: "50%",
                height: "100%",
                zIndex: 20
              }}
              onClick={!isOpening ? handleClick : undefined}
              className="cursor-pointer"
            >
              <div className="relative w-full h-full bg-gradient-to-br from-red-900 via-red-800 to-orange-900 rounded-l-3xl shadow-2xl border-8 border-l-8 border-t-8 border-b-8 border-r-4 border-yellow-600 overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255, 215, 0, 0.2) 20px, rgba(255, 215, 0, 0.2) 40px)`
                }}></div>

                {/* Top border decoration */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-yellow-600 to-yellow-700">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(139, 0, 0, 0.3) 10px, rgba(139, 0, 0, 0.3) 20px)`
                  }}></div>
                </div>

                {/* Left side content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-6xl md:text-7xl mb-4">🪔</div>
                  <div className="text-yellow-300 text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'serif' }}>
                    शुभ
                  </div>
                  <div className="text-yellow-200 text-lg">Shubh</div>
                  <div className="mt-8 text-5xl">🌺</div>
                </div>

                {/* Bottom border decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-yellow-600 to-yellow-700"></div>
              </div>
            </motion.div>

            {/* Right door of the card */}
            <motion.div
              animate={isOpening ? { rotateY: 130 } : { rotateY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "right center",
                position: "absolute",
                right: 0,
                top: 0,
                width: "50%",
                height: "100%",
                zIndex: 20
              }}
              onClick={!isOpening ? handleClick : undefined}
              className="cursor-pointer"
            >
              <div className="relative w-full h-full bg-gradient-to-br from-orange-900 via-red-800 to-red-900 rounded-r-3xl shadow-2xl border-8 border-r-8 border-t-8 border-b-8 border-l-4 border-yellow-600 overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255, 215, 0, 0.2) 20px, rgba(255, 215, 0, 0.2) 40px)`
                }}></div>

                {/* Top border decoration */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-yellow-600 to-yellow-700">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(139, 0, 0, 0.3) 10px, rgba(139, 0, 0, 0.3) 20px)`
                  }}></div>
                </div>

                {/* Right side content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-6xl md:text-7xl mb-4">🪔</div>
                  <div className="text-yellow-300 text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'serif' }}>
                    विवाह
                  </div>
                  <div className="text-yellow-200 text-lg">Vivah</div>
                  <div className="mt-8 text-5xl">🌺</div>
                </div>

                {/* Bottom border decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-yellow-600 to-yellow-700"></div>
              </div>
            </motion.div>

            {/* Back/Base of the card (visible when doors open) */}
            <div className="relative bg-gradient-to-br from-red-950 via-orange-950 to-red-900 rounded-3xl shadow-2xl border-8 border-yellow-600 overflow-hidden" style={{ width: "100%", aspectRatio: "3/4", maxHeight: "80vh" }}>
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255, 215, 0, 0.15) 30px, rgba(255, 215, 0, 0.15) 60px)`
              }}></div>

              {/* Top decorative border */}
              <div className="h-20 bg-gradient-to-b from-yellow-600 to-yellow-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(139, 0, 0, 0.3) 10px, rgba(139, 0, 0, 0.3) 20px)`
                }}></div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-4 text-3xl">
                  <span>🪔</span>
                  <span>🕉️</span>
                  <span>🪔</span>
                </div>
              </div>

              {/* Inner content */}
              <div className="relative px-8 md:px-12 py-8 flex flex-col items-center justify-center" style={{ height: "calc(100% - 9rem)" }}>
                {/* Ganesh Ji */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isOpening ? 1 : 0 }}
                  transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                  className="text-center mb-6"
                >
                  <div className="text-7xl md:text-8xl mb-3">🐘</div>
                  <p className="text-yellow-400 text-xl md:text-2xl font-semibold" style={{ fontFamily: 'serif' }}>
                    श्री गणेशाय नमः
                  </p>
                </motion.div>

                {/* Main invitation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isOpening ? 1 : 0, y: isOpening ? 0 : 20 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="text-center mb-6"
                >
                  <p className="text-yellow-200 text-xl md:text-2xl mb-4" style={{ fontFamily: 'serif' }}>
                    शुभ विवाह िमन्त्रणम्
                  </p>
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
                </motion.div>

                {/* Names */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isOpening ? 1 : 0, scale: isOpening ? 1 : 0.8 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-red-950/70 to-orange-950/70 rounded-2xl p-6 border-2 border-yellow-600 backdrop-blur-sm">
                    <h2 className="text-4xl md:text-5xl text-yellow-300 font-bold mb-3" style={{ fontFamily: 'serif' }}>
                      अरविन्द
                    </h2>
                    <div className="flex justify-center items-center gap-3 my-4">
                      <div className="h-px bg-yellow-500 w-12"></div>
                      <span className="text-3xl">💑</span>
                      <div className="h-px bg-yellow-500 w-12"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl text-yellow-300 font-bold" style={{ fontFamily: 'serif' }}>
                      सुषमा
                    </h2>
                  </div>
                </motion.div>
              </div>

              {/* Bottom decorative border */}
              <div className="h-16 bg-gradient-to-t from-yellow-600 to-yellow-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(139, 0, 0, 0.3) 10px, rgba(139, 0, 0, 0.3) 20px)`
                }}></div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-6 text-2xl">
                  <span>🌺</span>
                  <span>🪔</span>
                  <span>🌺</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}