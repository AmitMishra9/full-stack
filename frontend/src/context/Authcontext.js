import React, { useEffect, useReducer } from "react";
import {createContext} from "react";
import { useNavigate } from "react-router";

const initConext={
     isAuthrticated: false,

}

export  const AuthcontextData=createContext(initConext);
const authReducer=(state,action)=>{
     switch(action.type){
         case "LOGIN":
         return{
           ...state,
          isAuthenticated:true
       };
       case "LOGOUT":
         return{
            ...state,
            isAuthenticated:false
         }
         default: 
         return state;
     }
}
const Authcontext=({children})=>{
   const [auth,dispatch]= useReducer(authReducer,initConext);
    const navigate= useNavigate();
   useEffect(()=>{
        const token=localStorage.getItem('jwt');
         if(token){
            dispatch({
                type:"LOGIN",
            });
             navigate("/home"); 
            }
            else{
               dispatch({
                type:"LOGOUT",
               }) ;
               navigate("/");
            }
            
         
    },[]) 
   return(
     <AuthcontextData.Provider value={{auth,dispatch}}>
       {children}
     </AuthcontextData.Provider>
    )
};


export default Authcontext ;