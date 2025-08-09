import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/blogs/Blogs";
// import Contact from "./pages/Contact";
// import NoFound from "./pages/NoFound";
// import BlogList from "./pages/blogs/BlogList";
// import BlogPost from "./pages/blogs/BlogPost";
// import BlogCategory from "./pages/blogs/BlogCategory";
// import CartApp from "./pages/CartApp";
// import AllCategories from "./pages/AllCategories";
// import CartOverview from "./pages/CartOverview";
// import CheckoutScreen from "./pages/CheckoutScreen";
// import ProductDetails from "./pages/ProductDetails";
// import Favorite from "./pages/Favorite";
import { Suspense, lazy } from "react";

// Lazy load all route components
const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const BlogList = lazy(() => import("./pages/blogs/BlogList"));
const BlogPost = lazy(() => import("./pages/blogs/BlogPost"));
const BlogCategory = lazy(() => import("./pages/blogs/BlogCategory"));
const Contact = lazy(() => import("./pages/Contact"));
const Favorite = lazy(() => import("./pages/Favorite"));
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100vh",
              justifyContent: "center",
            }}
          >
            Loading...
          </div>
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
            <Route path="favorite" element={<Favorite />} />
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
