import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    todos: ['Siva', 'Ravi', 'Teja']
}
export const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        delTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        },
        dontodo:(state,action)=>{
            state.todos(action.payload)
        }
    }
})
export const {addTodo,delTodo,dontodo} =todolistSlice.actions;
export default todolistSlice.reducer