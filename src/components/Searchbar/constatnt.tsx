import { DateType } from "./type";

export const intialValues = {
  checkInDate: new Date().toLocaleDateString(),
  checkOutDate: new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000
  ).toLocaleDateString(),
  city: "",
  starRate: 0,
  sort: "desc",
  numberOfRooms: 1,
  adults: 2,
  children: 0,
};

export const DateIntialValue: DateType[] = [
  {
    startDate: new Date().toLocaleDateString(),
    endDate: new Date(
      new Date().getTime() + 24 * 60 * 60 * 1000
    ).toLocaleDateString(),
    key: "selection",
  },
];
