import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="m-2 max-w-screen-xl mx-auto">{children}</div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
