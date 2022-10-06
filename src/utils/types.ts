export type User = {
  user?: UserMainData;
  setUser: (u: UserMainData | undefined) => void;
};

export type UserMainData = {
  data: {
    id: string;
    userInfos: {
      firstName: string;
      lastName: string;
      age: number;
    };
    todayScore: number;
    keyData: {
      calorieCount: number;
      proteinCount: number;
      carbohydrateCount: number;
      lipidCount: number;
    };
  };
};

export type UserActivity = {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
};

export type UserAverageSessions = {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
};

export type UserPerformance = {
  userId: number;
  kind: {
    1: "cardio";
    2: "energy";
    3: "endurance";
    4: "strength";
    5: "speed";
    6: "intensity";
  };
  data: {
    value: number;
    kind: number;
  }[];
};
