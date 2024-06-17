"use client";

import { cn } from "@/lib/utils";
import { LANGUAGE_PANELS } from "@/utils/constants/panels";
import usePanel from "@/utils/hooks/use-panel";

export default function SelectLanguage() {
  const { togglePanel, isPanelOpen } = usePanel();
  return (
    <div className="flex gap-2 px-6 py-4 items-center">
      {LANGUAGE_PANELS.map((panel) => (
        <button
          key={`SelectLanguage--${panel.slug}`}
          data-slug={panel.slug}
          className={cn(
            `px-3 py-2 bg-neutral-800 text-neutral-300 rounded-full text-xs`,
            isPanelOpen(panel) ? "bg-neutral-950" : "bg-neutral-800"
          )}
          onClick={() => togglePanel(panel)}
        >
          {panel.name}
        </button>
      ))}
    </div>
  );
}
