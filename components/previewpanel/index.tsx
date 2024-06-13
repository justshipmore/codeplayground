import OpenInTab from "./open-in-tab";

export default function PreviewPanel() {
  return (
    <section className="bg-neutral-50 h-full flex flex-col flex-grow rounded-lg gap-2">
      <OpenInTab />

      <div className="px-6 py-4 text-neutral-900 text-sm">
        <p>Hello World</p>
      </div>
    </section>
  );
}
