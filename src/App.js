import logo from './logo.svg';
import './App.css';
import './components/style.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import featuresData from './components/Features.json'
import ProductSection from './components/ProductSection';
import productsData from './components/Product.json'
import Banner from './components/Banner';
import Banners from './components/Banners';
import News from './components/News';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Features features={featuresData} />
        <ProductSection products={productsData} />
        <Banner/>
        <Banners/>
        <News/>
        <Footer/>
    </div>
  );
}

export default App;
