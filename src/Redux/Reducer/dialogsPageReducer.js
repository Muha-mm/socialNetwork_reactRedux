let liveTime = () =>{
    let data = new Date();
    let hours  = data.getHours()
    let minutes  = data.getMinutes()
    if (minutes+10<20){minutes = '0'+minutes}
    let liveTime = `${hours}:${minutes}`
    return(
        liveTime
    )
}

let initialState = {newMessageText: '',

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
    {message: 'Will you go to walk tomorrow', time: '11:11', id: ''},
    {message: 'So, that will meet near city beach, about 10 a.m', time: '11:11', id: ''},
    {message: 'Heeeey, Ive been standing in front of your door for half an hour', time: '11:11', id: ''}
]}
export let dialogsPageReducer = (state=initialState, action) =>{
    switch (action.type){
        case 'SEND_MESSAGE':
            let newMessage = {
                message: state.newMessageText,
                id: 4,
                time: liveTime(),
            }
            if (state.newMessageText.trim() === '') {
                alert('пусто')
            } else {
                state.M.push(newMessage);
                state.newMessageText = ''
            }
            return state

        case 'CHANGE_MESSAGE_TEXT':
            state.newMessageText = action.text
            return state

        default: return state
    }
}
export default dialogsPageReducer;

export let sendMessageActionCreator = () =>({type: 'SEND_MESSAGE'})
export let changeMessageTextActionCreator = (text) =>({
    type: 'CHANGE_MESSAGE_TEXT',
    text: text
});