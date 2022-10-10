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

export type SessionsActivity = {
  day: string;
  kilogram: number;
  calories: number;
};

export type SessionsAverage = {
  day: number;
  sessionLength: number;
};

export type DataPerformance = {
  value: number;
  kind: number;
};

export type UserActivity = {
  data: {
    userId?: string;
    sessions?: SessionsActivity[];
  };
};

export type UserSessionsAverage = {
  userId: number;
  sessions: SessionsAverage[];
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
  data: DataPerformance[];
};
