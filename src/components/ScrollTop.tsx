
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop component to reset scroll when route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollToTop;