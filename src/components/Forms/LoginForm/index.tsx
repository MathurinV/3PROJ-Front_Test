import {Box, Button, Paper} from "@mui/material";
import {RefObject, useRef, useState} from "react";
import {RequiredTextField} from "../../_General_/RequiredTextField";

type InputFormInput = {
    onSubmit: (username: string, password: string) => void
}

function InputForm({onSubmit}: InputFormInput) {
    const usernameRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    const passwordRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

    const [isUsernameEmptyOnSubmit, setIsUsernameEmptyOnSubmit] = useState<boolean | null>(null)
    const [isPasswordEmptyOnSubmit, setIsPasswordEmptyOnSubmit] = useState<boolean | null>(null)

    const handleSubmit = () => {
        if (!usernameRef.current?.value) {
            setIsUsernameEmptyOnSubmit(true);
        }
        if (!passwordRef.current?.value) {
            setIsPasswordEmptyOnSubmit(true);
        }
        if (!isUsernameEmptyOnSubmit && !isPasswordEmptyOnSubmit) {
            onSubmit(usernameRef.current?.value as string, passwordRef.current?.value as string);
        }
    }

    return (
        <Box component={Paper} elevation={3} sx={{padding: 2, display: 'flex', flexDirection: 'column', width: 'auto'}}>
            <RequiredTextField fieldRef={usernameRef} textFieldLabel={"Username"} type={undefined}
                               isEmptyField={isUsernameEmptyOnSubmit}/>
            <RequiredTextField fieldRef={passwordRef} textFieldLabel={"Password"} type={"password"}
                               isEmptyField={isPasswordEmptyOnSubmit}/>
            <Button variant="contained" onClick={() => handleSubmit()}>Submit</Button>
        </Box>
    )
}

export default InputForm