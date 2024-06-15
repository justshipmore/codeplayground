"use client";

import { useState, MouseEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

type PANEL_SLUGS = "html" | "css" | "js" | "console";

const SUPPORTED_LANGS: { slug: PANEL_SLUGS; name: string }[] = [
  { slug: "html", name: "HTML" },
  { slug: "css", name: "CSS" },
  { slug: "js", name: "JavaScript" },
];

const PARAM_NAME = "openPanels";

export default function SelectLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState<PANEL_SLUGS>("html");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const slug = target.dataset.slug as PANEL_SLUGS;
    setSelectedLanguage(slug);

    const params = new URLSearchParams(searchParams);
    params.set(PARAM_NAME, slug);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 px-6 py-4 items-center">
      {SUPPORTED_LANGS.map((lang) => (
        <button
          key={`${SelectLanguage}--${lang.slug}`}
          data-slug={lang.slug}
          className={cn(
            `px-3 py-2 bg-neutral-800 text-neutral-300 rounded-full text-xs`,
            selectedLanguage === lang.slug ? "bg-neutral-950" : "bg-neutral-800"
          )}
          onClick={onClick}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
