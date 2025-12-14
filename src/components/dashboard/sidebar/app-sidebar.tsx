"use client"

import * as React from "react"
import {
  
  Bot,
  
  Frame,
 
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,

  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import Link from "next/link"
import Logo from "@/assets/svgs/logo"

// This is sample data.
const data = {
 
  navMain: [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items:[
        {
          title: "Dashboard",
          url: "/user/dashboard",
        }
      ]
    },
    {
      title: "shop",
      url: "/user/shop/all-products",
      icon: Bot,
      items: [
        {
          title: "Manage products",
          url: "/user/shop/all-products",
        },
        {
          title: "Manage category",
          url: "/user/shop/category",
        },
        {
          title: "Manage Brands",
          url: "/user/shop/brand",
        },
        {
          title: "Manage coupon",
          url: "/user/shop/manage-coupon",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "/myProfile",
        },
        
      ],
    },
  ],


  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <Link href="/">
              <div className="flex items-center justify-center">
                <Logo />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <h2 className="font-bold text-xl">NextMart</h2>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
       
      </SidebarContent>
                <NavProjects projects={data.projects} />
      <SidebarRail />
    </Sidebar>
  )
}
