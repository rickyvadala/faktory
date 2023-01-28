import {serializedDate} from "../tools";

let singletonId = 7
export const idGenerator = () => ++singletonId
export const promptsMock = [
    {
        id: 1,
        owner: 1,
        img: 'https://media.licdn.com/dms/image/D4D03AQGL_aSdA-H8cw/profile-displayphoto-shrink_400_400/0/1664792465170?e=1680134400&v=beta&t=Z90drI8d-RYGk68Gzv3Bn2BhYUHINskNbCzWaqvFSi0',
        title: "Do this",
        text: "|Create something great with |gpt + |transcribe it with |whisper + |voiceover it with |play.ht + |publish it to |youtube",
        description: "Commands to do this",
        downloads: 50,
        date: serializedDate(),
        customizations: {
            whisper: {text: 'use the last version', adjust: '--param 25'},
            gpt: {text: 'write in spanish', adjust: '--infoUntil 2005'}
        }
    },
    {
        id: 2,
        owner: 2,
        img: 'https://media.licdn.com/dms/image/D4E03AQEPlNsydd92iA/profile-displayphoto-shrink_200_200/0/1670353748121?e=1680134400&v=beta&t=CmF8ihiUJoXLki3fMcYdnmmaQy8gPhnlY-q7NmvScSk',
        title: "Do that",
        text: "Commands to do that",
        description: "Commands to do that",
        downloads: 35,
        date: serializedDate()
    },
    {
        id: 3,
        owner: 3,
        img: 'https://media.licdn.com/dms/image/C4E0BAQGTa9WKKP9ACA/company-logo_200_200/0/1674141800905?e=1683158400&v=beta&t=d6xzgetlsI_ZvSPvjj2PJsAkPAH7HZ1MEC3kVY0KhL8',
        title: "Do whatever",
        text: "Commands to do whatever",
        description: "Commands to do whatever",
        downloads: 23,
        date: serializedDate()
    },
    {
        id: 4,
        owner: 1,
        img: 'https://media.licdn.com/dms/image/D4D03AQGL_aSdA-H8cw/profile-displayphoto-shrink_400_400/0/1664792465170?e=1680134400&v=beta&t=Z90drI8d-RYGk68Gzv3Bn2BhYUHINskNbCzWaqvFSi0',
        title: "Do this",
        text: "Commands to do this",
        description: "Commands to do this",
        downloads: 50,
        date: serializedDate()
    },
    {
        id: 5,
        owner: 2,
        img: 'https://media.licdn.com/dms/image/D4E03AQEPlNsydd92iA/profile-displayphoto-shrink_200_200/0/1670353748121?e=1680134400&v=beta&t=CmF8ihiUJoXLki3fMcYdnmmaQy8gPhnlY-q7NmvScSk',
        title: "Do that",
        text: "Commands to do that",
        description: "Commands to do that",
        downloads: 35,
        date: serializedDate()
    },
    {
        id: 6,
        owner: 1,
        img: 'https://media.licdn.com/dms/image/D4D03AQGL_aSdA-H8cw/profile-displayphoto-shrink_400_400/0/1664792465170?e=1680134400&v=beta&t=Z90drI8d-RYGk68Gzv3Bn2BhYUHINskNbCzWaqvFSi0',
        title: "Do this",
        text: "Commands to do this",
        description: "Commands to do this",
        downloads: 50,
        date: serializedDate()
    },
    {
        id: 7,
        owner: 2,
        img: 'https://media.licdn.com/dms/image/D4E03AQEPlNsydd92iA/profile-displayphoto-shrink_200_200/0/1670353748121?e=1680134400&v=beta&t=CmF8ihiUJoXLki3fMcYdnmmaQy8gPhnlY-q7NmvScSk',
        title: "Do that",
        text: "Commands to do that",
        description: "Commands to do that",
        downloads: 35,
        date: serializedDate()
    },
]
