import { createSlice,nanoid } from "@reduxjs/toolkit";
//createSlice and nanoid are two methods in which nanoid is for generating different ids

const initialState ={
    todos :[{id: 1, text:"hello World"}]
}
//creating a initial state for the store.

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=> {
            const todo = {
                id: nanoid(),
                text: action.payload
                // objects have key(id,text) and values(nanoid,action.payload)
            }
            state.todos.push(todo)
            // function:props(state,action)and object(todos) 
        },
        //:key and function
        removeTodo: (state, action)=> {
            state.todos=state.todos.filter((todo)=>
                todo.id !== action.payload
            )
        }
    }
    //reducer
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer