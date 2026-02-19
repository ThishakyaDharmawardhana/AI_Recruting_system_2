"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { SideBarOptions } from "@/services/Constants"
import Link from "next/link"



import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

export function AppSidebar() {

    const path=usePathname();
    console.log(path);


  return (
    <Sidebar>
      <SidebarHeader className='flex items-center mt-2'>
        <Image src={'/Logo.png'} alt="Logo" width={200} 
             height={100} 
             className="w-[150px] rounded-full"
        />
        <Button className='w-full '> <Plus /> Create New Interview </Button>

    
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
            <SidebarContent>
                <SidebarMenu>
                    {SideBarOptions.map((option, index) => (
                        <SidebarMenuItem key={index}>
                            <SidebarMenuButton asChild className={`p-5 ${path==option.path && 'bg-orange-100'}`}>
                                <Link href={option.path}>
                                   <option.icon className={`${path==option.path && 'text-primary'}`}/>
                                   <span className={`text-[16px] font-medium${path==option.path && 'text-primary'}`}>{option.name}</span>
                                </Link>
                            </SidebarMenuButton>

                        </SidebarMenuItem>
                        
                    ))}
                </SidebarMenu>
            </SidebarContent>

        </SidebarGroup>
    
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar