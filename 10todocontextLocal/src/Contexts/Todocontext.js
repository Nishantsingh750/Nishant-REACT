import { createContext,useContext } from "react";

export const todocontext = createContext(
    {
        todos: [
            {
                id:1,
                todo:"todo msg",
                completed:false,
            }
        ],
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{}

    }
)
export const TodoProvider = todocontext.Provider

export const useTodo = () => {
    return useContext(todocontext)
}