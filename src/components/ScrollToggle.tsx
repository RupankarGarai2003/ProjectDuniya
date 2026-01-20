import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollToggle = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-10 w-10 rounded-full
        bg-green-600 text-white
        shadow-md
        hover:bg-green-700
        transition-all
      "
      aria-label="Scroll page"
    >
      {isAtTop ? (
        <FaArrowDown className="text-green-200 text-sm" />
      ) : (
        <FaArrowUp className="text-green-200 text-sm" />
      )}
    </button>
  );
};

export default ScrollToggle;
