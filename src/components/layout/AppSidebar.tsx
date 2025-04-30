
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarHeader, 
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  MapPin, 
  BarChart2, 
  Trash2, 
  AlertTriangle, 
  Award, 
  Settings, 
  Users,
  HelpCircle,
  LogOut,
} from "lucide-react";

const AppSidebar = () => {
  const location = useLocation();
  
  const mainMenuItems = [
    {
      title: "Overview",
      url: "/",
      icon: BarChart2,
    },
    {
      title: "Issue Map",
      url: "/map",
      icon: MapPin,
    },
    {
      title: "Issue Categories",
      url: "/categories",
      icon: Trash2,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: AlertTriangle,
    },
    {
      title: "Rider Rewards",
      url: "/rewards",
      icon: Award,
    },
  ];

  const supportMenuItems = [
    {
      title: "Rider Management",
      url: "/riders",
      icon: Users,
    },
    {
      title: "Help & Support",
      url: "/support",
      icon: HelpCircle,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ];

  return (
    <Sidebar className="hidden md:block">
      <SidebarHeader className="px-6 py-3">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-india-green text-white">
            T3
          </span>
          <span className="bg-gradient-to-r from-india-green to-saffron bg-clip-text text-transparent">Track360</span>
        </div>
        <div className="flex items-center gap-2">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url} className="flex gap-3 items-center group transition-all duration-300">
                      <span className="flex items-center justify-center rounded-md w-9 h-9 group-hover:bg-sidebar-accent transition-colors">
                        <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url} className="flex gap-3 items-center group transition-all duration-300">
                      <span className="flex items-center justify-center rounded-md w-9 h-9 group-hover:bg-sidebar-accent transition-colors">
                        <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-india-green/10 flex items-center justify-center">
              <Users className="h-4 w-4 text-india-green" />
            </div>
            <div>
              <p className="text-xs font-medium">Municipal Admin</p>
              <p className="text-xs text-muted-foreground">Delhi Branch</p>
            </div>
          </div>
          <button className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-sidebar-accent transition-colors">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
