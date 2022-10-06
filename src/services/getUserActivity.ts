import axios from "axios";
import { UserActivity } from "utils/types";

/**
 * Mock Data
 */
// const usersActivity: string = process.env.PUBLIC_URL.concat("/mocks/usersActivity.json");

/**
 * Get the user's activity in the api
 */
const getUserActivity = (uid?: string): Promise<UserActivity> => {
  return axios
    .get(`${process.env.REACT_APP_API}/user/${uid}/activity`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      throw error.response;
    });
};

export default getUserActivity;
