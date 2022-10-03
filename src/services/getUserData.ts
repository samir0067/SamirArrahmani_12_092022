import axios from "axios";
import { IUserData } from "utils/interface";

const getUserData = async (pathId: string): Promise<IUserData> => {
  let data: IUserData;

  return axios
    .get(`${pathId}`)
    .then((response) => {
      data = response.data;
      return data;
    })
    .catch((error) => {
      throw error.response;
    });
};

export default getUserData;
