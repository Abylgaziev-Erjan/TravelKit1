import AdventureSection from "./components/Home/AdvetureSection"
import Hero from "./components/Home/Hero"
import TravelMemories from "./components/Home/TravelMemories"

const MainPage = () => {
    return (
        <div className="App">
            <Hero />     
            <AdventureSection />
            <TravelMemories />
        </div>
    )
}

export default MainPage