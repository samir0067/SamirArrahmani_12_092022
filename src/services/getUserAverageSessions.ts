import axios from "axios";
import { UserSessionsAverage } from "utils/types";
import { userAverageSessions } from "utils/mocks/userAverageSessions";

/**
 * Get the user's average sessions in the api or mock
 */
const getUserAverageSessions = (uid?: number | undefined): Promise<UserSessionsAverage> => {
  return axios
    .get(`${process.env.REACT_APP_API}/user/${uid}/average-sessions`)
    .then(({ data }) => {
      if (process.env.REACT_APP_API_SOURCE === "mocks") {
        const dataFiltered = userAverageSessions.filter(function (e) {
          return e.data.userId === uid;
        });
        // console.log("average-sessions mock", dataFiltered[0]);
        return dataFiltered[0];
      } else {
        // console.log("average-sessions api", data);
        return data;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export default getUserAverageSessions;
