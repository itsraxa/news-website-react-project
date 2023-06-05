import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const {setProgress,country,category,apiKey,pageSize} = props

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 const updateNews =  async() => {
    setProgress(2)
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pagesize=${pageSize}`; 
    setLoading(true)
    let data = await fetch(url);
    setProgress(30)
    let parsedData = await data.json();
    setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - News Daily `;
    updateNews()
  }, [])
  

  const fetchMoreData = async () =>{
    const url =`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pagesize=${pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
      <>
        <h1 className="mt-3 ">
          News Daily - Top {capitalizeFirstLetter(category)}{" "}
          Headlines
        </h1>
        <div className="container my-5 ">
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
              <div className="row">
                {articles.map((news) => {
                  return (
                    <div key={news.url} className="col-md-4 mt-3 mb-3 ">
                      <NewsItem
                        title={news.title ? news.title : "No Title Available"}
                        description={
                          news.description
                            ? news.description
                            : "No Description Available"
                        }
                        imgUrl={news.urlToImage}
                        newsUrl={news.url ? news.url : "No Url Available"}
                        author={news.author ? news.author : "Unknown"}
                        date={new Date(news.publishedAt).toGMTString()}
                        source={news.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
  );
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default  News