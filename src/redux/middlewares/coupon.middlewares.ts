import { Action, Dispatch, Store } from "@reduxjs/toolkit";

export const couponMiddlewares=(store:Store)=>(next:Dispatch)=>(action:Action)=>{
           console.log('store',store.getState())
           console.log('action',action)
           console.log(next(action))
}