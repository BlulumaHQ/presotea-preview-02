import { Link } from "react-router-dom";
import logo from "@/assets/presotea-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Presotea" className="h-14 w-auto mb-4 brightness-200" />
            <p className="text-sm opacity-70 leading-relaxed">
              Fresh Bubble Tea with quality tea leaves from Taiwan using new brewing technology. Established since 2006.
            </p>
          </div>

          {/* Column 2: Empty Spacer */}
          <div className="hidden lg:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-bold text-base mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Menu", path: "/menu" },
                { label: "Franchise", path: "/franchise" },
                { label: "About", path: "/about" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-bold text-base mb-4">Our Teas</h4>
            <ul className="space-y-2">
              {["Green Tea", "Flower Tea", "Black Tea", "Matcha", "SenCha"].map((tea) => (
                <li key={tea}>
                  <span className="text-sm opacity-70">{tea}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-bold text-base mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:presoteabc@gmail.com"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  presoteabc@gmail.com
                </a>
              </li>
              <li>
                <Link
                  to="/store-locations"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  Store Locations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-5 text-center">
          <p className="text-xs opacity-50">
            © {year} 鮮茶道 Presotea. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 underline"
            >
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a
              href="https://swiftlift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 underline"
            >
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
