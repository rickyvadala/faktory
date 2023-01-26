import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IPrompt} from "../../model/IPrompt";
import {idGenerator, promptsMock} from "../../utils/mocks";
import {serializedDate} from "../../utils/tools";

const initialState = {
    currentUser: {id: 1},
    editorPrompt: {} as IPrompt,
    prompts: promptsMock as Array<IPrompt>,
    commandSelected: ''
}


export const promptsSlice = createSlice({
    name: 'prompts',
    initialState,
    reducers: {
        createPrompt: (state) => {
            state.prompts.push({
                id: idGenerator(),
                downloads: 0,
                owner: state.currentUser.id,
                description: '',
                title: '',
                text: ''
            })
        },
        setEditorPrompt: (state, {payload}) => {
            const prompt = state.prompts.find(prompt => prompt.id === payload.id) || {} as IPrompt
            state.editorPrompt = {...prompt}
        },
        editPrompt: (state, {payload}) => {
            state.editorPrompt = {
                ...state.editorPrompt,
                ...payload
            }
        },
        savePrompt: (state) => {
            const index = state.prompts.findIndex(prompt => prompt.id === state.editorPrompt.id)
            const edited = {
                ...state.prompts[index],
                ...state.editorPrompt,
                date: serializedDate()
            }
            state.prompts[index] = edited
            setEditorPrompt(edited)
            console.log(state.prompts[index])
        },
        onCommandSelected: (state, {payload}) => {
            state.commandSelected = payload
        },
    }
})

export const {createPrompt, editPrompt, savePrompt, setEditorPrompt, onCommandSelected} = promptsSlice.actions
export const allPromptsSelector = (state: RootState) => state.prompts.prompts
export const myPromptsSelector = (state: RootState) => state.prompts.prompts.filter((p: IPrompt) => {
    return p.owner === state.prompts.currentUser.id
})
export const singlePromptSelector = (id: number) => (state: RootState) => {
    return state.prompts.prompts.find((p: IPrompt) => p.id === id)
}
export const commandSelectedSelector = (state: RootState) => state.prompts.commandSelected

