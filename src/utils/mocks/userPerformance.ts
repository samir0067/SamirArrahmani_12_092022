import { UserPerformance } from "utils/types";

export const userPerformance: UserPerformance[] = [
  {
    data: {
      userId: 12,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
      },
      data: [
        {
          value: 80,
          kind: 1,
        },
        {
          value: 120,
          kind: 2,
        },
        {
          value: 140,
          kind: 3,
        },
        {
          value: 50,
          kind: 4,
        },
        {
          value: 200,
          kind: 5,
        },
        {
          value: 90,
          kind: 6,
        },
      ],
    },
  },
  {
    data: {
      userId: 18,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
      },
      data: [
        {
          value: 200,
          kind: 1,
        },
        {
          value: 240,
          kind: 2,
        },
        {
          value: 80,
          kind: 3,
        },
        {
          value: 80,
          kind: 4,
        },
        {
          value: 220,
          kind: 5,
        },
        {
          value: 110,
          kind: 6,
        },
      ],
    },
  },
];
