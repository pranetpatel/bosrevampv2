"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type ScrollyNavAxis = "vertical" | "horizontal";

type ScrollyModeValue = {
  navAxis: ScrollyNavAxis;
  /** Tracks any pinned horizontal rail (supports multiple rails on one page). */
  reportHorizontalPin: (railId: string, active: boolean) => void;
};

const ScrollyModeContext = createContext<ScrollyModeValue | null>(null);

export function ScrollyModeProvider({ children }: { children: ReactNode }) {
  const [navAxis, setNavAxis] = useState<ScrollyNavAxis>("vertical");
  const activeRails = useRef(new Set<string>());

  const reportHorizontalPin = useCallback((railId: string, active: boolean) => {
    if (active) activeRails.current.add(railId);
    else activeRails.current.delete(railId);
    setNavAxis(activeRails.current.size > 0 ? "horizontal" : "vertical");
  }, []);

  const value = useMemo(
    () => ({ navAxis, reportHorizontalPin }),
    [navAxis, reportHorizontalPin],
  );

  return <ScrollyModeContext.Provider value={value}>{children}</ScrollyModeContext.Provider>;
}

export function useScrollyMode(): ScrollyModeValue | null {
  return useContext(ScrollyModeContext);
}
