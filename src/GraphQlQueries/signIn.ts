import axios from 'axios';
import {apiEndpoint} from "../globalConsts.ts";

// Define the signIn function
export async function signIn(username: string, password: string, rememberMe: boolean) {
    const signInMutation: string =
        `mutation {
            signIn(appUserLoginDto: { username: "${username}", password: "${password}", rememberMe: ${rememberMe} }) {
                succeeded
                isLockedOut
                isNotAllowed
                requiresTwoFactor
            }
        }
    `;

    const response = await axios.post(apiEndpoint, {
        query: signInMutation
    }, {
        withCredentials: true, // This will send cookies
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return response.data;
}