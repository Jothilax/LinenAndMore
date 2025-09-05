import styles from "./App.module.css";
import  AboutUs  from "./components/About/AboutUs";
import  Contact  from "./components/Contact/Contact";
import  Header  from "./components/Header/Header";
import  Footer  from "./components/Footer/Footer";
import  Home  from "./components/Home/Home";
import  Product  from "./components/Product/Product";
import  Service  from "./components/Service/Service";
import {Routes,Route,Link} from 'react-router-dom'

function App() {
 

  return (
    <>
      <div className={styles.App}>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    <Footer/>
    </div>
    
    </>
  )
}

export default App
