export type User = {
  user?: UserMainData;
  setUser: (u: UserMainData | undefined) => void;
};

export type UserMainData = {
  data: {
    id: number;
    userInfos: {
      firstName: string;
      lastName: string;
      age: number;
    };
    todayScore?: number;
    score?: number;
    keyData: {
      calorieCount: number;
      proteinCount: number;
      carbohydrateCount: number;
      lipidCount: number;
    };
  };
};

export type SessionsActivity = {
  day: string;
  kilogram: number;
  calories: number;
};

export type UserActivity = {
  data: {
    userId?: string;
    sessions?: SessionsActivity[];
  };
};

export type SessionsAverage = {
  day: number;
  sessionLength: number;
};

export type UserSessionsAverage = {
  data: {
    userId: number;
    sessions: SessionsAverage[];
  };
};

export type SessionsPerformance = {
  value: number;
  kind: string;
};

export type UserPerformance = {
  userId: number;
  kind: SessionsPerformance[];
  data: SessionsPerformance[];
};
