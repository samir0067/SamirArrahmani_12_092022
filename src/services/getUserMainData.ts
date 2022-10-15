import axios from "axios";
import { UserMainData } from "utils/types";
import { userMainData } from "utils/mocks/userMainData";

/**
 * Get users from api or mock
 */
const getUserMainData = (uid: number): Promise<UserMainData> => {
  return axios
    .get(`${process.env.REACT_APP_API}/user/${uid}`)
    .then(({ data }) => {
      if (process.env.REACT_APP_API_SOURCE === "mocks") {
        const dataFiltered = userMainData.filter(function (e: UserMainData) {
          return e.data.id === uid;
        });
        // console.log("user mock", dataFiltered[0]);
        return dataFiltered[0];
      } else {
        // console.log("user api", data);
        return data;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export default getUserMainData;
