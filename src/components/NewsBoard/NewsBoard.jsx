import PropTypes from "prop-types";
import NewsCard from "./NewsCard";
import ReactPaginate from "react-paginate";
import { useState } from "react";
function NewsBoard({ todaysNews, isLoading }) {
  const [pageNumber, setPageNumber] = useState(0);

  const cardsPerPage = 8;
  const pagesVisited = pageNumber * cardsPerPage;

  const displayCards = todaysNews.slice(
    pagesVisited,
    pagesVisited + cardsPerPage
  );
  const pageCount = Math.ceil(todaysNews.length / cardsPerPage);

  function changePage({ selected }) {
    setPageNumber(selected);
  }

  return (
    <div className="container">
      <ul>
        {displayCards.map((news) => (
          <NewsCard
            key={crypto.randomUUID()}
            title={news.title}
            description={news.description}
            url={news.url}
            urlToImg={news.urlToImage}
            isLoading={isLoading}
            publishedAt={news.publishedAt}
            author={news.author}
          />
        ))}
      </ul>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
      />
    </div>
  );
}

NewsBoard.propTypes = {
  todaysNews: PropTypes.array,
  isLoading: PropTypes.bool,
};
export default NewsBoard;

// function Heading() {
//   return <div></div>;
// }
