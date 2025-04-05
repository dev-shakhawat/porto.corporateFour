
// components
import Banner from "./components/banner/Banner"
import Brands from "./components/brands/Brands"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Index"
import { Post } from "./components/post/Post"
import Review from "./components/review/Review"
import Service from "./components/service/Service"


function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <Service/>
    <Review/>
    <Post/>
    <Brands/>
    <Footer/>
    </>
  )
}

export default App
