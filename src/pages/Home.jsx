import Hero from "./../components/Hero/Hero";
import PopularDestinations from "./../components/PopularDestinations/PopularDestinations"
import RecentTrips from "./../components/RecentTrips/RecentTrips"

const Home = () => {
  return (
    <div>
      <Hero img = "/assets/images/12.jpg" title = "Your Journey Your Story" desc = "Choose your Favourite Destination." btn = "Travel Now"/>
      <PopularDestinations/>
      <RecentTrips/>
    </div>
  )
}

export default Home
