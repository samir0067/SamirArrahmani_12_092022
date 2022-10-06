import axios from "axios";
import { UserActivity } from "utils/types";

/**
 * Mock Data
 */
const usersActivity: string = process.env.PUBLIC_URL + "/mocks/usersActivity.json";

/**
 * Get the user's activity in the api
 */
const getUserActivity = (): Promise<UserActivity> => {
  return axios
    .get(`${usersActivity}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response;
    });
};

export default getUserActivity;
