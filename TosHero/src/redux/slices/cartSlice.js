import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
    totalAmount:0,
    totalQuantity:0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:(state, action)=>{
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            state.totalQuantity++

            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    productNameame: newItem.productNameame,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalprice: newItem.price
                })
            }
            else{
                existingItem.quantity++
                existingItem.totalprice = Number(existingItem.totalprice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item)=> total + Number(item.price) * Number(item.quantity));

            // console.log(state.totalQuantity)
            // console.log(state.cartItems)
            // console.log(newItem)
                
            
        },
    }, 
});

export const cartActions = cartSlice.actions
export default cartSlice.reducer