import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"


function App() {

  return (
    <>
      <NavBar/>
      <Hero img = "/assets/images/12.jpg" title = "Your Journey Your Story" desc = "Choose your Favourite Destination." btn = "Travel Now"/>
      {/* <Hero img = "/assets/images/12.jpg" title = "Your Journey Your Story" desc = "Choose your Favourite Destination." /> */}
    </>
  )
}

export default App
