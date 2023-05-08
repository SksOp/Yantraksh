import { useEffect, useRef, useState } from "react";

const useAutoScroll = (scrollSpeed) => {
  const scrollRef = useRef(null);
  const [isUserScrolled, setIsUserScrolled] = useState(false);

  const handleWheel = (e) => {
    if (!isUserScrolled) {
      setIsUserScrolled(true);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("wheel", handleWheel);
      return () => {
        scrollRef.current?.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current && !isUserScrolled) {
      const interval = setInterval(() => {
        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight <
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTop += scrollSpeed;
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [scrollSpeed, isUserScrolled]);

  return scrollRef;
};

export default useAutoScroll;
