import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PANELS } from "../constants/panels";
import { OPEN_PANELS_PARAM_NAME } from "../constants/params";

export default function usePanel() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const togglePanel = (panel: typeof PANELS[number]) => {
    const params = new URLSearchParams(searchParams);
    params.set(OPEN_PANELS_PARAM_NAME, panel.slug);
    replace(`${pathname}?${params.toString()}`);
    console.log('oparams: ', params)
  };

  const isPanelOpen = (panel: typeof PANELS[number]) => {
    const openPanels = searchParams.get(OPEN_PANELS_PARAM_NAME);
    return openPanels == panel.slug ? true : false;
  }

  return { togglePanel, isPanelOpen }
}
