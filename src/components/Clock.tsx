import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-green-glow/30 blur-2xl rounded-full animate-pulse"></div>
      
      {/* Clock container */}
      <div className="relative bg-foreground/5 backdrop-blur-md border-2 border-foreground/30 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center justify-center gap-2 font-mono">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="text-6xl md:text-8xl font-bold text-foreground drop-shadow-lg animate-glow">
              {hours}
            </span>
            <span className="text-sm text-foreground/70 mt-2">Horas</span>
          </div>
          
          {/* Separator */}
          <span className="text-6xl md:text-8xl font-bold text-foreground/60 animate-pulse">:</span>
          
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="text-6xl md:text-8xl font-bold text-foreground drop-shadow-lg animate-glow">
              {minutes}
            </span>
            <span className="text-sm text-foreground/70 mt-2">Minutos</span>
          </div>
          
          {/* Separator */}
          <span className="text-6xl md:text-8xl font-bold text-foreground/60 animate-pulse">:</span>
          
          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="text-6xl md:text-8xl font-bold text-foreground drop-shadow-lg animate-glow">
              {seconds}
            </span>
            <span className="text-sm text-foreground/70 mt-2">Segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
