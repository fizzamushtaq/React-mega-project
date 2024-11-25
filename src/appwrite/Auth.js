import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  Account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProject);
    this.Account = new Account(this.client);
  }


 

  async CreateAccount({ email, password, name }) {
    try {
      const UserAccount = await this.Account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (UserAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return UserAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.Account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.Account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }
  async logout() {
    try {
      return await this.Account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
