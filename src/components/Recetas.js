import React, {Component} from "react";
import HeaderRecetas from "../template/HeaderRecetas";
import Main2 from './Main2';


class Recetas extends Component{


    render(){
        return(
               <React.Fragment>
                <Main2></Main2>
                <HeaderRecetas></HeaderRecetas>
   


               </React.Fragment>
  
               
        );
    }

}


export default Recetas;