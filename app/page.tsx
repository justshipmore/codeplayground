import CodePanel from "@/components/codepanel";
import PreviewPanel from "@/components/previewpanel";

export default function Home() {
  return (
    <main className="px-2 pt-2 h-screen text-white">
      <div className="flex flex-col gap-2 h-full">
        <section className="flex grow gap-2">
          <CodePanel />
          <PreviewPanel />
        </section>

        {/* Console panel */}
        <section className="bg-blue-300 ">
          <p>Console panels</p>
        </section>
      </div>
    </main>
  );
}
