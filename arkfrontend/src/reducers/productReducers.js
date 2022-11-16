import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,   PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL } from '../constants/productConstants'

export const productListReducers =(state={products:[]},action)=>{

    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {laoding:true,products:[]}
        case PRODUCT_LIST_SUCCESS:
            return {laoding:false,products:action.payload}
        case PRODUCT_LIST_FAIL:
            return {laoding:false,error: action.payload}

        default:
            return state
    }



}
export const productDetailsReducers = (state={ product:{reviews:[]} },action) =>{

    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true,...state}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading:false, error: action.payload }

        default:
            return state
    }

}