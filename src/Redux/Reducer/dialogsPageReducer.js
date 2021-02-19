let liveTime = () => {
    let data = new Date();
    let hours = data.getHours()
    let minutes = data.getMinutes()
    if (minutes + 10 < 20) {
        minutes = '0' + minutes
    }
    let liveTime = `${hours}:${minutes}`
    return (
        liveTime
    )
}
let getRandomColor = () => {
    let colorArray = ['rgb(45,0,22)', 'rgb(0,38,29)', 'rgb(54,3,64)',
        'rgb(67,2,26)', 'rgb(57,1,36)', 'rgb(0,32,41)',
        "rgb(44,6,67)", "rgb(0,81,68)", "rgb(4,78,70)",
        "rgb(5,67,55)", "rgb(62,4,24)", "rgb(4,58,76)",
        "rgb(0,93,56)"]
    let random = Math.floor(Math.random() * (colorArray.length))
    return colorArray[random];
}

let initialState = {
    newMessageText: '',

    D: [
        {name: 'Patriсk', img: '', id: 1},
        {name: 'Jane', img: '', id: 2},
        {name: 'Patricia', img: '', id: 3},
        {name: 'Anne', img: '', id: 4},
        {name: 'Rachel', img: '', id: 5},
        {name: 'Maria', img: '', id: 7},
        {name: 'One Pelt', img: '', id: 8},
        {name: 'Teresa', img: '', id: 9},
        {name: 'Wane', img: '', id: 10},
        {name: 'Gena', img: '', id: 11},
        {name: 'John', img: '', id: 12},
        {name: 'HR', img: '', id: 13},
        {name: 'Ed', img: '', id: 14},
        {name: 'Edwood', img: '', id: 15},
        {name: 'Charles', img: '', id: 16}
    ],
    M: [
        {message: 'Will you go to walk tomorrow', time: '11:11', id: ''},
    ]
}
export let dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            let newMessage = {
                message: state.newMessageText,
                id: 4,
                time: liveTime(),
                background: getRandomColor()
            }
            if (state.newMessageText.trim() !== '') {
                return {
                    ...state,
                    M: [...state.M, newMessage],
                    newMessageText: ''
                }
            } else {
                return state
            }

        case 'CHANGE_MESSAGE_TEXT':
            console.log('change')
            return {
                ...state,
                newMessageText: action.text
            }
        default:
            return state
    }
}
export default dialogsPageReducer;

export let sendMessageActionCreator = () => ({type: 'SEND_MESSAGE'})
export let changeMessageTextActionCreator = (text) => ({
    type: 'CHANGE_MESSAGE_TEXT',
    text: text
});