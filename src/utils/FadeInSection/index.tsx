import { useState, useEffect, useRef, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection = ({ children }: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const curr = domRef.current;
    if (curr) {
      observer.observe(curr);
    }
    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
