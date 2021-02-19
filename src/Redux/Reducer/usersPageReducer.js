let initialState = {
    newSearchUserText: '',
    users: [],
    totalCount: 0,
    currentPage: 2,
    isFetching:false
    //         [
    //     {id:1,avatar: 'https://clck.ru/TBMXN', name:'MLV', country:'Russia', city: 'Moscow', isFollow: false, profileLink: 'https://clck.ru/TCQyG'},
    //     {id:2,avatar: 'https://clck.ru/TBMXN', name:'Durov', country:'Russia', city: 'Saint-Petersburg', isFollow: false, profileLink: 'https://telegram.org/'},
    //     {id:3,avatar: 'https://clck.ru/TBMXN', name:'Andrew Mell', country:'Belarus', city: 'Gomel', isFollow: false, profileLink: 'https://vk.com/mellstroy'},
    //     {id:4,avatar: 'https://clck.ru/TBMXN', name:'Curim Burim', country:'Belarus', city: 'Gomel', isFollow: false, profileLink: 'https://vk.com/riffo'},
    //     {id:5,avatar: 'https://clck.ru/TBMXN', name:'MLV', country:'Russia', city: 'Moscow', isFollow: false, profileLink: 'https://clck.ru/TCQyG'},
    //     {id:6,avatar: 'https://clck.ru/TBMXN', name:'Durov', country:'Russia', city: 'Saint-Petersburg', isFollow: false, profileLink: 'https://telegram.org/'},
    //     {id:7,avatar: 'https://clck.ru/TBMXN', name:'Andrew Mell', country:'Belarus', city: 'Gomel', isFollow: true, profileLink: 'https://vk.com/mellstroy'},
    //     {id:8,avatar: 'https://clck.ru/TBMXN', name:'Curim Burim', country:'Belarus', city: 'Gomel', isFollow: false, profileLink: 'https://vk.com/riffo'},
    // ]
}

let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            console.log('follow' + action.id)
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {

                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            console.log('unFollow' + action.id)
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users],
                totalCount: action.totalCount
            }
        case 'SET_CURRENT_PAGE':
            return{
                ...state,
                currentPage: action.currentPage
            }
        case 'TOGGLE_IS_FETCHING':
            return{
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export default usersPageReducer

export const follow = (id) => ({type: 'FOLLOW', id});
export const unFollow = (id) => ({type: 'UNFOLLOW', id});
export const setUsers = (users, totalCount) => ({type: 'SET_USERS', users, totalCount});
export const setCurrentPage = (currentPage) =>({type:'SET_CURRENT_PAGE', currentPage})
export const toggleIsFetching = (isFetching)=>({type:'TOGGLE_IS_FETCHING', isFetching})