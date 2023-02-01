import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, useState } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
import { NavBar } from "../components/Navbar/Navbar";
// import logo from "";

import { Banner } from "../components/Banner";
import { Skills } from "../components/Skill";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Section/Footer";
import Script from "next/script";
import { createContext } from "react";

export interface AppState {
  grecaptcha: any;
  grecaptchaKeyId?: string;
  token?: string;
  setToken: (token: string) => any;
}

export const AppContext = createContext<AppState>({
  grecaptcha: {},
  setToken: () => ({}),
});

export default function Home() {
  const [grecaptcha, setGrecaptcha] = useState<any | undefined>();
  const [token, setToken] = useState<string | undefined>();
  // const handleSetToken = (token: string) => setToken(token);
  const grecaptchaKeyId = process.env.NEXT_PUBLIC_GRECAPTCHA_KEY_ID;

  return (
    <AppContext.Provider
      value={{ grecaptcha, grecaptchaKeyId, token, setToken }}
    >
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Suspense fallback={<></>}>
          <Script
            src={`https://www.google.com/recaptcha/enterprise.js?render=${grecaptchaKeyId}`}
            strategy="lazyOnload"
            onLoad={() => {
              window.grecaptcha.enterprise.ready(async function () {
                // startLoading();
                try {
                  const initialToken =
                    await window.grecaptcha.enterprise.execute(
                      grecaptchaKeyId,
                      { action: "login" }
                    );
                  setToken(initialToken);
                  setGrecaptcha(window.grecaptcha);
                } catch (error) {
                  // createToast({
                  //   id: toasts.length,
                  //   message:
                  //     "Captcha failed to load. Please refresh and try again.",
                  //   variant: "error",
                  // });
                } finally {
                  // stopLoading();
                }
              });
            }}
          ></Script>
        </Suspense>
      </div>
    </AppContext.Provider>
  );
}
