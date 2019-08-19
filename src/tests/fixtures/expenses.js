import moment from "moment";

export default [
  {
    id: "1",
    description: "rent",
    amount: 1090500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf(),
    note: "nice"
  },
  {
    id: "2",
    description: "chips",
    amount: 109,
    createdAt: 0,
    note: "chips"
  },
  {
    id: "3",
    description: "game",
    amount: 5000,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf(),
    note: "yes"
  }
];
