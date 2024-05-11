import React, { useState } from 'react'

import './Home.css';
import BannerSection from '../../components/BannerSection/BannerSection';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
      <BannerSection />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay  category={category} />
    </div>
  )
}

export default Home