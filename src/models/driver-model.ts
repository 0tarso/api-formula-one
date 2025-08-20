import { TeamModel } from "./team-model";

export interface DriverModel {
  id: number;
  name: string;
  team: TeamModel;
  age: number;
  country: string;
}