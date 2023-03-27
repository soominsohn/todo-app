import { Container } from "@mui/system";
import ToDoItem from "./ToDoItem";

const TodoItemList = ({todos}) => {
    return (
        <Container>
            <div>
                {todos.map((todo) => (
                    <ToDoItem todo={todo} />
                ))}
            </div>
        </Container>

    );

}

export default TodoItemList;