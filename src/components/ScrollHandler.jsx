import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollHandler() {
  const { pathname, key } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // ALWAYS START AT TOP
    if (navigationType !== "POP") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
    // RESTORE EXACT SCROLL POSITION (Back/Forward)
    else {
      const savedPosition = sessionStorage.getItem(`scroll-${key}`);
      if (savedPosition) {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          left: 0,
          behavior: "auto",
        });
      }
    }
  }, [pathname, key, navigationType]);

  // SAVE SCROLL POSITION BEFORE LEAVING PAGE
  useEffect(() => {
    const savePosition = () => {
      sessionStorage.setItem(`scroll-${key}`, window.scrollY.toString());
    };

    window.addEventListener("scroll", savePosition);
    return () => window.removeEventListener("scroll", savePosition);
  }, [key]);

  return null;
}
