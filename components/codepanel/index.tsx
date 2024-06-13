import SelectLanguage from "./select-language";

export default function CodePanel() {
  return (
    <section className="bg-neutral-900 h-full flex flex-col flex-grow rounded-lg">
      <SelectLanguage />

      <div className="px-6 py-4 text-neutral-300 text-sm">
        <p>Content goes here </p>
      </div>
    </section>
  );
}
