import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quick from "./Quick";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header id="hd"/>
      <div className="contentsArea">{children}</div>
      <Quick id="quick"/>
      <Footer footerVariant="basic"/>
    </div>
  );
};

export default Layout;
