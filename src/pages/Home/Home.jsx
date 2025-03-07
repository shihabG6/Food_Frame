import React, { useState } from "react";
import './Home.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Foother/Footer";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {

    const [category,setCategory] = useState("All");
    return(
        <div className="">
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay/>
            <Footer/>
        </div>
    )
}
export default Home;