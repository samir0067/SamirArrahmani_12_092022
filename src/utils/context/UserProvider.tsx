import type { ReactNode } from "react";
import React, { useState } from "react";
import { UserMainData } from "utils/types";
import { UserContext } from "utils/context/userContext";

/**
 * use of context to wrap all child components
 * @param { ReactNode } children
 */
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserMainData | undefined>(undefined);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
