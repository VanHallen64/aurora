import { Service, MongooseServiceOptions } from "feathers-mongoose";
import { Application } from "../../declarations";
import { Params } from "@feathersjs/feathers";

export class Users extends Service {
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	constructor(options: Partial<MongooseServiceOptions>, app: Application) {
		super(options);
	}
}
