import { Container, TextField, Button } from '@mui/material';
import { useState, useRef } from 'react';

const ToDoInsertForm = ({항목추가}) => {
    const [item, setItem] = useState("");

    const handleChange = (e) => {
        setItem(e.target.value);
    }
    
    const onSubmit = (e) => {
        항목추가(item);
        setItem('');
        e.preventDefault();
    }

    return (
        <Container>
            <form onSubmit={onSubmit}>
            <TextField type="text" id="outlined-basic" label="입력하세요" variant="outlined" onChange={handleChange} value={item}/>
            <Button variant="contained" type="submit">Add</Button>
            </form>
        </Container>
    );
}

export default ToDoInsertForm;