import '../component/Header/Header.css'
import '../component/Hero/Hero.css'
import '../component/Destinations/Destinations.css'

import Header from"../component/Header/Header";
import Hero from"../component/Hero/Hero";
import Destinations from"../component/Destinations/Destinations";

function Home() {
  return (
      <div>
      <Header />
      <Hero />
      <Destinations />
    </div>
    
  );
}

export default Home;