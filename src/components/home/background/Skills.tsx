import { BackgroundCard } from "./BackgroundCard";
import { BackgroundIcon } from "./BackgroundIcon";

export const Skills = () => (
  <BackgroundCard>
    <div class="bg-white p-5">
      <div class="mx-auto grid gap-x-8 gap-y-8">
        <ul
          role="list"
          class="grid gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-y-8 xl:col-span-2"
        >
          <li>
            <BackgroundIcon
              text={() => (
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">
                  Nextjs
                </h3>
              )}
            >
              <img
                class="h-16 w-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
              />
            </BackgroundIcon>
          </li>
          <li>
            <BackgroundIcon
              text={() => (
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">
                  Javascript
                </h3>
              )}
            >
              <img
                class="h-16 w-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
            </BackgroundIcon>
          </li>
          <li>
            <BackgroundIcon
              text={() => (
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">
                  MySQL
                </h3>
              )}
            >
              <img
                class="h-16 w-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
              />
            </BackgroundIcon>
          </li>
          <li>
            <BackgroundIcon
              text={() => (
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">
                  PostGreSQL
                </h3>
              )}
            >
              <img
                class="h-16 w-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
              />
            </BackgroundIcon>
          </li>
          <li>
            <BackgroundIcon
              text={() => (
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Python
                </h3>
              )}
            >
              <img
                class="h-16 w-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
              />
            </BackgroundIcon>
          </li>
          <li>
            <BackgroundIcon
              text={() => (
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">
                  HTML5
                </h3>
              )}
            >
              <img
                class="h-16 w-16 text-[#0d4048]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
              />
            </BackgroundIcon>
          </li>
          <li>
            <BackgroundIcon
              text={() => (
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">
                  CSS3
                </h3>
              )}
            >
              <img
                class="h-16 w-16 text-[#0d4048]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
              />
            </BackgroundIcon>
          </li>
          <li>
            <BackgroundIcon
              text={() => (
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">
                  Tailwindcss
                </h3>
              )}
            >
              <img
                class="h-16 w-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              />
            </BackgroundIcon>
          </li>
          <li>
            <BackgroundIcon
              text={() => (
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">
                  MaterialUI
                </h3>
              )}
            >
              <img
                class="h-16 w-16 text-[#0d4048]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg"
              />
            </BackgroundIcon>
          </li>
        </ul>
      </div>
    </div>
  </BackgroundCard>
);
