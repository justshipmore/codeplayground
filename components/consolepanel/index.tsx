"use client";

import { LAYOUT_PANELS } from "@/utils/constants/panels";
import usePanel from "@/utils/hooks/use-panel";

export default function ConsolePanel() {
  const { togglePanel } = usePanel();
  return (
    <section className="flex flex-col py-4 px-6 bg-neutral-950 col-span-2 justify-end">
      <div className="text-neutral-300 text-sm flex-grow">
        Content goes here
      </div>
      <div>
        {LAYOUT_PANELS.map(
          (panel) =>
            panel.slug === "console" && (
              <button
                key={`ConsolePanel-button--${panel.slug}`}
                className="flex text-neutral-300 gap-1 items-center text-xs"
                onClick={() => togglePanel(panel)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                    clipRule="evenodd"
                  />
                </svg>
                {panel.name}
              </button>
            )
        )}
      </div>
    </section>
  );
}
