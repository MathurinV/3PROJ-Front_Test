import {Box, Button, Paper, TextField} from "@mui/material";
import {useRef, useState} from "react";
import {RequiredTextField} from "../../_General_/RequiredTextField";

type RegisterFormInput = {
    onSubmit: (username: string,
               email: string,
               password: string) => void
}

function RegisterForm({onSubmit}: RegisterFormInput) {
    const usernameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPasswordRef = useRef<HTMLInputElement>(null)

    const [isUsernameFieldEmptyOnSubmit, setIsUsernameFieldEmptyOnSubmit] = useState<boolean | null>(null)
    const [isEmailFieldEmptyOnSubmit, setIsEmailFieldEmptyOnSubmit] = useState<boolean | null>(null)
    const [isPasswordFieldEmptyOnSubmit, setIsPasswordFieldEmptyOnSubmit] = useState<boolean | null>(null)

    const [confirmPasswordError, setConfirmPasswordError] = useState(true)

    const handleSubmit = () => {
        if (!usernameRef.current?.value) {
            setIsUsernameFieldEmptyOnSubmit(true);
        }
        if (!emailRef.current?.value) {
            setIsEmailFieldEmptyOnSubmit(true);
        }
        if (!passwordRef.current?.value) {
            setIsPasswordFieldEmptyOnSubmit(true);
        }
        if (!isUsernameFieldEmptyOnSubmit && !isEmailFieldEmptyOnSubmit && !isPasswordFieldEmptyOnSubmit && !confirmPasswordError) {
            onSubmit(usernameRef.current?.value as string, emailRef.current?.value as string, passwordRef.current?.value as string);
        }
    }

    const handleConfirmPasswordChange = () => {
        setConfirmPasswordError(passwordRef.current?.value !== confirmPasswordRef.current?.value);
    }


    return (
        <Box component={Paper} elevation={3} sx={{padding: 2, display: 'flex', flexDirection: 'column', width: 'auto'}}>
            <RequiredTextField fieldRef={usernameRef} textFieldLabel={"Username"} type={undefined} isEmptyField={isUsernameFieldEmptyOnSubmit}/>
            <RequiredTextField fieldRef={emailRef} textFieldLabel={"Email"} type={undefined} isEmptyField={isEmailFieldEmptyOnSubmit}/>
            <RequiredTextField fieldRef={passwordRef} textFieldLabel={"Password"} type={"password"} isEmptyField={isPasswordFieldEmptyOnSubmit}/>
            <TextField
                type={"password"}
                id="confirmPassword"
                inputRef={confirmPasswordRef}
                label={"Confirm Password"}
                sx={{marginBottom: 2}}
                error={confirmPasswordError}
                helperText={confirmPasswordError ? "Passwords do not match" : ""}
                onChange={handleConfirmPasswordChange}
            />
            <Button variant="contained" onClick={() => handleSubmit()}>Submit</Button>
        </Box>
    )
}

export default RegisterForm