import { createContext } from "react";
import { User } from "utils/types";

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
