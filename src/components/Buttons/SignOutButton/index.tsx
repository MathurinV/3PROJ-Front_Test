import {Button} from "@mui/material";

type SignOutButtonProps = {
    onPress: () => void
}

function SignOutButton({onPress}: SignOutButtonProps) {
    return (
        <Button variant="contained" onClick={() => onPress()}>Sign out</Button>
    )
}

export default SignOutButton