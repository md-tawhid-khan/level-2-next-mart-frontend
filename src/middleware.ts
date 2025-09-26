import { NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "./services/authServices"
import { IUser } from "./types";

type TRole=keyof typeof roleBasePrivateRoutes ;

const authRoutes=['/login','/register']

const roleBasePrivateRoutes={
    user:[/^\/user/, /^\/create-shop/],
    admin:[/^\/admin/ ]
 }

export const middleware=async(request:NextRequest)=>{
    const {pathname}=request.nextUrl
     const userInfo= await getCurrentUser() as IUser

     if(!userInfo){
         if(authRoutes.includes(pathname)) {
            return NextResponse.next() ;
         }else{
            return NextResponse.redirect(
            new URL(`http://localhost:3000/login?redirect=${pathname}`,request.url)
            )
         }
         
     }

     if(userInfo?.role as string && roleBasePrivateRoutes[userInfo?.role as TRole]){
        const routes=roleBasePrivateRoutes[userInfo.role];
        if(routes.some((route)=>pathname.match(route))){
            return NextResponse.next()
        }
     }
     return NextResponse.redirect(new URL('/',request.url))
}

export const config={
    matcher:['/login','/create-shop','/admin','/admin/:page','/user','/user/:page']
}