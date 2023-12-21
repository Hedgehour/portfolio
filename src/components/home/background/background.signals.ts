import { createSignal } from "solid-js";

export type BackgroundSection = "Profile" | "Education" | "Skills";
export const [section, setSection] = createSignal<BackgroundSection>("Profile");
