import React from "react";

const NewsItem = (props) => {
  const trimWords = (str, startWord, endWord) => {
    let splitArr = str.split(" ");
    let tempArr = [];
    for (let i = startWord; i < endWord; i++) {
      tempArr[i] = splitArr[i];
    }
    return tempArr.join(" ");
  };

  const { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card border-5 border-dark " style={{ height: "27rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          position: "absolute",
          left: "0",
        }}
      >
        <span
          style={{ textAlign:'left', borderRadius: "0 0 10px 0" }}
          className="badge  bg-secondary fs-6 pt-2"
        >
          {source}
        </span>
      </div>
      <img
        style={{ height: "11rem" }}
        src={imgUrl}
        className="card-img-top"
        alt="No Preview Available"
      />

      <div className="card-body text-start">
        <div style={{ height: "12rem" }}>
          <h5
            className="card-title"
            style={{ height: "3rem", overflow: "hidden" }}
          >
            {title.split(" ").length > 8
              ? trimWords(title, 0, 10) + "..."
              : title}
          </h5>
          <p
            className="card-text mb-0 fs-6"
            style={{ height: "3rem", overflow: "hidden" }}
          >
            {description.split(" ").length < 10
              ? description
              : trimWords(description, 0, 14) + "..."}
          </p>
          <hr />
          <p className="card-text" style={{ marginBottom: "0rem" }}>
            <small className="text-muted">
              By :
              {author.split(" ").length > 5
                ? trimWords(author, 0, 5) + "..."
                : author}
            </small>
          </p>
          <p className="card-text" style={{ marginBottom: "0rem" }}>
            <small className="text-muted">Published At : {date}</small>
          </p>
        </div>
      </div>
      <a
        href={newsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm btn-info"
      >
        <strong>Read More</strong>
      </a>
    </div>
  );
};

export default NewsItem;
