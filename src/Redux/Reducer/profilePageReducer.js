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

export let profilePageReducer = (state, action) =>{
    switch (action.type){
        case 'ADD_POST':
            let newPost = {
                message: state.right.newPostText,
                id: 4,
                time: liveTime(),
                like: 7
            }
            if (state.right.newPostText === '') {
                alert('пусто')
            } else {
                state.right.postData.push(newPost);
                state.right.newPostText = ''
            }
            return state

        case 'CHANGE_POST_TEXT':
            state.right.newPostText = action.text
            return state

        default: return state
    }
}

export let addPostActionCreator = () =>({type: 'ADD_POST'})
export let changePostActionCreator = (text) =>({
    type: 'CHANGE_POST_TEXT',
    text: text
});