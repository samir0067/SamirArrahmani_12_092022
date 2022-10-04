import type { ReactNode } from "react";
import React, { createContext, useEffect, useState } from "react";
import { User, UserMainData } from "utils/types";
import getUserMainData from "services/getUserMainData";

/**
 * creation of the user context
 */
export const UserContext = createContext<User>({
  users: undefined,
  user: undefined,
  setUser: () => {
    /* do nothing */
  },
});

/**
 * use of context to wrap all child components
 * @param { ReactNode } children
 */
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserMainData | undefined>(undefined);
  const [users, setUsers] = useState<UserMainData[] | undefined>(undefined);

  useEffect(() => {
    getUserMainData().then((userData) => setUsers(userData));
  }, []);

  return <UserContext.Provider value={{ users, user, setUser }}>{children}</UserContext.Provider>;
};
