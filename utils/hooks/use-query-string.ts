import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

export default function useQueryString<T extends string | string[]>(
  key: string
) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setArrayParams = (value: T) => {
    const query = queryString.stringify(
      { [key]: value },
      { arrayFormat: "comma" }
    );
    replace(`${pathname}?${query}`);
  };

  const parseArrayParams = () => {
    // return queryString.parse(location.search, {arrayFormat: 'comma'})[key];
    return searchParams.get(key)?.split(',');
  };

  return { setArrayParams, parseArrayParams };
}
