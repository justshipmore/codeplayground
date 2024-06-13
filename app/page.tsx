import CodePanel from "@/components/codepanel";
import ConsolePanel from "@/components/consolepanel";
import PreviewPanel from "@/components/previewpanel";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-2 px-2 pt-2 h-screen">
      <CodePanel />
      <PreviewPanel />
      <ConsolePanel />
    </main>
  );
}
