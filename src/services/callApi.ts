import axios from "axios";
import { UserMainData } from "utils/types";
import { userMainData } from "utils/mocks/userMainData";
import { userActivity } from "utils/mocks/userActivity";
import { userAverageSessions } from "utils/mocks/userAverageSessions";
import { userPerformance } from "utils/mocks/userPerformance";

/**
 * Get users from api or mock
 * @param uid
 */
const getUserMainData = async (uid: number) => {
  if (process.env.REACT_APP_API_SOURCE === "mocks") {
    const mockMainData = userMainData.filter(function (e: UserMainData) {
      return e.data.id === uid;
    });
    return mockMainData[0];
  } else {
    return axios
      .get(`${process.env.REACT_APP_API}/user/${uid}`)
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};

/**
 * Get the user's activity in the api or mock
 * @param uid
 */
const getUserActivity = async (uid?: number) => {
  if (process.env.REACT_APP_API_SOURCE === "mocks") {
    const mockActivity = userActivity.filter(function (e) {
      return e.data.userId === uid;
    });
    return mockActivity[0];
  } else {
    return axios
      .get(`${process.env.REACT_APP_API}/user/${uid}/activity`)
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};

/**
 * Get the user's average sessions in the api or mock
 * @param uid
 */
const getUserAverageSession = async (uid?: number) => {
  if (process.env.REACT_APP_API_SOURCE === "mocks") {
    const mockAverageSessions = userAverageSessions.filter(function (e) {
      return e.data.userId === uid;
    });
    return mockAverageSessions[0];
  } else {
    return axios
      .get(`${process.env.REACT_APP_API}/user/${uid}/average-sessions`)
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};

/**
 * Get the user's performance in the api or mock
 * @param uid
 */
const getUserPerformance = async (uid?: number) => {
  if (process.env.REACT_APP_API_SOURCE === "mocks") {
    const mockPerformance = userPerformance.filter(function (e) {
      return e.data.userId === uid;
    });
    return mockPerformance[0];
  } else {
    return axios
      .get(`${process.env.REACT_APP_API}/user/${uid}/performance`)
      .then(({ data }) => {
        return data.data;
      })
      .catch(({ response }) => {
        throw new Error(response);
      });
  }
};

const callApi = {
  getUserMainData,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
};

export default callApi;
