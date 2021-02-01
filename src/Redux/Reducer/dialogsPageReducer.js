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

export let dialogsPageReducer = (state, action) =>{
    switch (action.type){
        case 'SEND_MESSAGE':
            let newMessage = {
                message: state.newMessageText,
                id: 4,
                time: liveTime(),
            }
            if (state.newMessageText === '') {
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

export let sendMessageActionCreator = () =>({type: 'SEND_MESSAGE'})
export let changeMessageTextActionCreator = (text) =>({
    type: 'CHANGE_MESSAGE_TEXT',
    text: text
});