import {dialogsPageReducer} from "./Reducer/dialogsPageReducer";
import {profilePageReducer} from "./Reducer/profilePageReducer";

let store = {

    _state: {

        dialogsPage: {
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
                {message: 'Will you go to walk tomorrow', time: '11:11', id: ''},
                {message: 'So, that will meet near city beach, about 10 a.m', time: '11:11', id: ''},
                {message: 'Heeeey, Ive been standing in front of your door for half an hour', time: '11:11', id: ''}
            ]
        },

        profilePage: {
            specialLink: 'accountLink',
            name: 'Leah Riggeti',

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
                newPostText: '',
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
                        message: 'ne pokazhi',
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

    },
    getState() {
        return (this._state)
    },

    _rerenderApp() {},
    subscribe(observer) {
        this._rerenderApp = observer;
    },


    dispatch(action) {
        dialogsPageReducer(this._state.dialogsPage, action)
        profilePageReducer(this._state.profilePage, action)
        this._rerenderApp(this._state);
    }

}

export default store;