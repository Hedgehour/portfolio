import { Match, Switch, type Component } from "solid-js";
import { section } from "./background.signals";
import { Profile } from "./Profile";
import { Education } from "./Education";
import { Skills } from "./Skills";

export const BackgroundContent: Component = () => (
  <Switch fallback={<Profile />}>
    <Match when={section() === "Profile"}>
      <Profile />
    </Match>
    <Match when={section() === "Education"}>
      <Education />
    </Match>
    <Match when={section() === "Skills"}>
      <Skills />
    </Match>
  </Switch>
);
