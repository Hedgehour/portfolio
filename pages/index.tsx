import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, useState } from "react";
import { NavBar } from "../components/Navbar/Navbar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skill";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Section/Footer";
import Script from "next/script";
import { createContext } from "react";
import Spinnerbackground from "../components/Spinnerbackdrop";
import Snackbar from "../components/Snackbar";

export interface Alert {
  message: string;
}

export interface AppState {
  grecaptcha: any;
  grecaptchaKeyId?: string;
  token?: string;
  setToken: (token: string) => any;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  alert: Alert | undefined;
  setAlert: (alert: Alert) => void;
}

export const AppContext = createContext<AppState>({
  grecaptcha: {},
  setToken: () => ({}),
  loading: false,
  setLoading: () => ({}),
  alert: undefined,
  setAlert: () => ({}),
});

export default function Home() {
  const [grecaptcha, setGrecaptcha] = useState<any | undefined>();
  const [token, setToken] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<Alert | undefined>();

  const grecaptchaKeyId = process.env.NEXT_PUBLIC_GRECAPTCHA_KEY_ID;

  return (
    <AppContext.Provider
      value={{
        grecaptcha,
        grecaptchaKeyId,
        token,
        setToken,
        loading,
        setLoading,
        alert,
        setAlert,
      }}
    >
      <div className="App">
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Suspense fallback={<></>}>
          <Script
            src={`https://www.google.com/recaptcha/enterprise.js?render=${grecaptchaKeyId}`}
            strategy="lazyOnload"
            onLoad={() => {
              window.grecaptcha.enterprise.ready(async function () {
                setLoading(true);

                try {
                  const initialToken =
                    await window.grecaptcha.enterprise.execute(
                      grecaptchaKeyId,
                      { action: "login" }
                    );
                  setToken(initialToken);
                  setGrecaptcha(window.grecaptcha);
                } catch (error) {
                  setAlert({
                    message:
                      "Captcha failed to load. Please refresh and try again.",
                  });
                } finally {
                  setLoading(false);
                }
              });
            }}
          ></Script>
        </Suspense>
      </div>
      <Spinnerbackground />
      <Snackbar />
    </AppContext.Provider>
  );
}
