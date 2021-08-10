import { Params } from "@feathersjs/feathers";
import { Service, MongooseServiceOptions } from "feathers-mongoose";
import { Application } from "../../declarations";

// A type interface for our user (it does not validate any data)
interface UserData {
	_id?: string;
	email: string;
	password: string;
	name?: string;
	picture?: string;
	auth0Id?: string;
}

export class Users extends Service {
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	constructor(options: Partial<MongooseServiceOptions>, app: Application) {
		super(options);
	}

	create(data: UserData, params?: Params) {
		// This is the information we want from the user signup data
		const { email, password, auth0Id, name, picture } = data;
		// Use the existing avatar image or return the Gravatar for the email
		const avatar = data.picture;
		// The complete user
		const userData = {
			name,
			email,
			password,
			picture,
			auth0Id,
		};

		// Call the original `create` method with existing `params` and new data
		return super.create(userData, params);
	}
}
