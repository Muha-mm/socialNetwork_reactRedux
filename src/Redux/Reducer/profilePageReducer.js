import {merge} from "lodash";
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

let initialState = {
    specialLink: 'accountLink',
    name: 'Leah Riggeti',
    newPostText: '',

    left: {
    ava: 'profilePhotoLink',
        sixFriends: [
        {img: '', name: 'Mura', specialLink: ''},
        {img: '', name: 'Rachel', specialLink: ''},
        {img: '', name: 'Jane', specialLink: ''},
        {img: '', name: 'Grey', specialLink: ''},
        {img: '', name: 'Bunny', specialLink: ''},
        {img: '', name: 'Cat', specialLink: ''}
    ]
},


right: {
        name: 'nameSurname',
        city: 'city',
        birthday: 'date',
        site: 'siteUrl',
        photos: 'photosLink',
        profileData: [
        {friendsCount: 147},
        {photoCount: 3},
        {videoCount: 2},
        {subscribersCount: 147}
    ],
        postData: [
        {
            message: 'ne pokazhic',
            like: 261,
            time: '24.01.21',
            name: '',
            id: 3},
        {
            message: `Visions are worth fighting for. Why spend your life making someone else's dreams? ("Ed Wood", 1994).`,
            like: 236,
            time: '19.01.21',
            name: '',
            id: 1
        },
        {
            message: 'The longer you gaze on an obstacle the bigger it becomes. (Bertie Charles Forbes).',
            like: 63,
            time: '20.01.21',
            name: '',
            id: 2
        },
        {
            message: 'The fellow who isn’t fired with enthusiasm is apt to be fired. (Bertie Charles Forbes).',
            like: 261,
            time: '20.01.21',
            name: '',
            id: 3
        },
        {
            message: 'Success is the final fruit of millions of thoughts and acts, millions of little untrumpeted efforts, millions of experimental steps. (Bertie Charles Forbes).',
            like: 457,
            time: '23.01.21',
            name: '',
            id: 4
        }
    ]
}
}

let profilePageReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_POST':
            let newPost = {
                message: state.newPostText,
                id: 4,
                time: liveTime(),
                like: 7
            }
            if (state.newPostText.trim() !== '') {
                let stateCopy = merge({},state);
                stateCopy.right.postData.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;

            }else{return state}

        case 'CHANGE_POST_TEXT': {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default: return state
    }
}
export default profilePageReducer;

export let addPostActionCreator = () =>({type: 'ADD_POST'});
export let changePostTextActionCreator = (text) =>({
    type: 'CHANGE_POST_TEXT',
    text: text
});