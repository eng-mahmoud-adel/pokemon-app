import { useSearchParams } from "react-router-dom";

export function useUrlSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParam = (key: string, value: string | number | null) => {
    const params = new URLSearchParams(searchParams);

    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }

    setSearchParams(params);
  };

  const updateParams = (updates: Record<string, string | number | null>) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) params.delete(key);
      else params.set(key, String(value));
    });

    setSearchParams(params);
  };

  return { updateParam, updateParams, searchParams };
}
