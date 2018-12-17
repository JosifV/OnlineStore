const initialState = {
    counter: 0,
    orderedItem:[],
    orderedItemList:[],
    totalPrice:0,
    priceexmpl:0

}
const reducer = (state = initialState, action) => {
    if (action.type === 'INC') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
     if (action.type === "DEC") {
        if (state.counter < 1) {
            return {
                ...state,
                counter: 0
            }
        }
        else {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
    }
     if (action.type === 'COPY') {
        return {
            ...state,
            orderedItem: [...action.value],
        }
    }
    if(action.type ==="STR"){
        return{
            ...state,
            orderedItemList: state.orderedItemList.concat({val:state.orderedItem, price:state.orderedItem[3], id: Math.random(1000)}),
            totalPrice:state.totalPrice+state.orderedItem[3]
        }
    }
    if(action.type ==="DEL"){

        const newArrayYy = state.orderedItemList.filter(el => el.id !== action.elVal)
        const newPrice = action.priceA
        return{
            ...state,
            orderedItemList:newArrayYy,
            counter:state.counter-1,
            totalPrice:state.totalPrice-newPrice
        }
    }

    return state
}
export default reducer