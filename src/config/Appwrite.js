import {Client, Account, Databases} from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("645f7b3c5f2eb7d8b387");

export const account = new Account(client);
export const database = new Databases(client, "645f813d27ffb304f3c2");