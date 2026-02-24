import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Heart, Calendar, MapPin, Clock, Sparkles, ArrowLeft } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "मंगलाचरणम्",
    titleEn: "Auspicious Beginning",
    content: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    contentEn: "O Lord Ganesha, of curved trunk and massive body, with the brilliance of a million suns, please make all my endeavors free of obstacles, always.",
    emoji: "🐘",
    color: "from-orange-900 via-red-900 to-red-800"
  },
  {
    id: 2,
    title: "दो परिवारों का मिलन",
    titleEn: "Union of Two Families",
    verse: "मिलन है दो परिवारों का,\nरस्म है खुशी मनाने का।\nदो परिवारों के मिलन का यह पवित्र पर्व है,\nआपके स्नेह और आशीर्वाद की हमें परम आवश्यकता है।\nसादर आमंत्रण।",
    emoji: "🏠",
    color: "from-red-900 via-pink-900 to-purple-900"
  },
  {
    id: 3,
    title: "वर-वधू परिचय",
    titleEn: "Introduction of Bride & Groom",
    family: {
      groom: "श्री कमलेश्वरी चौपाल के सुपुत्र",
      groomEn: "Son of Shri Kamleshwari Choupal",
      groomName: "अजीत",
      bride: "श्री विनोद चौपाल की सुपुत्री",
      brideEn: "Daughter of Shri Vinod Choupal",
      brideName: "संजना"
    },
    verse: "हाथों में मेंहदी रचाई होगी,\nमाथे पर बिंदिया सजाई होगी।\अजीत लाएगा संजना को अपने आँगन,\nशायद संजना ने अजीत को दुआओं में सजाया होगा।",
    icon: "💑",
    color: "from-purple-900 via-red-900 to-orange-900"
  },
  {
    id: 4,
    title: "सप्तपदी",
    titleEn: "Seven Sacred Steps",
    content: "सात वचन, सात फेरे",
    shloka: "सखा सप्तपदा भव।\nसखायौ सप्तपदा बभूव।\nसख्यं ते गमेयं\nसख्यात् ते मा योषम्॥",
    shlokaEn: "With seven steps, we become friends for seven lifetimes. May our friendship and love never diminish.",
    verse: "हजारों फूल कम होंगे,\nदुल्हन तुम्हें सजाने के लिए।\nचुटकी भर सिन्दूर काफी है,\nजिन्दगी भर निभाने के लिए।",
    emoji: "💍",
    color: "from-purple-900 via-red-900 to-orange-900"
  },
  {
    id: 5,
    title: "शुभाशीष",
    titleEn: "Blessings",
    verse: "आपके शुभ आगमन से,\nहृदय सुमन खिल जाएगा।\nकष्ट तो होगा आपको,\nगौरव हमारा बढ़ जाएगा।",
    emoji: "🙏",
    color: "from-orange-900 via-yellow-900 to-red-900"
  },
  {
    id: 6,
    title: "निमंत्रण",
    titleEn: "Invitation",
    content: "आपकी उपस्थिति से इस शुभ अवसर को और भी मंगलमय बनाएं",
    contentEn: "Grace this auspicious occasion with your blessed presence",
    verse: "प्यार में बंधन चल रहा है,\nएक प्यारे रिश्ते का बंधन है।\nपूरे परिवार सहित आपका हार्दिक अभिनंदन है।",
    emoji: "🎊",
    color: "from-red-900 via-orange-900 to-yellow-900",
    isFinal: true
  }
];

export function AjitStoryReveal({ onBack }: { onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowDetails(true);
    }
  };

  // Auto-advance after 5 seconds if user doesn't click
  useEffect(() => {
    const timer = setTimeout(() => {
      nextStep();
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentStep, showDetails]);

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen relative overflow-hidden pb-24">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-gradient-to-br from-yellow-500 to-orange-600 text-red-950 rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 border-4 border-yellow-300"
        title="वापस जाएं / Go Back"
      >
        <ArrowLeft size={24} />
      </motion.button>

      {/* Animated background gradient */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${showDetails ? "from-red-900 via-orange-900 to-yellow-900" : currentStepData.color}`}
      />

      {/* Traditional pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 215, 0, 0.1) 35px, rgba(255, 215, 0, 0.1) 70px)`
      }}></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-2 sm:p-4 pt-16 sm:pt-20 md:pt-8">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            {!showDetails ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                {/* Step card with traditional design */}
                <div className="bg-gradient-to-br from-red-950 to-orange-950 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border-4 md:border-8 border-yellow-600">
                  {/* Top border */}
                  <div className="h-12 md:h-16 bg-gradient-to-b from-yellow-600 to-yellow-700 relative">
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(139, 0, 0, 0.3) 10px, rgba(139, 0, 0, 0.3) 20px)`
                    }}></div>
                    <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2">
                      <span className="text-xl md:text-2xl">🪔</span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 md:p-16 text-center">
                    {/* Step counter */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="mb-4 md:mb-6"
                    >
                      <div className="inline-block bg-gradient-to-br from-yellow-500 to-orange-600 text-red-950 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-base md:text-xl font-bold shadow-lg border-2 md:border-4 border-yellow-300">
                        {currentStep + 1}/{steps.length}
                      </div>
                    </motion.div>

                    {/* Emoji/Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4, type: "spring" }}
                      className="text-6xl sm:text-7xl md:text-9xl mb-4 md:mb-6"
                    >
                      {currentStepData.emoji || currentStepData.icon}
                    </motion.div>

                    {/* Title in Sanskrit */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mb-4 md:mb-6"
                    >
                      <h2 className="text-3xl sm:text-4xl md:text-6xl text-yellow-300 font-bold mb-2" style={{ fontFamily: 'serif' }}>
                        {currentStepData.title}
                      </h2>
                      <p className="text-yellow-200/80 text-base sm:text-lg md:text-xl italic">
                        {currentStepData.titleEn}
                      </p>
                    </motion.div>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex justify-center items-center gap-2 md:gap-4 mb-6 md:mb-8"
                    >
                      <div className="h-px bg-yellow-500 w-12 md:w-20"></div>
                      <span className="text-yellow-400 text-xl md:text-2xl">卍</span>
                      <div className="h-px bg-yellow-500 w-12 md:w-20"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="mb-6 md:mb-8"
                    >
                      <div className="bg-orange-950/50 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-yellow-700 mb-4 md:mb-6">
                        {currentStepData.content && (
                          <>
                            <p className="text-lg sm:text-xl md:text-3xl text-yellow-100 leading-relaxed mb-3 md:mb-4 whitespace-pre-line" style={{ fontFamily: 'serif' }}>
                              {currentStepData.content}
                            </p>
                            {currentStepData.contentEn && (
                              <p className="text-yellow-200/80 text-sm sm:text-base md:text-lg italic">
                                {currentStepData.contentEn}
                              </p>
                            )}
                          </>
                        )}
                        
                        {currentStepData.family && (
                          <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
                            <div className="bg-red-950/40 rounded-lg md:rounded-xl p-3 md:p-4 border border-yellow-600/30">
                              <p className="text-xl sm:text-2xl md:text-3xl text-yellow-200 mb-1 md:mb-2 font-bold" style={{ fontFamily: 'serif' }}>
                                {currentStepData.family.groomName}
                              </p>
                              {/* <p className="text-base sm:text-lg md:text-xl text-yellow-300/90" style={{ fontFamily: 'serif' }}>
                                {currentStepData.family.groom}
                              </p> */}
                              {/* <p className="text-yellow-200/70 text-xs sm:text-sm md:text-base italic mt-1">
                                {currentStepData.family.groomEn}
                              </p> */}
                            </div>
                            
                            <div className="bg-red-950/40 rounded-lg md:rounded-xl p-3 md:p-4 border border-yellow-600/30">
                              <p className="text-xl sm:text-2xl md:text-3xl text-yellow-200 mb-1 md:mb-2 font-bold" style={{ fontFamily: 'serif' }}>
                                {currentStepData.family.brideName}
                              </p>
                              {/* <p className="text-base sm:text-lg md:text-xl text-yellow-300/90" style={{ fontFamily: 'serif' }}>
                                {currentStepData.family.bride}
                              </p>
                              <p className="text-yellow-200/70 text-xs sm:text-sm md:text-base italic mt-1">
                                {currentStepData.family.brideEn}
                              </p> */}
                            </div>
                          </div>
                        )}
                        
                        {currentStepData.shloka && (
                          <>
                            <p className="text-base sm:text-lg md:text-xl text-yellow-100 mt-3 md:mt-4 mb-2 leading-relaxed" style={{ fontFamily: 'serif' }}>
                              {currentStepData.shloka}
                            </p>
                            <p className="text-yellow-200/80 text-xs sm:text-sm md:text-base italic mb-3 md:mb-4">
                              {currentStepData.shlokaEn}
                            </p>
                          </>
                        )}

                        {/* Verse */}
                        {currentStepData.verse && (
                          <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t-2 border-yellow-700/50">
                            <p className="text-base sm:text-lg md:text-2xl text-yellow-100 leading-relaxed whitespace-pre-line" style={{ fontFamily: 'serif' }}>
                              {currentStepData.verse}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Continue button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextStep}
                      className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-600 text-red-950 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-lg hover:shadow-2xl transition-all border-2 md:border-4 border-yellow-300"
                    >
                      <span className="flex items-center gap-2 md:gap-3">
                        {currentStepData.isFinal ? "विवरण देखें" : "आगे बढ़ें"}
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <ChevronDown size={20} className="sm:hidden" />
                          <ChevronDown size={24} className="hidden sm:block" />
                        </motion.div>
                      </span>
                    </motion.button>

                    {/* Decorative bottom */}
                    <div className="mt-6 md:mt-8 flex justify-center gap-3 md:gap-4 text-2xl md:text-3xl">
                      <span>🌺</span>
                      <span>🪔</span>
                      <span>🌺</span>
                    </div>
                  </div>

                  {/* Bottom border */}
                  <div className="h-8 md:h-12 bg-gradient-to-t from-yellow-600 to-yellow-700 relative">
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(139, 0, 0, 0.3) 10px, rgba(139, 0, 0, 0.3) 20px)`
                    }}></div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Final details section */}
                <WeddingDetails />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function WeddingDetails() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useState(() => {
    const weddingDate = new Date("2026-03-11T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Names with traditional design */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-red-950 to-orange-950 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border-4 md:border-8 border-yellow-600"
      >
        {/* Top border */}
        <div className="h-12 md:h-16 bg-gradient-to-b from-yellow-600 to-yellow-700 relative">
          <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 flex gap-2 md:gap-4 text-xl md:text-2xl">
            <span>🪔</span>
            <span>🕉️</span>
            <span>🪔</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-12 text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6">🙏</div>
          <p className="text-yellow-300 text-xl sm:text-2xl mb-4 md:mb-6" style={{ fontFamily: 'serif' }}>शुभ विवाह</p>
          
          <div className="bg-orange-950/50 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-yellow-700 mb-4 md:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-7xl text-yellow-300 mb-2 md:mb-3 font-bold" style={{ fontFamily: 'serif' }}>
            अजीत
            </h1>
            {/* <p className="text-base sm:text-lg md:text-xl text-yellow-200/90 mb-1" style={{ fontFamily: 'serif' }}>
              श्री कमलेश्वरी चौपाल के सुपुत्र
            </p> */}
            {/* <p className="text-yellow-200/70 text-xs sm:text-sm italic">
              Son of Shri Kamleshwari Choupal
            </p> */}
          </div>
          
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl sm:text-5xl my-6 md:my-8"
          >
            💑
          </motion.div>
          
          <div className="bg-orange-950/50 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-yellow-700 mb-4 md:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-7xl text-yellow-300 mb-2 md:mb-3 font-bold" style={{ fontFamily: 'serif' }}>
            संजना
            </h1>
            {/* <p className="text-base sm:text-lg md:text-xl text-yellow-200/90 mb-1" style={{ fontFamily: 'serif' }}>
             wife father
            </p> */}
            {/* <p className="text-yellow-200/70 text-xs sm:text-sm italic">
              Daughter of wife father
            </p> */}
          </div>

          <div className="mt-6 md:mt-8 flex justify-center gap-3 md:gap-4 text-2xl md:text-3xl">
            <span>🌺</span>
            <span>💐</span>
            <span>🌺</span>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-8 md:h-12 bg-gradient-to-t from-yellow-600 to-yellow-700"></div>
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-red-950 to-orange-950 rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border-4 md:border-8 border-yellow-600"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-4 md:mb-6 text-yellow-300" style={{ fontFamily: 'serif' }}>
          शुभ मुहूर्त तक
        </h3>
        <p className="text-yellow-200 text-center mb-4 md:mb-6 text-sm sm:text-base italic">Countdown to the Auspicious Moment</p>
        
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {[
            { label: "दिन", labelEn: "Days", value: timeLeft.days },
            { label: "घंटे", labelEn: "Hours", value: timeLeft.hours },
            { label: "मिनट", labelEn: "Mins", value: timeLeft.minutes },
            { label: "सेकंड", labelEn: "Secs", value: timeLeft.seconds }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 text-center border-2 md:border-4 border-yellow-400"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-950 mb-1">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm text-red-900 font-semibold" style={{ fontFamily: 'serif' }}>
                {item.label}
              </div>
              <div className="text-[10px] sm:text-xs text-red-800">
                {item.labelEn}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Event details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-red-950 to-orange-950 rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-12 border-4 md:border-8 border-yellow-600"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-2 text-yellow-300" style={{ fontFamily: 'serif' }}>
          विवाह विवरण
        </h3>
        <p className="text-yellow-200 text-center mb-6 md:mb-8 text-sm sm:text-base italic">Wedding Details</p>
        
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-start gap-3 md:gap-4 bg-orange-950/50 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-yellow-700">
            <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full p-2 md:p-3 border-2 md:border-4 border-yellow-400 flex-shrink-0">
              <Calendar className="text-red-950" size={20} />
              <Calendar className="text-red-950 hidden md:block" size={28} />
            </div>
            <div className="flex-1 min-w-0">
  <h4 
    className="text-lg sm:text-xl font-semibold text-yellow-300 mb-1" 
    style={{ fontFamily: 'serif' }}
  >
    तिथि
  </h4>

  <p className="text-yellow-100 text-base sm:text-lg break-words">
    बुधवार, ११ मार्च २०२६
  </p>

  <p className="text-yellow-200/70 text-xs sm:text-sm italic">
    Wednesday, 11th March 2026
  </p>
</div>
          </div>
          
          <div className="flex items-start gap-3 md:gap-4 bg-orange-950/50 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-yellow-700">
            <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full p-2 md:p-3 border-2 md:border-4 border-yellow-400 flex-shrink-0">
              <Clock className="text-red-950 md:hidden" size={20} />
              <Clock className="text-red-950 hidden md:block" size={28} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-1" style={{ fontFamily: 'serif' }}>समय</h4>
              <p className="text-yellow-100 text-base sm:text-lg">संध्या ६:०० बजे</p>
              <p className="text-yellow-200/70 text-xs sm:text-sm italic">Ceremony begins at 6:00 PM</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 md:gap-4 bg-orange-950/50 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-yellow-700">
            <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full p-2 md:p-3 border-2 md:border-4 border-yellow-400 flex-shrink-0">
              <MapPin className="text-red-950 md:hidden" size={20} />
              <MapPin className="text-red-950 hidden md:block" size={28} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-1" style={{ fontFamily: 'serif' }}>स्थान</h4>
              <p 
  className="text-yellow-100 text-base sm:text-lg" 
  style={{ fontFamily: 'serif' }}
>
  ग्राम - कटही
</p>

<p className="text-yellow-200/70 text-sm sm:text-base">
  Village kathi, Bihar
</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Final message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-br from-yellow-600 via-orange-600 to-red-700 rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-12 text-center border-4 md:border-8 border-yellow-400"
      >
        <Sparkles className="text-red-950 mx-auto mb-3 md:mb-4" size={32} fill="currentColor" />
        <Sparkles className="text-red-950 mx-auto mb-4 hidden md:block" size={40} fill="currentColor" />
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-red-950 mb-3 md:mb-4 font-bold" style={{ fontFamily: 'serif' }}>
          आपका स्वागत है
        </h3>
        <p className="text-red-900 text-base sm:text-lg mb-2" style={{ fontFamily: 'serif' }}>
          आपकी उपस्थिति हमारे लिए सौभाग्य है
        </p>
        <p className="text-red-900/80 text-sm sm:text-base italic mb-4 md:mb-6">
          Your presence is our blessing
        </p>
        <div className="text-3xl sm:text-4xl flex justify-center gap-3 md:gap-4">
          <span>🙏</span>
          <span>💐</span>
          <span>🪔</span>
          <span>💐</span>
          <span>🙏</span>
        </div>
      </motion.div>
    </div>
  );
}