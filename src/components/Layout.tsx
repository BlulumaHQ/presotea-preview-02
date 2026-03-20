import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pt-20">{children}</main>
    <Footer />
    <StickyCTA />
  </div>
);

export default Layout;
