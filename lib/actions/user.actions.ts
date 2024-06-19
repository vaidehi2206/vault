'use server';

import { ID } from "node-appwrite";
import { createAdminClient } from "../appwrite";

export const signIn = async () => {
    try{
        // Mutation / Databse / Make fetch
    } catch (error) {
        console.error('Error', error);
    }
}

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName }  = userData;
  
  try{
        const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(), 
      email, 
      password, 
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("my-custom-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });
    } catch (error) {
        console.error('Error', error);
    }
}