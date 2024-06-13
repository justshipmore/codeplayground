const SUPPORTED_LANGS = [
  { slug: "html", name: "HTML" },
  { slug: "css", mame: "CSS" },
  { slug: "js", name: "JavaScript" },
];

export default function SelectLanguage() {
  return (
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
  );
}
