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

function getGMapRandomColor() {
    let colorArray = ['rgb(82,0,35)', 'rgb(0,82,54)',
        'rgb(60,0,82)', 'rgb(82,0,29)', 'rgb(82,0,48)',
        'rgb(0,54,82)', "rgb(62,2,35)", "rgb(2,83,72)", "rgb(76,30,1)",
        "rgb(0,65,44)", "rgb(65,0,28)", "rgb(82,0,29)", "rgb(76,6,34)"]
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
        {
            message: 'Will you go to walk tomorrowewg  gggggggggg gggggg gggg ggggwegwegweg ew we',
            time: '11:11',
            id: ''
        },
        {message: 'Will you go to walk tomorrow', time: '11:11', id: ''}
    ]
}
export let dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            let newMessage = {
                message: state.newMessageText,
                id: 4,
                time: liveTime(),
                background: getGMapRandomColor()
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