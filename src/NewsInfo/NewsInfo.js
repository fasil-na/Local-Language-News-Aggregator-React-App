import React, { useState, useEffect } from "react";
import "./NewsInfo.scss";
import axios from 'axios';

function NewsInfo() {
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsResponse = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
        );
        setNews(newsResponse.data.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, [NEWS_API_KEY]);

  return (
    <div>
      <h1>Latest News</h1>
      {news ? (
        <div className="news-info">
          {news.map((article, index) => (
            <div key={index} className="news-article">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
}

export default NewsInfo;
