import axios from "axios";
import { UserActivity } from "utils/types";
import { userActivity } from "utils/mocks/userActivity";

/**
 * Get the user's activity in the api or mock
 */
const getUserActivity = (uid?: number): Promise<UserActivity> => {
  return axios
    .get(`${process.env.REACT_APP_API}/user/${uid}/activity`)
    .then(({ data }) => {
      if (process.env.REACT_APP_API_SOURCE === "mocks") {
        const dataFiltered = userActivity.filter(function (e) {
          return e.data.userId === uid;
        });
        // console.log("activity mock", dataFiltered[0]);
        return dataFiltered[0];
      } else {
        // console.log("activity api", data);
        return data;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export default getUserActivity;
