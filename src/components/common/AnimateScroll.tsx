import React from "react";
import { useInView } from "react-intersection-observer";

type Intersection = {
  ref: (node?: Element | null | undefined) => void;
  inView: boolean;
};

type AnimateProps = {
  children: React.FC<Intersection>;
  triggerOnce: boolean;
};

const AnimateScroll: React.FC<AnimateProps> = ({ children, triggerOnce }) => {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce,
  });

  if (typeof children === "function") {
    return children({ inView, ref });
  }
  return null;
};

export default AnimateScroll;
