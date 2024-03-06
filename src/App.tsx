import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./components/Forms/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm";
import {Box} from "@mui/material";
import {signIn} from "./GraphQlQueries/signIn.ts";
import {getCurrentUser} from "./GraphQlQueries/getCurrentUser.ts";
import {signOut} from "./GraphQlQueries/signOut.ts";
import AmIConnectedButton from "./components/Buttons/AmIConnectedButton";
import SignOutButton from "./components/Buttons/SignOutButton";

const onSubmitLogin = (username: string, password: string) => {
    console.log(`Login=> Username: ${username}, Password: ${password}`);
    if (username && password) {
        signIn(username, password, false)
            .then(data => {
                console.log("data => ", data)
                if (data?.data?.signIn?.succeeded) {
                    console.log("Sign in successful");
                } else {
                    console.log(data.error)
                }
            })
            .catch(error => console.error(error));
    }

}

const onGetCurrentUserPress = () => {
    getCurrentUser().then(data => {
        console.log("data => ", data)
        if (data?.data?.currentUser) {
            console.log("User is logged in");
        } else {
            console.log("User is not logged in");
        }
    }).catch(error => console.error(error));
}

const onSubmitRegister = (username: string, email: string, password: string) => {
    console.log(`Register=> Username: ${username}, Email: ${email}, Password: ${password}`);
}

function onSignOutPress() {
    signOut().then(data => {
        console.log("data => ", data)
        if (data?.data) {
            console.log("User is signed out");
        } else {
            console.log("User is not signed out");
        }
    }).catch(error => console.error(error));
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <LoginForm onSubmit={onSubmitLogin}/>
                            <Box sx={{width: 50}}/>
                            <RegisterForm onSubmit={onSubmitRegister}/>
                            <Box sx={{width: 50}}/>
                            {/*Column*/}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <AmIConnectedButton onPress={onGetCurrentUserPress}/>
                                <Box sx={{height: 50}}/>
                                <SignOutButton onPress={onSignOutPress}/>
                            </Box>
                        </Box>
                    </>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
