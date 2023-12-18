const initialState = {
    product:[],
    basket:[],
    favorite:[]
}

export const Reducer = (state = initialState,action) => {
    switch(action.type) {
        case 'GET_PRODUCT':
            return{...state,product:action.payload}
            case "ADD_TO_BASKET":
            let fontProduct = state.basket.find(el => el.id === action.payload.id)
            if(fontProduct){
                return {...state, basket: state.basket.map(el=> el.id === fontProduct.id? {...el, count: el.count + 1} : 1)}
            }else{
                return {...state, basket: [...state.basket , {...action.payload , count: 1 }]}
            }

            default:return state
    }
}