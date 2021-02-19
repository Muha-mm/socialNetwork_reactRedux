import {connect} from "react-redux";
import News from "./News";
import {setNews, updateKeyWordText,setCurrentPage} from "../../../Redux/Reducer/newsPageReducer";
import React from "react";
import axios from "axios";

class NewsContainer extends React.Component {
    componentDidMount() {
        if (this.props.news.length === 0) {
            axios.get(`https://newsapi.org/v2/everything?q=navalny&apiKey=6dc94ff3c6e24fb3ab3207afb1fe4717&pageSize=10&page=1`)
                .then((response) => {
                    this.props.setNews(response.data.articles)
                    console.log(response.data.articles)
                })
        }
    }

    setNews = () => {
        axios.get(`https://newsapi.org/v2/everything?q=${this.props.keyWordText}
        &apiKey=6dc94ff3c6e24fb3ab3207afb1fe4717&pageSize=10
        &page=1&language=en&sortBy=publishedAt`)
            .then((response) => {
                this.props.setNews(response.data.articles)
                console.log(response.data.articles)
            })
    }
    updateKeyWordText = (e) => {
        this.props.updateKeyWordText(e.target.value)
    }

    render() {
        return <News
            setNews={this.setNews} news={this.props.news}
            currentPage={this.props.currentPage} keyWordText={this.props.keyWordText}
            updateKeyWordText={this.updateKeyWordText} handleKeyDown={this.handleKeyDown}/>
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        keyWordText: state.newsPage.keyWordText,
        currentPage: state.newsPage.currentPage
    }
}

export default connect(mapStateToProps, {
    setNews, setCurrentPage, updateKeyWordText
})(NewsContainer);