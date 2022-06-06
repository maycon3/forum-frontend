import { InMemoryDbService } from "angular-in-memory-web-api";
import { HomeData } from "./home/home.data";

export class AppData implements InMemoryDbService {
  createDb(): any {
      const homes = HomeData.homes;
    return {homes};
  }
}
