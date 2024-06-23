export type PANEL_SLUG = "html" | "css" | "js" | "console" | "preview";

export type PANEL_TYPE = "language" | "layout";

export const PANELS: {
  name: string;
  slug: PANEL_SLUG;
  language?: string;
  type: PANEL_TYPE;
}[] = [
  { name: "HTML", slug: "html", language: "xml", type: "language" },
  { name: "CSS", slug: "css", language: "css", type: "language" },
  { name: "JavaScript", slug: "js", language: "javascript", type: "language" },
  { name: "Console", slug: "console", type: "layout" },
  { name: "Preview", slug: "preview", type: "layout" },
];

export const LANGUAGE_PANELS = PANELS.filter(
  (panel) => panel.type === "language"
);

export const LAYOUT_PANELS = PANELS.filter((panel) => panel.type === "layout");
