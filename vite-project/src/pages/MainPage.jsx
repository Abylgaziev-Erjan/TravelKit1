import AdventureSection from "../components/Home/AdvetureSection"
import BrowseCategory from "../components/Home/BrowseCategory"
import Footer from "../components/Home/Footer"
import Header from "../components/Home/Header"
import Hero from "../components/Home/Hero"
import TravelMemories from "../components/Home/TravelMemories"

const MainPage = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            
            <AdventureSection />
            <TravelMemories />
            <BrowseCategory />
            <Footer />
        </div>
    )
}

export default MainPage