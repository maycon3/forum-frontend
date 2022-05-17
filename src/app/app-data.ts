import { InMemoryDbService } from "angular-in-memory-web-api";

export class AppData implements InMemoryDbService {
  createDb(): any {

    return {};
  }
}
