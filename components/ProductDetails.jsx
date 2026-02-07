// components/productdetails

"use client";
export default function ProductDetails() {
  return (
    <>
      <div className = "title"><h1 className="page-title">Product Details</h1></div>
      <div className="breadcrumb">
        Home <span>/</span> Our Category <span>/</span> Product Details
      </div>
      <section className="product">
        {/* LEFT */}
        <div className="gallery">
          <div className="main-img">
            <img src="clothes.jpg" alt="Product" />
            <button className="nav left">‹</button>
            <button className="nav right">›</button>
          </div>
          <div className="thumbs">
            <div className="thumb">
              <img src="clothes.jpg" alt="" />
            </div>
            <div className="thumb">
              <img src="clothes.jpg" alt="" />
            </div>
            <div className="thumb dark">+2</div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="info">
         <div className = "badgediv"><span className="badge">T-Shirt</span></div> 
          <h2>
            J.VER Man Shirts Solid Long Sleeve Stretch
            Wrinkle-Free With Blue
          </h2>
          <div className="price">
            <span className="current">$300.00</span>
            <span className="old">$360.00</span>
          </div>
          <p className="note">This price is exclusive of taxes.</p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed diam nonummy Lorem ipsum dolor sit amet.
          </p>
          <div className="field">
            <label>Type</label>
            <select>
              <option>Cotton</option>
            </select>
          </div>
          <div className="field">
            <label>Size</label>
            <select>
              <option>2XL</option>
            </select>
          </div>
          <div className="colors">
            <label>Colors</label>
            <div className="color-list">
              <span className="c red"></span>
              <span className="c light active"></span>
              <span className="c beige"></span>
              <span className="c blue"></span>
              <span className="c dark"></span>
            </div>
            <small>Blue</small>
          </div>
          <div className="buy">
            <div className="qty">
              <button>-</button>
              <span>01</span>
              <button>+</button>
            </div>
            <span className="total">$300.00</span>
            <button className="cart">Add To Cart</button>
          </div>
        </div>
      </section>
      {/* CSS */}
      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: Inter, sans-serif;
        }
          .title{
          background: url("background.jpg");
          height: 200px;
          }
        .page-title {
          text-align: center;
          font-weight: 700;
          font-size: 2rem;
        }
        .breadcrumb {
          background: #f1f1f1;
          padding: 14px 20px;
          border-radius: 30px;
          color: #888;
          font-size: 14px;
          margin-bottom: 40px;
          margin-top: 40px;
        }
        .product {
          width: 80%;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          margin: 0px auto;
        }
        .main-img {
          background: #ededed;
          border-radius: 26px;
          position: relative;
        }
        .main-img img {
          width: 100%;
          border-radius: 26px;
        }
        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: #c7a59b;
          color: #fff;
          cursor: pointer;
        }
        .nav.left { left: 16px; }
        .nav.right { right: 16px; }
        .thumbs {
          display: flex;
          gap: 16px;
          margin-top: 20px;
        }
        .thumb {
          width: 120px;
          height: 120px;
          background: #f1f1f1;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .thumb img {
          width: 100%;
          height: 100%;
          border-radius: 15px;
        }
        .thumb.dark {
          background: #2a2a2a;
          color: #fff;
          font-weight: 600;
        }
        .badge {
          color: #c7a59b;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
        }
          .badgediv{
          border: solid #c7a59b 1px;
          border-radius: 30px;
          width: fit-content;
          }
        .info h2 {
          font-size: 26px;
          margin: 16px 0;
          line-height: 1.35;
        }
        .current {
          font-size: 22px;
          font-weight: 600;
        }
        .old {
          margin-left: 10px;
          color: #aaa;
          text-decoration: line-through;
        }
        .note {
          font-size: 12px;
          color: #999;
          margin-bottom: 16px;
        }
        .desc {
          color: #777;
          margin-bottom: 20px;
        }
        .field {
          margin-bottom: 18px;
          width: 50%;
        }
        label {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
        }
        select {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: 1px solid #ddd;
        }
        .colors {
          margin: 24px 0;
        }
        .color-list {
          display: flex;
          gap: 12px;
          margin: 10px 0 4px;
        }
        .c {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .red { background: #d40000; }
        .light { background: #dfe6ee; }
        .beige { background: #cbb89c; }
        .blue { background: #89a9d4; }
        .dark { background: #555; }
        .active {
          outline: 2px solid #000;
        }
        .buy {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .qty {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 14px;
          background-color: #d6d1de;
          padding: 7px;
        }
        .qty button {
          background: white;
          border: none;
          padding: 2px 10px;
          cursor: pointer;
          border-radius:5px;
          font-weight: 700;
        }
        .qty span {
          padding: 0 16px;
        }
        .total {
          font-weight: 600;
        }
        .cart {
          background: #c7a59b;
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 16px;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .product {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}