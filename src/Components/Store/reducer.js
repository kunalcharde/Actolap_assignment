import { ADD_USER } from "./Actions"
import { EDIT_USER } from "./Actions"
import { DELETE_USER } from "./Actions"
export const reucer =(action)=>{
    switch(action){
        case (ADD_USER):{
            return action.payload;
        }
        case (EDIT_USER):{
            const {data,id} = action.payload
            return data.filter((item)=> item.id==id)
        }
        case (DELETE_USER) :{
            return data.filter((item)=> item.id!=id)
        }
    }
}
