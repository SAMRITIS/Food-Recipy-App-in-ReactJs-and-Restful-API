

//import h from './h.png';
//var axios = require("axios").default;
import React  from 'react';

function Food(data) {
  
  return (
    <React.Fragment>
       
             <div className=" justify-content-center text-center " style={{margin : "1rem" , backgroundColor : "#7DF9FF", borderRadius : "20px"}}>
              <img  src={data.data.image} alt="Card  cap" style={{ borderRadius : "20px", padding : "5px", height: "330px",  width : "400px"}} />
              <h5 className =" m-2" style = {{color : "black !important"}}>Dish Name : {data.data.label}</h5>
              <h6 className =" m-2" style = {{color : "black !important"}}>Dish Type : {data.data.type}</h6>
              <h6 className =" m-2" style = {{color : "black !important"}}>Dish Country : {data.data.dishType}</h6>
              <button className="btn btn-primary m-2 mb-2"  onClick={()=>{ data.setonFoodSelect(data.food_id+1)}} style={{width : "25%"}}>Recipy</button>
           </div> 
          
           
            
      

     </React.Fragment> 
  );
}

export default Food;
