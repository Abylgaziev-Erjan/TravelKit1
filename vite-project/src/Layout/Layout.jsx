import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";


function Layout({children}) {
    return ( 
        <>
        <Header/>
        <main>{children}</main>
        
        <Footer/>
        </>
     );
}

export default Layout;