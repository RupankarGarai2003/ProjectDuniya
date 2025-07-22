import { useState, useEffect, useRef, useMemo } from "react";
import "../styles/Stats.css";

export default function Stats() {
  // Memoize the stats array to avoid unnecessary re-creations on each render
  const stats = useMemo(() => [
    { label: "Projects Completed", value: 500 },
    { label: "Clients Served", value: 100 },
    { label: "Years of Experience", value: 2 },
    { label: "Team Members", value: 20 },
  ], []); // Empty dependency array ensures `stats` is only created once

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [inView, setInView] = useState(false);
  const statsSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    const currentRef = statsSectionRef.current; // Store the current ref value in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stored ref in cleanup
      }
    };
  }, []); // Dependency array is empty because it's run only once when component mounts

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setAnimatedValues((prevValues) =>
        prevValues.map((value, index) => {
          const target = stats[index].value;
          if (value < target) {
            return Math.min(value + Math.ceil(target / 100), target);
          }
          return value;
        })
      );
    }, 35); // Slow down the increment speed

    return () => clearInterval(interval);
  }, [inView, stats]); // Add 'stats' to the dependency array

  return (
    <section ref={statsSectionRef} className="stats-section">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <h4>{animatedValues[index]}+</h4>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
