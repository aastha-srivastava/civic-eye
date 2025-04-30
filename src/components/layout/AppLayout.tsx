
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from './AppSidebar';
import MobileNav from './MobileNav';
import { Outlet } from 'react-router-dom';
import { ThemeToggle } from "@/components/ThemeToggle";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto hide-scrollbar transition-all duration-300 animate-fade-in bg-background pb-16 md:pb-0">
          <div className="sticky top-0 z-10 w-full p-4 border-b border-border flex justify-end items-center bg-background/80 backdrop-blur-sm hidden md:flex">
            <ThemeToggle />
          </div>
          <Outlet />
        </main>
        <MobileNav />
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
