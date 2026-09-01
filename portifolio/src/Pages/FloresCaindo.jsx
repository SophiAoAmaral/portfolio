import { useMemo } from "react";

export function FloresCaindo() {
    
const flores = useMemo(() => {
    return Array.from({ length: 20 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 8 + Math.random() * 10,
    }));
  }, []);

  return (
    <div className="flores-container">
      {flores.map((flor) => (
        <span
          key={flor.id}
          className="flor"
          style={{
            left: `${flor.left}%`,
            animationDelay: `${flor.delay}s`,
            animationDuration: `${flor.duration}s`,
            fontSize: `${flor.size}px`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}