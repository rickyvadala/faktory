import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IPrompt} from "../../model/IPrompt";
import {idGenerator, promptsMock} from "../../utils/mocks";
import {serializedDate} from "../../utils/tools";
import {FkyViewSelectorType} from "../../components/atoms/fky-view-selector/FkyViewSelector";

const initialState = {
    currentUser: {id: 1},
    editorPrompt: {} as IPrompt,
    prompts: promptsMock as Array<IPrompt>,
    commandSelected: '',
    viewSelected: 'list' as FkyViewSelectorType
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
                img: 'https://media.licdn.com/dms/image/D4D03AQGL_aSdA-H8cw/profile-displayphoto-shrink_400_400/0/1664792465170?e=1680134400&v=beta&t=Z90drI8d-RYGk68Gzv3Bn2BhYUHINskNbCzWaqvFSi0',
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
        onViewSelected: (state, {payload}) => {
            state.viewSelected = payload
        },
    }
})

export const {
    createPrompt,
    editPrompt,
    savePrompt,
    setEditorPrompt,
    onCommandSelected,
    onViewSelected
} = promptsSlice.actions
export const allPromptsSelector = (state: RootState) => state.prompts.prompts
export const myPromptsSelector = (state: RootState) => state.prompts.prompts.filter((p: IPrompt) => {
    return p.owner === state.prompts.currentUser.id
})
export const singlePromptSelector = (id: number) => (state: RootState) => {
    return state.prompts.prompts.find((p: IPrompt) => p.id === id)
}
export const editorPromptSelector = (state: RootState) => state.prompts.editorPrompt
export const commandSelectedSelector = (state: RootState) => state.prompts.commandSelected
export const viewSelectedSelector = (state: RootState) => state.prompts.viewSelected

