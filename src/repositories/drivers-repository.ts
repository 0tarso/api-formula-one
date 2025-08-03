import { DriverModel } from "../models/driver-model";

export const drivers: DriverModel[] = [
  { id: 1, name: "george russell", team: "mercedes", age: 27, country: "united kingdom" },
  { id: 2, name: "kimi antonelli", team: "mercedes", age: 18, country: "italy" },
  { id: 3, name: "lando norris", team: "mclaren", age: 25, country: "united kingdom" },
  { id: 4, name: "oscar piastri", team: "mclaren", age: 24, country: "australia" },
  { id: 5, name: "charles leclerc", team: "ferrari", age: 27, country: "monaco" },
  { id: 6, name: "lewis hamilton", team: "ferrari", age: 40, country: "united kingdom" },
  { id: 7, name: "max verstappen", team: "red bull racing", age: 27, country: "netherlands" },
  { id: 8, name: "yuki tsunoda", team: "red bull racing", age: 25, country: "japan" },
  { id: 9, name: "isack hadjar", team: "racing bulls", age: 20, country: "france" },
  { id: 10, name: "liam lawson", team: "racing bulls", age: 23, country: "new zealand" },
  { id: 11, name: "fernando alonso", team: "aston martin", age: 44, country: "spain" },
  { id: 12, name: "lance stroll", team: "aston martin", age: 26, country: "canada" },
  { id: 13, name: "esteban ocon", team: "haas", age: 28, country: "france" },
  { id: 14, name: "oliver bearman", team: "haas", age: 20, country: "united kingdom" },
  { id: 15, name: "pierre gasly", team: "alpine", age: 29, country: "france" },
  { id: 16, name: "franco colapinto", team: "alpine", age: 22, country: "argentina" },
  { id: 17, name: "alex albon", team: "williams", age: 29, country: "thailand" },
  { id: 18, name: "carlos sainz", team: "williams", age: 30, country: "spain" },
  { id: 19, name: "nico hulkenberg", team: "sauber", age: 37, country: "germany" },
  { id: 20, name: "gabriel bortoleto", team: "sauber", age: 20, country: "brazil" }
];


export const findAllDrivers = async () => {
  return drivers
}


export const findDriverById = async (id: number): Promise<DriverModel | undefined> => {
  return drivers.find(driver => driver.id === id)
}