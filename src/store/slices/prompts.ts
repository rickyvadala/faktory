import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IPrompt} from "../../model/IPrompt";
import {allPromptsMock} from "../../utils/mocks";

let singletonId = 3
const idGenerator = () => ++singletonId

const initialState = {
    currentUser: {id: 1},
    currentPrompt: {} as IPrompt,
    allPrompts: allPromptsMock as Array<IPrompt>
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
export const myPromptsSelector = (state: RootState) => state.prompts.allPrompts.filter((p: IPrompt) => {
    return p.owner === state.prompts.currentUser.id
})
