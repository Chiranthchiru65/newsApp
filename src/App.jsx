// import NavBar from "./components/optionalnavbar/option";
import { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import NewsBoard from "./components/NewsBoard/NewsBoard";
import { useEffect } from "react";

// transformor css

// pagination
// create a state to store pagenumber

// how many cards do we need per page ? -> need a state for that aswell
// make a button on the top for sorting
function App() {
  const [todaysNews, setTodaysNews] = useState([]);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  function getSearchQuery(value) {
    setQuery(value)``;
  }

  async function fetchNews() {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=671eacadabdf4b4aa6e1a580ee2c8d5b`
    );
    const parsedData = await data.json();
    setTodaysNews(parsedData.articles);
    console.log(parsedData.articles);
  }

  async function searchData() {
    const searchData = await fetch(
      `https://newsapi.org/v2/everything?country=in&q=${query}&apiKey=671eacadabdf4b4aa6e1a580ee2c8d5b`
    );
    const parsedSearch = await searchData.json();
    setCategory(parsedSearch);
  }
  console.log(query);
  useEffect(() => {
    fetchNews();

    const reloadInterval = setInterval(() => {
      fetchNews();
    }, 60 * 60 * 1000);
    return () => clearInterval(reloadInterval);
  }, [category, query]);
  console.log(query);
  return (
    <div>
      <NavBar setCategory={setCategory} getSearchQuery={getSearchQuery} />
      {isLoading ? (
        <Loading />
      ) : (
        <NewsBoard todaysNews={todaysNews} isLoading={isLoading} />
      )}
    </div>
  );
}

export default App;

function Loading() {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Basic example"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className="progress-bar w-75"></div>
    </div>
  );
}

// fetch data or reload every 1 hr (done)
// error handling if you're not able to fetch the data(done)
// change the card to where you see published on and all(done)

// pagination
// now i want to sort the nav bar buttons
// when i press the button the appropriate information should be shown.
// footer
