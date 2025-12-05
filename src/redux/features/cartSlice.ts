import { TPorduct } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { addCoupon } from "@/services/cart";


export interface ICartProduct extends TPorduct {
     orderQuantity: number;
}

interface InitialState {
      products:ICartProduct[];
      wishlist: TPorduct[];
      city:string;
      shippingAddress:string;
      color:string;
      shopId:string,
      coupon:{
        code:string,
        discountAmount:number,
        isLoading:boolean,
        error:string,
        _id:string
      }
}
const initialState:InitialState={
    products:[],
    wishlist: [],
    city:'',
    shippingAddress:'',
    color:'',
    shopId:'',
    coupon:{
      code:'',
      discountAmount:0,
      isLoading:false,
      error:'',
      _id:''
    }
}
//  ---------------------------------------

export interface ICouponResponse {
  code: string
  createdAt: string
  discountType: string
  discountValue: number
  endDate: string
  isActive: boolean
  isDeleted: boolean
  maxDiscountAmount: number
  minOrderAmount: number
  shop: string
  startDate: string
  updatedAt: string
  _id: string
}


type CouponResponse = {
  success: boolean;
  data: {
    coupon:ICouponResponse,
    discountAmount:number;    
    discountedPrice:number;

  };
  message: string;
};

type CouponArgs = {
  couponCode: string;
  subTotal: number;
  shopId: string;
};

export const fetchCoupon = createAsyncThunk<CouponResponse,CouponArgs>(
  "cart/fetchCoupon",
  async ({couponCode, subTotal, shopId}:CouponArgs) => {
  
    try {
      const res = await addCoupon(couponCode, subTotal, shopId);

      if (!res.success) {
        throw new Error(res.message);
      }

      return res;
    } catch (err: any) {
      console.log(err);
   
      throw new Error(err.message);
    }
  }
);

// --------------------------------------

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        
        addProduct:(state,action)=>{
           if(state.products.length==0){
            state.shopId = action.payload.shop._id ;
           }
           if(state?.shopId !== action.payload.shop._id){
               return ;
           }
            const productToAdd=state.products.find((product)=>product?._id==action.payload._id)
                
            if(productToAdd){
                productToAdd.orderQuantity += 1;
                return ;
            }
            state.products.push({ ...action.payload, orderQuantity: 1 });
        },

       heartProduct: (state, action) => {
  const product = action.payload;
  const exists = state.wishlist.find((p) => p._id === product._id);

  if (exists) {
    // Remove from wishlist
    state.wishlist = state.wishlist.filter((p) => p._id !== product._id);
  } else {
    // Add to wishlist
    state.wishlist.push(product);
  }
},

        incrementOrderQuantity:(state,action)=>{
            const productToIncrement=state.products.find(product=>product._id==action.payload)

            if(productToIncrement){
                productToIncrement.orderQuantity +=1
                return
            }
        },
        decrementOrderQuantity:(state,action)=>{
            const productToDecrement=state.products.find(product=>product._id==action.payload)
            if(productToDecrement && productToDecrement.orderQuantity>1){
                productToDecrement.orderQuantity -= 1
                return 
            }
        },

        removeProduct:(state,action)=>{
            state.products =state.products.filter(product=>product._id !== action.payload)
            
        },

        updateCity:(state,action)=>{
            state.city= action.payload
        },

        updateShippingAddress:(state,action)=>{
            state.shippingAddress=action.payload
        },

        clearCart: (state) => {
      state.products = [];
      state.city = "";
      state.shippingAddress = "";
        },
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchCoupon.pending,(state)=>{
        state.coupon.isLoading=true;
        state.coupon.error="" ;
      })
      builder.addCase(fetchCoupon.rejected,(state,action)=>{
        state.coupon.isLoading=false ;
        state.coupon.error=action.error.message as string ;
        state.coupon.code="" ;
        state.coupon.discountAmount=0;
      })
      builder.addCase(fetchCoupon.fulfilled,(state,action)=>{
        state.coupon.isLoading=false ;
        state.coupon.error="" ;
        state.coupon.code=action.payload.data.coupon.code ;
        state.coupon.discountAmount=action.payload.data.discountAmount ;
        state.coupon._id=action.payload.data.coupon._id;

      })
    }
})

export const citySelector=(state:RootState)=>{
    return state.cart.city
}

export const shippingAddressSelector=(state:RootState)=>{
    return state.cart.shippingAddress
}

export const orderedProductSelector=(state:RootState)=>{
     return state.cart.products ;
}

export const orderSelector=(state:RootState)=>{
    return {
        products:state.cart.products.map(product=>({
            product:product._id,
            quantity:product.orderQuantity,
            color:'white'
        })),
        shippingAddress:`${state.cart.shippingAddress} - ${state.cart.city}`,
        paymentMethod:'Online'
    }
}

export const subTotalSelector=(state:RootState)=>{
     return state.cart.products.reduce((acc, product) => {
    if (product.offerPrice) {
    //   console.log(product.offerPrice);
      return acc + product.offerPrice * product.orderQuantity;
    } else {
    //   console.log(product.price, "Price");
      return acc + product.price * product.orderQuantity;
    }
  }, 0);
}

export const shippingCostSelector=(state:RootState)=>{
   if (
    state.cart.city &&
    state.cart.city === "Dhaka" &&
    state.cart.products.length > 0
  ) {
    return 60;
  } else if (
    state.cart.city &&
    state.cart.city !== "Dhaka" &&
    state.cart.products.length > 0
  ) {
    return 120;
  } else {
    return 0;
  }
}

export const grandTotalSeclector=(state:RootState)=>{
    const subTotal=subTotalSelector(state)

    const shippingCost=shippingCostSelector(state)
    const discountAmount=discountAmountSelector(state)

    return (subTotal-discountAmount+shippingCost)
}

export const couponSelector= (state:RootState)=>{
  return state.cart.coupon
}

export const discountAmountSelector=(state:RootState)=>{
  return  state.cart.coupon.discountAmount;
}

export const shopSelector=(state:RootState)=>{
  return state.cart.shopId
} ;

export const cartCountSelector = (state: RootState) => {
  return state.cart.products.reduce((total, product) => {
    return total + product.orderQuantity;
  }, 0);
};

export const heartCountSelector = (state: RootState) => {
  return state.cart.wishlist.length;
};

export const loveProductSelector=(state:RootState)=>{
     return state.cart.wishlist ;
}

export const {addProduct,incrementOrderQuantity,decrementOrderQuantity,removeProduct,updateCity,updateShippingAddress,clearCart,heartProduct}=cartSlice.actions

export default cartSlice.reducer ;