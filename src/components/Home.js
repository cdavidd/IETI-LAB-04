import React from "react";
import Drawer from "./Drawer";
import { TodoList } from "./TodoList";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


export class Home extends React.Component {

    render() {
        return (
            <div className="id">
                <Drawer />
                <TodoList
                    todoList={[
                        { text: "Learn React", priority: 5, dueDate: new Date() },
                        {
                            text: "Learn about APIs",
                            priority: 4,
                            dueDate: new Date(2020, 1, 23)
                        },
                        {
                            text: "write TODO App",
                            priority: 3,
                            dueDate: new Date(2020, 1, 30)
                        }
                    ]}
                />
                <Fab color="primary" aria-label="add" className="fab" style={{position: "absolute", right: "0px", bottom: "0", margin: "30px"}}>
                    <AddIcon />
                </Fab>
            </div>

        );
    }

}