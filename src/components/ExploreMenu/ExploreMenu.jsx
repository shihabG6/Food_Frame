import React from "react";
import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory})=>{
    return(
        <div className="explore_menu" id="explore_menu">
            <h1>Explor our menu</h1>
            <p className="explor_menu_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt quasi quas itatibus deserunt. Maxime tempore enim deleniti?</p>
            <div className="explore_menu_list">
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className="explor_menu_list_item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}
export default ExploreMenu;