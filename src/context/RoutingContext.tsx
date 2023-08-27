import { createContext, useState, ReactNode, useEffect } from "react";

export interface RoutingInterface {
  homePageQuery: boolean;
  handleHomePageChange: (boolean: boolean) => void;
  isLoading: boolean;
}

const defaultState = {
  homePageQuery: true,
  handleHomePageChange: () => {},
  isLoading: true,
} as RoutingInterface;

export const RoutingContext = createContext(defaultState);

export default function RoutingProvider({ children }: { children: ReactNode }) {
  const [homePageQuery, setHomePageQuery] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleHomePageChange = (boolean: boolean) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (boolean) {
      return searchParams.delete("page");
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
      setIsLoading(false);
    }
    if (valueParam !== "favorites") {
      setHomePageQuery(true);
      setIsLoading(false);
    }
  }, []);

  return (
    <RoutingContext.Provider
      value={{
        homePageQuery,
        handleHomePageChange,
        isLoading,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
}
