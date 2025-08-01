import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


export default function Layout() {
  return (
    <div className="applayout-container">
        <div className="layout-nav">
          <NavBar/>  
        </div>
        <div className="layout-outlet">
          <Outlet/> 
          {/*  <Outlet />   // <--- THIS is where nested routes render */}
        </div>
        <div className="layout-footer">
          <Footer/>
        </div>
        
    </div>
  )
}
