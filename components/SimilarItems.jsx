//components/ similaritems.jsx

"use client";
export default function SimilarItems() {
  return (
    <>
      <section className="similar">
        <h2>Similar Items</h2>
        <div className="items">
          {/* Card */}
          <div className="card">
            <div className="image">
     
              <div className="icons">
                <span>♡</span>
              </div>
              <img src="clothes.jpg" alt="" />
            </div>
          <div className="rating">
              <p className="category">Dresses</p> ⭐ 4.5 <span>(290)</span>
            </div>
            <h3>
              J.VER Women's Dress Shirts Solid Long
              Sleeve Stretch Wrinkle-Free With Yellow
            </h3>
            
            <div className="price">
              AED 900 <span className="old">AED 1300</span>
            </div>
             <div className="colors">
            <span className="blue active"></span>
            <span className="gray"></span>
            <span className="beige"></span>
            <span className="sky"></span>
            <span className="dark"></span>
          </div>
          </div>
          {/* Card */}
          <div className="card">
            <div className="image">
              <span className="discount">25% OFF</span>
              <div className="icons">
                <span>♡</span>
              </div>
              <img src="clothes.jpg" alt="" />
            </div>
            
            <div className="rating">
              <p className="category">Dresses</p> ⭐ 4.5 <span>(290)</span>
            </div>
            <h3>
              J.VER Women's Dress Shirts Solid Long
              Sleeve Stretch Wrinkle-Free With Yellow
            </h3>
            
            <div className="price">
              AED 900 <span className="old">AED 1300</span>
            </div>
             <div className="colors">
            <span className="blue active"></span>
            <span className="gray"></span>
            <span className="beige"></span>
            <span className="sky"></span>
            <span className="dark"></span>
          </div>
          </div>
           <div className="card">
            <div className="image">
              <span className="discount">25% OFF</span>
              <div className="icons">
                <span>♡</span>
              </div>
              <img src="clothes.jpg" alt="" />
            </div>
            <div className="rating">
              <p className="category">Dresses</p> ⭐ 4.5 <span>(290)</span>
            </div>
            <h3>
              J.VER Women's Dress Shirts Solid Long
              Sleeve Stretch Wrinkle-Free With Yellow
            </h3>
            
            <div className="price">
              AED 900 <span className="old">AED 1300</span>
            </div>
             <div className="colors">
            <span className="blue active"></span>
            <span className="gray"></span>
            <span className="beige"></span>
            <span className="sky"></span>
            <span className="dark"></span>
          </div>
          </div>
          {/* Card (active heart) */}
          <div className="card">
            <div className="image">
              <span className="discount">25% OFF</span>
              <div className="icons">
                <span className="active">♥</span>
              </div>
              <img src="clothes.jpg" alt="" />
            </div>
           <div className="rating">
              <p className="category">Dresses</p> ⭐ 4.5 <span>(290)</span>
            </div>
            <h3>
              J.VER Women's Dress Shirts Solid Long
              Sleeve Stretch Wrinkle-Free With Yellow
            </h3>
            
            <div className="price">
              AED 900 <span className="old">AED 1300</span>
            </div>
            <div className="colors">
            <span className="blue active"></span>
            <span className="gray"></span>
            <span className="beige"></span>
            <span className="sky"></span>
            <span className="dark"></span>
          </div>
          </div>
        </div>
        {/* Controls */}
        <div className="controls">
          <button>‹</button>
          <button className="active">›</button>
        </div>
      </section>
      {/* CSS */}
      <style jsx>{`
      .colors {
          display: flex;
          gap: 12px;
          margin: 25px 0;
        }
        .colors span {
          width: 28px;
          height: 28px;
          border-radius: 50%;
        }
        .blue { background: #9cb6d9; }
        .gray { background: #cfcfcf; }
        .beige { background: #c8b89a; }
        .sky { background: #88aedd; }
        .dark { background: #555; }
        .active {
          outline: 2px solid #333;
        }
        .similar {
          margin: 0px auto;
          margin-top: 80px;
          width: 90%;
        }
        h2 {
          font-size: 22px;
          margin-bottom: 24px;
        }
        .items {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .card {
          background: #fff;
          border-radius: 18px;
          padding: 14px;
          transition: 0.3s;
        }
        .card:hover {
          transform: translateY(-4px);
        }
        .image {
          background: #f4f4f4;
          border-radius: 16px;
          padding: 20px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image img {
          width: 100%;
          max-height: 180px;
          object-fit: contain;
        }
        .discount {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #f1f1f1;
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 12px;
        }
        .icons {
          position: absolute;
          top: 12px;
          right: 12px;
        }
        .icons span {
          width: 28px;
          height: 28px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
        }
        .icons .active {
          color: #2e7d32;
        }
        .category {
          font-size: 12px;
          color: #888;
          margin: 12px 0 6px;
        }
        h3 {
          font-size: 14px;
          line-height: 1.4;
          margin-bottom: 8px;
        }
        .rating {
          font-size: 13px;
          color: #444;
        }
        .rating span {
          color: #888;
        }
        .price {
          margin-top: 6px;
          font-weight: 600;
        }
        .old {
          margin-left: 6px;
          color: #aaa;
          text-decoration: line-through;
          font-weight: 400;
        }
        .controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
        }
        .controls button {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: #eee;
          cursor: pointer;
        }
        .controls .active {
          background: #c2a6a0;
          color: #fff;
          margin-bottom: 15px;
        }
        @media (max-width: 1024px) {
          .items {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .items {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}