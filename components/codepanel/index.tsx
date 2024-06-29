"use client";

import { LANGUAGE_PANELS, PANEL_SLUG } from "@/utils/constants/panels";
import SelectLanguage from "./select-language";
import Editor from "./editor";
import usePanel from "@/utils/hooks/use-panel";
import { useState } from "react";

export default function CodePanel() {
  const { isPanelOpen } = usePanel();
  const [xml, setXML] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJS] = useState("");

  const getValue = (panel: PANEL_SLUG) => {
    switch (panel) {
      case "js" as string:
        return js;
      case "css":
        return css as string;
        break;
      default:
        return xml as string;
    }
  };

  return (
    <div className="bg-neutral-900 flex flex-col w-1/2 rounded-lg">
      <SelectLanguage />
      {LANGUAGE_PANELS.map((panel) => (
        <Editor
          key={`Editor--${panel.language}`}
          isVisible={isPanelOpen(panel)}
          language={panel.language as string}
          value={getValue(panel.slug)}
          onChange={(value: string) => {
            switch (panel.slug) {
              case "js":
                return setJS(value);
              case "css":
                return setCSS(value);
                break;
              default:
                return setXML(value);
            }
          }}
        />
      ))}
    </div>
  );
}
