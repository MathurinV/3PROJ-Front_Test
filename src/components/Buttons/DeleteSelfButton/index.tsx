import {Button} from "@mui/material";

type DeleteSelfProps = {
    onPress: () => void
}

function DeleteSelfButton({onPress}: DeleteSelfProps) {
    return (
        <Button variant="contained" onClick={() => onPress()}>Delete myself</Button>
    )
}

export default DeleteSelfButton