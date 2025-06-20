import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      ringRef.current.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-accent rounded-full z-[9999] pointer-events-none"
      />
      <div
        ref={ringRef}
        className="fixed w-8 h-8 border-2 border-accent rounded-full z-[9998] pointer-events-none transition-transform duration-100"
      />
    </>
  );
};

export default CustomCursor;
