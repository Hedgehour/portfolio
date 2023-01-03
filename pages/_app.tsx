import "../styles/globals.css";
import "./index.css";
import "../components/Section/Banner.css";
import "../components/Navbar/Navbar.css";
import "../components/skill.css";
import "../components/Section/Projects.css";
import type { AppProps } from "next/app";
import "../components/Contact.css";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
