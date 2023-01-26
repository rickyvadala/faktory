import {serializedDate} from "../tools";

let singletonId = 7
export const idGenerator = () => ++singletonId
export const promptsMock = [
    {
        id: 1,
        owner: 1,
        title: "Do this",
        text: "Commands to do this",
        description: "Commands to do this",
        downloads: 50,
        date: serializedDate()
    },
    {
        id: 2,
        owner: 2,
        title: "Do that",
        text: "Commands to do that",
        description: "Commands to do that",
        downloads: 35,
        date: serializedDate()
    },
    {
        id: 3,
        owner: 3,
        title: "Do whatever",
        text: "Commands to do whatever",
        description: "Commands to do whatever",
        downloads: 23,
        date: serializedDate()
    },
    {
        id: 4,
        owner: 1,
        title: "Do this",
        text: "Commands to do this",
        description: "Commands to do this",
        downloads: 50,
        date: serializedDate()
    },
    {
        id: 5,
        owner: 2,
        title: "Do that",
        text: "Commands to do that",
        description: "Commands to do that",
        downloads: 35,
        date: serializedDate()
    },
    {
        id: 6,
        owner: 1,
        title: "Do this",
        text: "Commands to do this",
        description: "Commands to do this",
        downloads: 50,
        date: serializedDate()
    },
    {
        id: 7,
        owner: 2,
        title: "Do that",
        text: "Commands to do that",
        description: "Commands to do that",
        downloads: 35,
        date: serializedDate()
    },
]
