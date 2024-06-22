import CodePanel from "@/components/codepanel";
import ConsolePanel from "@/components/consolepanel";
import PreviewPanel from "@/components/previewpanel";

export default function Home() {
  return (
    <main className="px-2 pt-2 h-screen text-white">
      <div className="flex flex-col h-full">
        <section className="flex grow gap-2">
          <CodePanel />
          <PreviewPanel />
        </section>

        <ConsolePanel />
      </div>
    </main>
  );
}
