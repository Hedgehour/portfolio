import "../styles/globals.css";
import "./index.css";
import "../components/Section/Banner.css";
import "../components/Navbar/Navbar.css";
import "../components/Skill.css";
import "../components/Section/Projects.css";
import "../components/Section/Footer.css";
import type { AppProps } from "next/app";
import "../components/Contact.css";
import React from "react";
import Layout from "../components/Layout";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
