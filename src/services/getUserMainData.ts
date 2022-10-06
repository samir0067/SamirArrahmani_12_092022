import axios from "axios";
import { UserMainData } from "utils/types";

/**
 * Mock Data
 */
// const usersMainData: string = process.env.PUBLIC_URL.concat("/mocks/usersMainData.json");

/**
 * Get users from api
 */
const getUserMainData = (uid: number): Promise<UserMainData> => {
  return axios
    .get(`${process.env.REACT_APP_API}/user/${uid}`)
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      throw new Error(response);
    });
};

export default getUserMainData;
