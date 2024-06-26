"use client";

import { PANELS } from "../constants/panels";
import { OPEN_PANELS_PARAM_NAME } from "../constants/params";
import { useEffect } from "react";
import useQueryString from "./use-query-string";

const DEFAULT_OPEN_PANEL = "html";

export default function usePanel() {
  const { setArrayParams, parseArrayParams } = useQueryString<string[]>(
    OPEN_PANELS_PARAM_NAME
  );
  const openPanels = parseArrayParams();

  useEffect(() => {
    if (!openPanels) setArrayParams([DEFAULT_OPEN_PANEL]);
  }, []);

  const processOpenPanels = (
    formattedOpenPanels: string[],
    panel: (typeof PANELS)[number]
  ) => {
    if (panel.type === "language") {
      return [
        ...formattedOpenPanels.filter(
          (item) => item === "console" || item === "preview"
        ),
        panel.slug,
      ].reverse();
    }

    return formattedOpenPanels.includes(panel.slug)
      ? [...formattedOpenPanels.filter((item) => item !== panel.slug)]
      : [...formattedOpenPanels, panel.slug];
  };

  const togglePanel = (panel: (typeof PANELS)[number]) => {
    const formattedOpenPanels =
      typeof openPanels === "string" ? [openPanels] : (openPanels as string[]);
    const processedOpenPanels = processOpenPanels(formattedOpenPanels, panel);
    return setArrayParams([...processedOpenPanels]);
  };

  const isPanelOpen = (panel: (typeof PANELS)[number]) => {
    if (!openPanels) return false;
    return openPanels?.includes(panel.slug);
  };

  return { togglePanel, isPanelOpen };
}
