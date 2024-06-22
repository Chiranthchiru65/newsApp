import image from "../../assets/news.jpg";
import PropTypes from "prop-types";
function NewsCard({ title, description, url, urlToImg, author, publishedAt }) {
  return (
    <div
      className="card mb-3 d-inline-block my-2 mx-2 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={urlToImg ? urlToImg : image}
        style={{ height: "200px", width: "325px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "Information not available"}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Author:{author ? author : " Not available"}
        </li>
        <li className="list-group-item">published-on : {publishedAt}</li>
      </ul>
      <div className="card-body">
        <a target="_blank" href={url} className="btn btn-primary">
          Read more...
        </a>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImg: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
};

export default NewsCard;

// <div
//   className="card mb-3 d-inline-block my-2 mx-2 px-2 py-2 "
//   style={{ maxWidth: "345px" }}
// >
//   <div>
//     <img
//       src={urlToImg ? urlToImg : image}
//       style={{ height: "200px", width: "325px" }}
//       className="card-img-top"
//       alt={urlToImg}
//     />
//     <div className="card-body">
//       <h5 className="card-title">{title.slice(0, 50)}</h5>
//       <p className="card-text">
//         {description
//           ? description.slice(0, 90)
//           : "Information not available"}
//       </p>
//       <a target="_blank" href={url} className="btn btn-primary">
//         Read more...
//       </a>
//     </div>
//   </div>
// </div>
