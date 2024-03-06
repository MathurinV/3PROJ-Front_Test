import {RefObject, useState} from "react";
import {TextField} from "@mui/material";

type RequiredTextFieldProps = {
    fieldRef: RefObject<HTMLInputElement>
    textFieldLabel: string
    type: string | undefined
    isEmptyField: boolean | null
}

export const RequiredTextField = ({fieldRef, textFieldLabel, type, isEmptyField}: RequiredTextFieldProps) => {
    const textFieldRef = fieldRef;
    const [textFieldEmpty, setTextFieldEmpty] = useState<boolean>(isEmptyField ? isEmptyField : false)

    const handleTextFieldChange = () => {
        setTextFieldEmpty(!textFieldRef.current?.value);
    }

    return (
        <TextField
            id={textFieldLabel.toLowerCase()}
            inputRef={textFieldRef}
            label={textFieldLabel}
            sx={{marginBottom: 2}}
            error={textFieldEmpty}
            helperText={textFieldEmpty ? `${textFieldLabel} is required` : ""}
            onChange={handleTextFieldChange}
            type={type}
            required={true}
        />
    )
}