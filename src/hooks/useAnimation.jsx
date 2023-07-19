import { useEffect, useRef } from "react";

/**
 * useScrollAnimation is a custom hook to apply scroll-based animations to elements.
 *
 * The hook utilizes the IntersectionObserver API to detect when an element is in the viewport.
 * When an element comes into view, its animation is played by setting the animationPlayState to "running".
 * If the element goes out of view, its animation is paused by setting the animationPlayState to "paused".
 *
 * @param {number} [threshold=0.1] - The threshold for the IntersectionObserver.
 * A value between 0 and 1 where 0 means "as soon as one pixel is visible" and 1 means "the entire element is visible".
 * @returns {React.RefObject} animatedRef - A React ref to attach to the element to animate.
 * The IntersectionObserver will observe this ref to determine when the element is in view.
 */
export const useScrollAnimation = (threshold = 0.3) => {
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
          } else {
            entry.target.style.animationPlayState = "paused";
          }
        });
      },
      { threshold }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, [threshold]);

  return animatedRef;
};
