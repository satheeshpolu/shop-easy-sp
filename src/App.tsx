import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingText from "./components/LoadingText";
import CONSTANTS from "./utils/constants";

// Lazy load all route components
const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const BlogList = lazy(() => import("./pages/blogs/BlogList"));
const BlogPost = lazy(() => import("./pages/blogs/BlogPost"));
const BlogCategory = lazy(() => import("./pages/blogs/BlogCategory"));
const Contact = lazy(() => import("./pages/Contact"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const CartApp = lazy(() => import("./pages/CartApp"));
const CartOverview = lazy(() => import("./pages/CartOverview"));
const CheckoutScreen = lazy(() => import("./pages/CheckoutScreen"));
const AllCategories = lazy(() => import("./pages/AllCategories"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const NoFound = lazy(() => import("./pages/NoFound"));
// const Loading = lazy(() => import("./components/LoadingSkeleton"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <LoadingText title={CONSTANTS.LOADING} />
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<Home />} />
            <Route path="blogs" element={<Blogs />}>
              <Route index element={<BlogList />} />
              <Route path=":id" element={<BlogPost />} />
              <Route path="category/:category" element={<BlogCategory />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route index element={<CartApp />} />
            <Route path="/cart" element={<CartOverview />} />
            <Route path="/cart/checkout" element={<CheckoutScreen />} />
            <Route path="/category/:category" element={<AllCategories />} />
            <Route
              path="/category/:category/:id/product_details"
              element={<ProductDetails />}
            />
            <Route path="*" element={<NoFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
