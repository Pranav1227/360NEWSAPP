const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "50%", zIndex: "1" }}
        >
          {source || "Unknown"}
        </span>
        <img
          src={
            imageUrl ||
            "https://w0.peakpx.com/wallpaper/727/60/HD-wallpaper-breaking-news-news-story-newspaper-news.jpg"
          }
          className="card-img-top"
          alt="News Thumbnail"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title ? `${title.slice(0, 60)}...` : "No Title Available"}
          </h5>
          <p className="card-text">
            {description || "No description available for this news article."}
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author || "Unknown"} on{" "}
              {date ? new Date(date).toGMTString() : "Unknown Date"}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
