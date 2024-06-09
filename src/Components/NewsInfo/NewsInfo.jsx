import React, { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";
import SearchInput from "../SearchInput/SearchInput";
import Pagination from "../Pagination/Pagination";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import "./NewsInfo.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const fetchNews = async (
  query,
  language,
  page,
  pageSize,
  apiKey,
  setNews,
  setTotalResults,
  setLoading,
  setError
) => {
  setLoading(true);
  try {
    const newsResponse = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&q=${query}&language=${language}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`
    );

    setTotalResults(newsResponse.data.totalResults);
    const filteredNews = newsResponse.data.articles.filter(
      (article) =>
        article.content !== "[Removed]" &&
        article.title !== "[Removed]" &&
        article.description !== "[Removed]"
    );
    const sortedNews = filteredNews.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
    setNews(sortedNews);
    setError(null);
  } catch (error) {
    console.error("Error fetching news data:", error);
    setError("Error fetching news data. Please try again later.");
  } finally {
    setLoading(false);
  }
};

const debouncedFetchNews = debounce(
  (
    query,
    language,
    page,
    pageSize,
    apiKey,
    setNews,
    setTotalResults,
    setLoading,
    setError
  ) => {
    fetchNews(
      query,
      language,
      page,
      pageSize,
      apiKey,
      setNews,
      setTotalResults,
      setLoading,
      setError
    );
  },
  500
);

const NewsInfo = () => {
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);

  useEffect(() => {
    debouncedFetchNews(
      searchQuery,
      language,
      currentPage,
      pageSize,
      NEWS_API_KEY,
      setNews,
      setTotalResults,
      setLoading,
      setError
    );
  }, [searchQuery, language, currentPage]);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Header />
      <div className="search-container">
        <div className="search-controls">
          <SearchInput
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search news..."
          />
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <WeatherInfo />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : news.length > 0 ? (
        <div className="news-info">
          <h1>Latest News</h1>
          {news.map((article, index) => (
            <div key={index} className="news-article">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p>
                Publishing Date:{" "}
                {new Date(article.publishedAt).toLocaleString()}
              </p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
          <Pagination
            currentPage={currentPage}
            totalResults={totalResults}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <p>No news available</p>
      )}
      <Footer />
    </div>
  );
};

export default NewsInfo;
