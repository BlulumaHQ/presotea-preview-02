import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Desktop: Fixed right side button */}
      <div className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <Link
          to="/contact"
          className="btn-sticky flex flex-col items-center gap-2 px-4 py-5 rounded-2xl shadow-2xl"
        >
          <MessageCircle size={22} />
          <span className="text-xs font-bold writing-vertical" style={{ writingMode: "vertical-rl" }}>
            Contact Us
          </span>
        </Link>
      </div>

      {/* Mobile: Sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-3">
        <div className="flex gap-3">
          <Link to="/menu" className="btn-secondary flex-1 !py-3 text-center text-sm">
            View Menu
          </Link>
          <Link to="/contact" className="btn-sticky flex-1 text-center text-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default StickyCTA;
