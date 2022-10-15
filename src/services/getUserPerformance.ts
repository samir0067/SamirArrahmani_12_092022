import axios from "axios";
import { UserPerformance } from "utils/types";

/**
 * Get the user's performance in the api or mock
 * @param uid
 */
const getUserPerformance = (uid?: number): Promise<UserPerformance> => {
  return axios
    .get(`${process.env.REACT_APP_API}/user/${uid}/performance`)
    .then((response) => {
      if (process.env.REACT_APP_API_SOURCE === "mockss") {
        const dataFiltered = userPerformance.filter(function (e) {
          return e.data.userId === uid;
        });
        console.log("performance mock", dataFiltered[0].data);
        return dataFiltered[0].data;
      } else {
        console.log("performance api", response.data.data);
        return response.data.data;
      }
    })
    .catch(({ response }) => {
      throw new Error(response);
    });
};

export default getUserPerformance;
