let initialState = {
    news: [{author:'James Cookie', description:'LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            title:'A big header right before your eye, a big header right before your eye',
            source:{id:1}, publishedAt:'2021-16-02T20:21', url:'', urlToImage:'https://www.rmg.co.uk/sites/default/files/styles/slider/public/Captain-James-Cook-%28detail%29.jpg?itok=crhY1OaP'}],
    currentPage: 1,
    keyWordText: 'opposition in Russia'
}

let newsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NEWS':
            return {
                ...state,
                news: [...action.news]
            }
        case 'SET_CURRENT_PAGE':
            return{
                ...state,
                currentPage:action.currentPage
            }
        case 'UPDATE_KEY_WORD_TEXT':
            return{
                ...state,
                keyWordText: action.text
            }
        default: return state
    }
}

export default newsPageReducer;

export let setNews = (news) => ({type: 'SET_NEWS', news})
export let updateKeyWordText = (text) => ({type: 'UPDATE_KEY_WORD_TEXT', text})
export let setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage})
