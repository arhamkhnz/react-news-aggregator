import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="rounded-lg bg-black/10 shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-center text-sm text-gray-500 md:text-left">
          © {currentYear} News Aggregator . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
