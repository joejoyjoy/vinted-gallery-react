import { createContext, useState, ReactNode, useEffect } from "react";

export interface RoutingInterface {
  homePageQuery: boolean;
  handleHomePageChange: (boolean: boolean) => void;
}

const defaultState = {
  homePageQuery: true,
  handleHomePageChange: () => {},
} as RoutingInterface;

export const RoutingContext = createContext(defaultState);

export default function RoutingProvider({ children }: { children: ReactNode }) {
  const [homePageQuery, setHomePageQuery] = useState<boolean>(true);

  const handleHomePageChange = (boolean: boolean) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (boolean) {
      searchParams.delete("page");

      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}${searchParams.toString()}`
      );

      return setHomePageQuery(true);
    }

    if (!boolean) {
      const newPage = "favorites";
      searchParams.set("page", newPage);

      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${searchParams.toString()}`
      );

      setHomePageQuery(false);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const valueParam = searchParams.get("page");

    if (valueParam === "favorites") {
      setHomePageQuery(false);
    }
    if (valueParam !== "favorites") {
      setHomePageQuery(true);
    }
  }, []);

  return (
    <RoutingContext.Provider
      value={{
        homePageQuery,
        handleHomePageChange,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
}
