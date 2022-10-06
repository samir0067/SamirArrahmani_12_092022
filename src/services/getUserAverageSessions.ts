import axios from "axios";
import { UserActivity, UserAverageSessions } from "utils/types";

/**
 * Mock Data
 */
// const usersAverageSessions: string = process.env.PUBLIC_URL.concat("/mocks/usersAverageSessions.json");

/**
 * Get the user's average sessions in the api
 */
const getUserAverageSessions = (uid?: string): Promise<UserAverageSessions> => {
  return axios
    .get(`${process.env.REACT_APP_API}/user/${uid}/average-sessions`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      throw error.response;
    });
};

export default getUserAverageSessions;
