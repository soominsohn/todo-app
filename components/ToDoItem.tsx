import { Container, Checkbox, FormControlLabel } from "@mui/material";


const ToDoItem = ({ todo }) => {

    const { id, text, checked } = todo;

    return (
        <Container>
            <FormControlLabel control={<Checkbox checked={checked} />} label={text} />
        </Container>
    )


}

export default ToDoItem;