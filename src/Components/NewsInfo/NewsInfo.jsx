import React, { useState, useEffect } from "react";
import axios from 'axios';
import SearchInput from "../SearchInput/SearchInput";

function NewsInfo() {
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20); // Set the number of articles per page

  useEffect(() => {
    fetchNews();
  }, [NEWS_API_KEY, searchQuery, language, currentPage]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const newsResponse = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&q=${searchQuery}&language=${language}&apiKey=${NEWS_API_KEY}&page=${currentPage}&pageSize=${pageSize}`
      );
      
      setTotalResults(newsResponse.data.totalResults);
      const filteredNews = newsResponse.data.articles.filter(article => (
        article.content !== "[Removed]" && article.title !== "[Removed]" && article.description !== "[Removed]"
      ));
      const sortedNews = filteredNews.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      setNews(sortedNews);
      setError(null);
    } catch (error) {
      console.error("Error fetching news data:", error);
      setError("Error fetching news data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setCurrentPage(1); // Reset to first page on language change
  };

  const handleNextPage = () => {
    if (currentPage * pageSize < totalResults) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div>
      <h1>Latest News</h1>
      <div className="search-container">
        <SearchInput
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search news..."
        />

        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        news.length > 0 ? (
          <div className="news-info">
            {news.map((article, index) => (
              <div key={index} className="news-article">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p>Publishing Date: {new Date(article.publishedAt).toLocaleString()}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            ))}
            <div className="pagination">
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>Page {currentPage}</span>
              <button onClick={handleNextPage} disabled={currentPage * pageSize >= totalResults}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <p>No news available</p>
        )
      )}
    </div>
  );
}

export default NewsInfo;