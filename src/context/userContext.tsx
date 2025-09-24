import { getCurrentUser } from "@/services/authServices";
import { IUser } from "@/types";
import { error } from "console";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface IUserProvidersValues{
    user:IUser | null,
    setUser: Dispatch<SetStateAction<IUser | null>>;
    isLoading:boolean,
    setIsLoading:Dispatch<SetStateAction<boolean>> 

}

const userContext=createContext<IUserProvidersValues | undefined>(undefined)

const UserProvider = ({children}:{children: React.ReactNode;}) => {
    const [user,setUser]=useState<IUser | null>(null)
    const [isLoading,setIsLoading]=useState(true)

    const handleUser=async()=>{
      const user=await getCurrentUser() as any
      setUser(user)
      setIsLoading(false)
    }

    useEffect(()=>{
        handleUser()
    },[isLoading])

    return (
        <userContext.Provider value={{user,setUser,isLoading,setIsLoading}}>
            {children}
        </userContext.Provider>
    );
};

export const useUser=()=>{
    const context=useContext(userContext)
    if(context == undefined){
        throw new Error('useUser must be used within the userProvider wrap')
    }
    return context
}

export default UserProvider;