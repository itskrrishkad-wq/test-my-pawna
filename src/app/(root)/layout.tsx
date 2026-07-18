import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const RootMainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default RootMainLayout;
