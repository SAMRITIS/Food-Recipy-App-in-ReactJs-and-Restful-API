

import h from './h.png';
//var axios = require("axios").default;
import React from 'react';

function Foodinfo(props) {
 
  return (
    <React.Fragment>
       
            
            
      <div className=" " style={{backgroundColor : "pink", borderRadius : "50px"}}>
           <div className="row">
            <div className="col-sm-6">
               <div className="m-5">
                  <img  src={props.selectedFood.image} alt="Card  cap" style={{ borderRadius : "20px", padding : "5px", height: "300px",  width : "350px"}} />
                  <p style={{fontWeight: "bold"}}> Dish Name : {props.selectedFood.label} </p>
                  <p style={{fontWeight: "bold"}}> Dish Type : {props.selectedFood.type}  </p>
                  <p style={{fontWeight: "bold"}}> Dish Location : {props.selectedFood.dishType}</p>
                  <p style={{fontWeight: "bold"}}>Ingrediants : </p>
                  {
                      props.selectedFood.ingridents.map(function(item, i){
                        return  <div key={i}>
                                    {item.image ?  <img  src={item.image} alt="Card  cap" style={{ borderRadius : "20px", padding : "5px", height: "100px",  width : "100px"}} /> : <img  src={h} alt="Card  cap" style={{ borderRadius : "20px", padding : "5px", height: "100px",  width : "100px"}} />}
                                    <p>  {item.text} - {item.weight} Grams</p>
                              </div>
                      })
                  }
               </div>  
            </div>
            <div className="col-sm-6">
               <div className="m-5">
                {
                    props.selectedFood.digest.map(function(item, i){
                      return  <p key={i}>{item.label} : {item.total}</p>
                    })
                }
               </div>  
            </div>
          </div>
      </div>    

     </React.Fragment> 
  );
}

export default Foodinfo;
