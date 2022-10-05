import axios from "axios";
import { UserMainData } from "utils/types";

/**
 * Mock Data
 */
const userMainData: string = process.env.PUBLIC_URL + "/mocks/userMainData.json";

/**
 * Get users from api
 */
const getUserMainData = (): Promise<UserMainData[]> => {
  return axios
    .get(`${userMainData}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response;
    });
};

export default getUserMainData;
