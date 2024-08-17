import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="m-2 mx-auto max-w-screen-xl">{children}</div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
