import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IPrompt} from "../../model/IPrompt";

let singletonId = 3
const idGenerator = () => ++singletonId

const initialState = {
    currentPrompt: {} as IPrompt,
    allPrompts: [
        {
            id: 1,
            title: "Do this",
            text: "Commands to do this",
            description: "Commands to do this",
            downloads: 50,
            date: new Date()
        },
        {
            id: 2,
            title: "Do that",
            text: "Commands to do that",
            description: "Commands to do that",
            downloads: 35,
            date: new Date()
        },
        {
            id: 3,
            title: "Do whatever",
            text: "Commands to do whatever",
            description: "Commands to do whatever",
            downloads: 23,
            date: new Date()
        }
    ] as Array<IPrompt>
}


export const promptsSlice = createSlice({
    name: 'prompts',
    initialState,
    reducers: {
        createPrompt: (state, {payload}) => {
            state.allPrompts.push({
                id: idGenerator(),
                ...payload,
            })
        },
        setCurrentPrompt: (state, {payload}) => {
            state.currentPrompt = state.allPrompts.find(prompt => prompt.id === payload.id) || {} as IPrompt
        },
        editCurrentPrompt: (state, {payload}) => {
            const index = state.allPrompts.findIndex(prompt => prompt.id === state.currentPrompt.id)
            state.allPrompts[index] = {
                ...state.allPrompts[index],
                ...payload
            }
        }
    }
})

export const {createPrompt, setCurrentPrompt, editCurrentPrompt} = promptsSlice.actions
export const allPromptsSelector = (state: RootState) => state.prompts.allPrompts
export const currentPromptSelector = (state: RootState) => state.prompts.currentPrompt
