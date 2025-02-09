export type DateType = {
  startDate: string;
  endDate: string;
  key: string;
};

export interface SearchParam {
  checkInDate: string;
  checkOutDate: string;
  city: string;
  starRate: number;
  sort: string;
  numberOfRooms: number;
  adults: number;
  children: number;
}
