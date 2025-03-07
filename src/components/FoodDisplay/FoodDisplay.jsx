import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({catagory}) => {
    const {food_list} = useContext(StoreContext)

    return (
        <div className='food_display' id='food_display'>
            <h2>Top food are hear</h2>
            <div className="food_display_list">
                {food_list.map((item,index)=>{
                    if(catagory==='All'||catagory===item.catagory){
                        return<FoodItem key={index} id={item._id} name={item.name} description={item.description}
                        price={item.price}
                        image={item.image}/>
                    }
                    return<FoodItem key={index} id={item._id} name={item.name} description={item.description}
                    price={item.price}
                    image={item.image}/>
                    
                })}
                
            </div>

        </div>
    )
}

export default FoodDisplay;
