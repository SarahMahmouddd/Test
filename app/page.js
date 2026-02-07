//app/ page.js

import ProductDetails from "../components/ProductDetails";
import SimilarItems from "../components/SimilarItems";
import Navbar from "../components/Navbar";
import RatingReviews from "../components/RatingReviews";
import Footer from "../components/Footer"
export default function Page() {
  return (
    <main style={{ padding: "40px", background: "#fafafa" }}>
         <Navbar />
      <ProductDetails />
      <RatingReviews/>
      <SimilarItems />
      <Footer />
    </main>
  );
}