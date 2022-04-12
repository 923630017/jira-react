export interface User {
  id: number;
  name: string;
}
export interface ListItem {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
  pin: boolean;
}
export interface Parmas {
   name: string;
   personId: string
}