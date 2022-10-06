import axios from "axios";
import { UserPerformance } from "utils/types";

/**
 * Mock Data
 */
// const usersPerformance: string = process.env.PUBLIC_URL.concat("/mocks/usersPerformance.json");

/**
 * Get the user's performance in the api
 */
const getUserPerformance = (uid?: string): Promise<UserPerformance> => {
  return axios
    .get(`${process.env.REACT_APP_API}/user/${uid}/performance`)
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      throw new Error(response);
    });
};

export default getUserPerformance;
