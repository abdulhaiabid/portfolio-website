import { useState, useRef, useEffect } from "react";

function useObserver(element) {
  const [isEntityObserved, setIsEntityObserved] = useState(false);
  const entityRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(enteries => {
      if (enteries[0].isIntersecting) {
        setIsEntityObserved(true);
        if (entityRef.current) {
          observer.unobserve(entityRef.current);
          console.log(enteries[0]);
        }
      }
    }, [
      {
        threshold: 0.6
      }
    ]);

    observer.observe(entityRef.current);

    return () => {
      if (entityRef.current) {
        observer.unobserve(entityRef.current);
      }
    }
  }, []);

  return [entityRef, isEntityObserved];
}

export default useObserver;