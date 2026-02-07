// components/ratingreviews

"use client";
const RatingReviews = () => {
  return (
    <div className="wrapper">
      <div className="container">

        <h2 className="title">Rating & Reviews</h2>

        <div className="summary">
          {/* Left */}
          <div className="rating-big">
            <h1>
              4,5 <span>/5</span>
            </h1>
          </div>

          {/* Middle */}
          <div className="bars">
            {[
             { star: 5, percent: 67 },
              { star: 4, percent: 15 },
              { star: 3, percent: 6 },
              { star: 2, percent: 3 },
              { star: 1, percent: 9 },
            ].map((item) => (
              <div className="bar-row" key={item.star}>
                <span>{item.star}</span>
                <div className="bar">
                  <div
                    className="bar-fill"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <div className="percent">%{item.percent}</div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="total">
            <h3>3.0K</h3>
            <p>Total Reviews</p>
            <button>Add Comment</button>
          </div>
        </div>

        {/* Reviews */}
        {[1, 2, 3].map((i) => (
          <div className="review" key={i}>
            <div className="review-header">
              <div>
                <div className="name">Alex Daewn<span className="stars">★★★★★</span></div>
                
              </div>
              <div className="time">4 months ago</div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy Lorem ipsum dolor sit amet.
            </p>
          </div>
        ))}

        <button className="load-more">View More Comments</button>
      </div>

      <style jsx>{`
        .wrapper {
          background: #faf7f5;
          padding: 40px;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          background: #fff;
          padding: 40px;
          border-radius: 12px;
        }

        .title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 30px;
        }

        .summary {
          display: grid;
          grid-template-columns: 200px 1fr 180px;
          gap: 40px;
          align-items: center;
          margin-bottom: 40px;
        }

        .rating-big h1 {
          font-size: 64px;
          font-weight: 700;
        }

        .rating-big span {
          font-size: 16px;
          color: #999;
        }

        .bars {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bar-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bar-row span {
          width: 20px;
          font-size: 14px;
        }

        .bar {
          flex: 1;
          height: 6px;
          background: #eee;
          border-radius: 10px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: #c49a8d;
        }

        .percent {
          width: 40px;
          font-size: 12px;
          color: #777;
        }

        .total {
          text-align: center;
        }

        .total h3 {
          font-size: 28px;
          font-weight: 700;
        }

        .total p {
          font-size: 14px;
          color: #777;
          margin-bottom: 10px;
        }

        .total button {
          background: #c49a8d;
          color: #fff;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
        }

        .review {
          border-top: 1px solid #eee;
          padding: 25px 0;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .name {
          font-weight: 600;
        }

        .stars {
          color: #c49a8d;
          font-size: 14px;

        }

        .time {
          font-size: 12px;
          color: #999;
        }

        .review p {
          font-size: 14px;
          color: #555;
          max-width: 800px;
          line-height: 1.6;
        }

        .load-more {
          display: block;
          margin: 30px auto 0;
          padding: 12px 26px;
          background: #f1ece9;
          border: none;
          border-radius: 10px;
          color: #777;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default RatingReviews;
