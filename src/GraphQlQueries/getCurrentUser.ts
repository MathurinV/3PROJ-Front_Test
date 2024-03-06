import axios from 'axios';
import {apiEndpoint} from "../globalConsts.ts";

// Define the signIn function
export async function getCurrentUser() {
    const getCurrentUserQuery: string =
        `query {
            currentUser{
                balance
                userName
                email
                id
            }
        }`;

    const response = await axios.post(apiEndpoint, {
        query: getCurrentUserQuery
    }, {
        withCredentials: true, // This will send cookies
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return response.data;
}