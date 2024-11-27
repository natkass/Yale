import { useState, useEffect } from "react";
import { Draggable } from "react-draggable"; // For drag functionality
import { CategoryMenu, Hero, Incentives, IntroducingSection, Newsletter, ProductsSection } from "@/components";

const Home = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [keyPosition, setKeyPosition] = useState({ x: 0, y: 0 });
  const [unlocking, setUnlocking] = useState(false);

  useEffect(() => {
    if (isUnlocked) {
      setTimeout(() => setUnlocking(false), 1500); // Unlock animation time
    }
  }, [isUnlocked]);

  // Function to handle when the key is dropped
  const handleDrop = () => {
    // Simple condition to check if key is close enough to the lock
    if (keyPosition.x >= 250 && keyPosition.x <= 350 && keyPosition.y >= 300 && keyPosition.y <= 400) {
      setUnlocking(true);
      setTimeout(() => setIsUnlocked(true), 500); // Simulate unlocking delay
    }
  };

  return (
    <>
      {!isUnlocked && !unlocking ? (
        <div className="absolute inset-0 bg-black flex justify-center items-center">
          <div className="relative">
            <img src="/lock.png" alt="Lock" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <Draggable
              position={{ x: keyPosition.x, y: keyPosition.y }}
              onStop={(e, data) => setKeyPosition({ x: data.x, y: data.y })}
            >
              <div className="absolute" onDragEnd={handleDrop}>
                <img src="/key.png" alt="Key" className="w-10 h-10" />
              </div>
            </Draggable>
          </div>
        </div>
      ) : unlocking ? (
        <div className="absolute inset-0 bg-black flex justify-center items-center text-white">
          <div className="text-xl">Unlocking...</div>
        </div>
      ) : (
        <div>
          {/* Home Page Content */}
          <Hero />
          <IntroducingSection />
          <CategoryMenu />
          <ProductsSection />
        </div>
      )}
    </>
  );
};

export default Home;
