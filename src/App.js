import "./App.css";
import {
  
 
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Header";
import ProductListing from "./Components/ProductListing";



function App() {
  return (
    <div className="App">
   
     <Header/>
          
             
                <Routes>
                    {/* <Route index element={<Header/>} /> */}
                    <Route path="/" element={<ProductListing/>}/>
                    <Route path="/prod" element={<ProductListing />} />
                </Routes>
           
      
    </div>
  );
}

export default App;
