import * as z from "zod";


interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number };


const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
})

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number().nonnegative(),
    completed: z.number().nonnegative(),
    pending: z.number().nonnegative(),
});

export const getTaskInitialState = (): TaskState => {
    const stored = localStorage.getItem('tasksState');

    if (!stored) {
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0,
        };
    }

    const result = TaskStateSchema.safeParse(JSON.parse(stored));

    if (result.error) {
        console.error('Invalid tasks state in localStorage:', result.error);
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0,
        };
    }

    return result.data;
};

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {


    switch (action.type) {

        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload.trim(),
                completed: false,
            };
            const pendings = state.todos.filter(todo => !todo.completed).length;
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: pendings + 1
            };
        }
        case 'TOGGLE_TODO': {
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
                completed: state.completed + (state.todos.find(todo => todo.id === action.payload)?.completed ? -1 : 1),
                pending: state.pending + (state.todos.find(todo => todo.id === action.payload)?.completed ? 1 : -1)
            };
        }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                length: state.length - 1,
                pending: state.pending - (state.todos.find(todo => todo.id === action.payload)?.completed ? 0 : 1),
                completed: state.completed - (state.todos.find(todo => todo.id === action.payload)?.completed ? 1 : 0)
            };
        default:
            return state;
    }

};