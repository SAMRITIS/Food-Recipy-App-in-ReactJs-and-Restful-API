import './search.css';
import Food from './Food'
import React, { useState} from 'react';
import h from './food.png';
import Foodinfo from './Foodinfo';
import axios from 'axios'


function Search() {
  const [togle, settogle] = useState(false);
  const [dish, setDish] = useState();
  const [onFoodSelect, setonFoodSelect] = useState();
  const [colorsData, setColorsData] = useState([])
  const handleDish = (e) =>{
      setDish(e.target.value)
  }
  const handle = () =>{
      if(dish)
      {
        axios(`https://api.edamam.com/api/recipes/v2?app_id=908e19ff&app_key=d92caa8114519bca0fb43253dba92f24&type=public&q=${dish}`)
        .then(response => {
         if(response)
         {
            console.log(response)
            var temp = []
            for(let i =0 ;i<response.data.hits.length;i++)
            {
              let t = {
                id : i,
                label : response.data.hits[i].recipe.label,
                link : response.data.hits[i]._links.self["href"],
                image : response.data.hits[i].recipe.image,
                type : response.data.hits[i].recipe.mealType,
                ingridents : response.data.hits[i].recipe.ingredients,
                ingridentline : response.data.hits[i].recipe.ingredientLines,
                dishType : response.data.hits[i].recipe.cuisineType,
                digest : response.data.hits[0].recipe.digest
              }
              temp.push(t)
            }
            setColorsData(temp);
            settogle(true)
            
            
         }
        });
      }
  }
  return (
    <React.Fragment>
       <div className="container" style={{marginTop : "35vh"}}>
                  <div className="row">
                    <div className="col-sm row d-flex justify-content-center text-center bounce-in-top">
                       <h3>Your Dish is Here</h3>
                    </div>
                    <div className="col-sm">
                       <input type="text" onChange={e =>{handleDish(e)}} style={{outline : "none", border : "none", borderBottom: "2px solid #FFA500", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}} className="bounce-in-top form-control p-2"/>
                    </div>
                    <div className="col-sm text-center">
                        <button className="btn bounce-top" onClick={e=>{handle(e)}}><img src={h} style={{height : "80px", width : "80px" }} alt="description"/></button>
                    </div>
                  </div>
        </div>
        {onFoodSelect &&  <Foodinfo selectedFood={colorsData[onFoodSelect-1]} />}
        <div style={{ display : "flex", flexWrap : "wrap", padding : "25px", borderRadius : "20px"}}>
            {
              togle ?  colorsData.map(function(item){
                return <Food key={item.id} data={item} food_id={item.id} setonFoodSelect={setonFoodSelect}/>
              }) : null 
            }
        </div>  
     </React.Fragment> 
     
  );
}

export default Search;
