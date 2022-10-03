export interface IUserInfos {
  firstName: string;
  lastName: string;
  age: number;
}

export interface IKeyData {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
}

export interface IUserData {
  id: number;
  userInfos: IUserInfos;
  todayScore: number;
  score: number;
  keyData: IKeyData;
}
