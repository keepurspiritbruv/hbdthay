import { useState, useEffect } from 'react';

export default function BirthdayLandingPage() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    if (isEnvelopeOpen) {
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      setShowMessage(false);
    }
  }, [isEnvelopeOpen]);
  
  const toggleEnvelope = () => {
    setIsEnvelopeOpen(!isEnvelopeOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 relative overflow-hidden">
      {/* Background lily flowers using image */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-30">
        <img 
          src="https://imgur.com/GlP1lKJ" 
          alt="Lily flower" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-30">
        <img 
          src="https://imgur.com/GlP1lKJ" 
          alt="Lily flower" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-20 right-10 w-32 h-32 opacity-20 rotate-45">
        <img 
          src="https://imgur.com/GlP1lKJ" 
          alt="Lily flower" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-20 left-10 w-32 h-32 opacity-20 -rotate-12">
        <img 
          src="https://imgur.com/GlP1lKJ" 
          alt="Lily flower" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 w-24 h-24 opacity-20 rotate-90">
        <img 
          src="https://imgur.com/GlP1lKJ" 
          alt="Lily flower" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 w-24 h-24 opacity-20 -rotate-90">
        <img 
          src="https://imgur.com/GlP1lKJ" 
          alt="Lily flower" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Header */}
      <header className="w-full text-center mb-8 mt-10 relative z-10">
        <h1 className="text-4xl font-light text-pink-600 mb-2 font-serif">Happy 21st Birthday</h1>
        <h2 className="text-5xl font-bold text-pink-800 mb-4 font-serif">Athaya Hanum Mahira</h2>
        <p className="text-xl text-pink-500 italic">"Thaya"</p>
      </header>
      
      {/* Main content with envelope */}
      <main className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center relative z-10">
        <div 
          className={`cursor-pointer transition-all duration-1000 ease-in-out transform ${isEnvelopeOpen ? 'scale-110' : 'hover:scale-105'}`}
          onClick={toggleEnvelope}
        >
          {/* Envelope */}
          <div className="relative w-80 h-64 mx-auto">
            {/* Envelope body */}
            <div className="absolute bottom-0 w-full h-48 bg-pink-200 rounded-md shadow-lg border-2 border-pink-300"></div>
            
            {/* Envelope flap */}
            <div 
              className={`absolute top-0 w-full h-32 bg-pink-300 origin-bottom transition-all duration-1000 ease-in-out rounded-t-3xl z-20 
                ${isEnvelopeOpen ? 'transform -rotate-180 translate-y-8' : ''}`}
              style={{
                clipPath: 'polygon(0 100%, 50% 40%, 100% 100%, 100% 0, 0 0)',
                transformOrigin: 'bottom'
              }}
            ></div>
            
            {/* Envelope inner */}
            <div 
              className={`absolute top-4 w-72 mx-4 h-40 bg-white rounded shadow-inner transition-all duration-700 ease-in-out z-10
                ${isEnvelopeOpen ? 'transform translate-y-6' : ''}`}
            >
              {showMessage && (
                <div className="w-full h-full p-3 flex flex-col items-center justify-center transition-opacity duration-500 opacity-100">
                  {/* This would be replaced with a real photo */}
                  <div className="w-32 h-32 bg-pink-100 rounded-full mb-2 shadow-md overflow-hidden">
                    <img 
                      src="https://imgur.com/a/z7Kys0k" 
                      alt="Thaya's Photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-pink-800 text-center font-medium">Wishing you joy and happiness on your special day!</p>
                </div>
              )}
            </div>
            
            {/* Envelope seal */}
            <div className={`absolute top-16 left-1/2 w-10 h-10 bg-pink-400 rounded-full transform -translate-x-1/2 z-30 flex items-center justify-center transition-opacity duration-300 ${isEnvelopeOpen ? 'opacity-0' : 'opacity-100'}`}>
              <span className="text-white text-xs">21</span>
            </div>
          </div>
          
          {/* Instruction text */}
          <p className={`text-center mt-6 text-pink-600 transition-opacity duration-300 ${isEnvelopeOpen ? 'opacity-0' : 'opacity-100'}`}>
            Click the envelope to open
          </p>
        </div>
      </main>
      
      {/* Birthday message section that appears when envelope is opened */}
      <div className={`w-full max-w-2xl mx-auto mt-10 transition-all duration-1000 ${isEnvelopeOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <div className="bg-white bg-opacity-80 rounded-lg p-8 shadow-lg border border-pink-200">
          <h3 className="text-2xl font-serif text-pink-700 mb-4 text-center">Dear Thaya,</h3>
          <p className="text-lg text-pink-900 mb-4 leading-relaxed text-center">
            As you celebrate your 21st birthday, may your day be filled with beautiful moments,
            heartfelt wishes, and the love of those who cherish you.
          </p>
          <p className="text-lg text-pink-900 mb-4 leading-relaxed text-center">
            May this new chapter of your life bring you endless joy, success,
            and all the wonderful experiences you deserve.
          </p>
          <p className="text-xl font-serif text-pink-700 text-center mt-6">
            With love and warm wishes on your special day!
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full text-center mt-16 mb-8 text-pink-500 relative z-10">
        <p>Made with ❤️ for Athaya's 21st Birthday</p>
      </footer>
    </div>
  );
}