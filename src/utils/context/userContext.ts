import { createContext } from "react";
import { User } from "utils/types";

/**
 * creation of the user context
 */
export const UserContext = createContext<User>({
  user: undefined,
  setUser: () => {
    /* do nothing */
  },
});
