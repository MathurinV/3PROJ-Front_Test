import axios from 'axios';
import {apiEndpoint} from "../globalConsts.ts";

// Define the signIn function
export async function register(email: string, password: string, userName: string) {
    const registerQuery: string =
        `mutation {
            createUser(appUserInsertDto: {
                email: "${email}",
                password: "${password}",
                userName: "${userName}"
                role: "User"
            }){
                balance
                userName
                email
                id
            }
        }`;

    const response = await axios.post(apiEndpoint, {
        query: registerQuery
    }, {
        withCredentials: true, // This will send cookies
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return response.data;
}