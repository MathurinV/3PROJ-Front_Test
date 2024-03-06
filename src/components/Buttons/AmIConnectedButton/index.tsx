import {Button} from "@mui/material";

type AmIConnectedButtonProps = {
    onPress: () => void
}

function AmIConnectedButton({onPress}: AmIConnectedButtonProps) {
    return (
        <Button variant="contained" onClick={() => onPress()}>Am I connected?</Button>
    )
}

export default AmIConnectedButton