import AdventureSection from "./components/Home/AdvetureSection"
import BrowseCategory from "./components/Home/BrowseCategory"
import Hero from "./components/Home/Hero"
import TravelMemories from "./components/Home/TravelMemories"

const MainPage = () => {
    return (
        <div className="App">
            <Hero />     
            <AdventureSection />
            <TravelMemories />
            <BrowseCategory />
        </div>
    )
}

export default MainPage