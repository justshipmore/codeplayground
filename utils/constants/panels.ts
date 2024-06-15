export type PANEL_SLUG = "html" | "css" | "js" | "console" | "preview";

export type PANEL_TYPE = "language" | "layout";

export const PANELS: { name: string; slug: PANEL_SLUG; type: PANEL_TYPE }[] = [
  { name: "HTML", slug: "html", type: "language" },
  { name: "CSS", slug: "css", type: "language" },
  { name: "JavaScript", slug: "js", type: "language" },
  { name: "Console", slug: "console", type: "layout" },
  { name: "Preview", slug: "preview", type: "layout" },
];

export const LANGUAGE_PANELS = PANELS.filter(
  (panel) => panel.type === "language"
);

export const LAYOUT_PANELS = PANELS.filter((panel) => panel.type === "layout");
