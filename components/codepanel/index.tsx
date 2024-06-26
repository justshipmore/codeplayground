"use client";

import { LANGUAGE_PANELS } from "@/utils/constants/panels";
import SelectLanguage from "./select-language";
import Editor from "./editor";
import usePanel from "@/utils/hooks/use-panel";

export default function CodePanel() {
  const { isPanelOpen } = usePanel();

  return (
    <div className="bg-neutral-900 flex flex-col w-1/2 rounded-lg">
      <SelectLanguage />
      {LANGUAGE_PANELS.map((panel) => (
        <Editor
          key={`Editor--${panel.language}`}
          isVisible={isPanelOpen(panel)}
          language={panel.language as string}
        />
      ))}
    </div>
  );
}
