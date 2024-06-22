import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PANELS } from "../constants/panels";
import { OPEN_PANELS_PARAM_NAME } from "../constants/params";

export default function usePanel() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const togglePanel = (panel: (typeof PANELS)[number]) => {
    const params = new URLSearchParams(searchParams);
    if (panel.type === "layout") {
      searchParams.get(OPEN_PANELS_PARAM_NAME) == panel.slug
        ? params.delete(OPEN_PANELS_PARAM_NAME, panel.slug)
        : params.set(OPEN_PANELS_PARAM_NAME, panel.slug);
    } else {
      params.set(OPEN_PANELS_PARAM_NAME, panel.slug);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const isPanelOpen = (panel: (typeof PANELS)[number]) => {
    const openPanels = searchParams.get(OPEN_PANELS_PARAM_NAME);
    return openPanels == panel.slug ? true : false;
  };

  return { togglePanel, isPanelOpen };
}
