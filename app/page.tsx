import { Button } from "@/components/ui/button";
import Image from "next/image";

const SUPPORTED_LANGS = [
  { slug: "html", name: "HTML" },
  { slug: "css", mame: "CSS" },
  { slug: "js", name: "JavaScript" },
];

export default function Home() {
  return (
    <main className="px-2 pt-2 flex">
      {/* Code panel */}
      <div className="bg-neutral-900 h-screen w-1/2 rounded-lg">
        {/* langiage selector */}
        <div className="flex gap-2 px-6 py-4 items-center">
          <button className="px-3 py-2 bg-neutral-950 text-neutral-300 rounded-full text-xs">
            HTML
          </button>
          <button className="px-3 py-2 bg-neutral-800 text-neutral-300 rounded-full text-xs">
            CSS
          </button>
          <button className="px-3 py-2 bg-neutral-800 text-neutral-300 rounded-full text-xs">
            JavaScript
          </button>
        </div>

        {/* Content area */}
        <div className="px-6 py-4 text-neutral-300 text-sm">
          <p>Content goes here </p>
        </div>
      </div>

      {/* Output panel */}
      <div className="bg-neutral-50 h-screen w-1/2 rounded-lg">
        {/* langiage selector */}
        <div className="flex gap-2 px-6 py-4 items-center justify-end">
          <button className="px-3 py-2 bg-neutral-200 text-neutral-800 rounded-full text-xs flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4"
            >
              <path
                fill-rule="evenodd"
                d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                clip-rule="evenodd"
              />
            </svg>
            Open in tab
          </button>
        </div>

        {/* Content area */}
        <div className="px-6 py-4 text-neutral-900 text-sm">
          <p>Hello Worlds</p>
        </div>
      </div>

      <div className="flex w-full py-3 px-8 absolute bg-neutral-950 bottom-0">
        <button className="flex text-neutral-300 gap-1 items-center text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
              clip-rule="evenodd"
            />
          </svg>
          Console
        </button>
      </div>
    </main>
  );
}
