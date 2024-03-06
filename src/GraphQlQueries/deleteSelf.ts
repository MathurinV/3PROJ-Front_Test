import axios from 'axios';
import {apiEndpoint} from "../globalConsts.ts";

// Define the signIn function
export async function deleteSelf() {
    const signOutMutation: string =
        `mutation{
            deleteSelf
        }`;

    const response = await axios.post(apiEndpoint, {
        query: signOutMutation
    }, {
        withCredentials: true, // This will send cookies
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return response.data;
}