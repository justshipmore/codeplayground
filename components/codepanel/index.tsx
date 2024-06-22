import SelectLanguage from "./select-language";

export default function CodePanel() {
  return (
    <div className="bg-neutral-900 flex flex-col w-1/2 rounded-lg">
      <SelectLanguage />

      <div className="px-6 py-4 text-neutral-300 text-sm">
        <p>Content goes here </p>
      </div>
    </div>
  );
}
