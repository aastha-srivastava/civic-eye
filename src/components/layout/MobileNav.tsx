
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MapPin, 
  BarChart2, 
  Trash2, 
  AlertTriangle, 
  Award, 
  Settings, 
  Users,
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const MobileNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  
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
      title: "Categories",
      url: "/categories",
      icon: Trash2,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: AlertTriangle,
    },
    {
      title: "Rewards",
      url: "/rewards",
      icon: Award,
    },
  ];

  const supportMenuItems = [
    {
      title: "Riders",
      url: "/riders",
      icon: Users,
    },
    {
      title: "Support",
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
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t border-border md:hidden">
        <div className="grid h-full grid-cols-5">
          {mainMenuItems.slice(0, 5).map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className={`flex flex-col items-center justify-center ${
                location.pathname === item.url 
                  ? "text-primary" 
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.title.split(' ')[0]}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="sticky top-0 z-10 w-full p-4 border-b border-border flex items-center justify-between bg-background/90 backdrop-blur-sm md:hidden">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-india-green text-white">
            T3
          </span>
          <span className="bg-gradient-to-r from-india-green to-saffron bg-clip-text text-transparent font-semibold">
            Track360
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-0 bg-background text-foreground border-l border-border">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <span className="font-semibold">Menu</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex-1 overflow-auto p-4">
                  <div className="space-y-1 mb-6">
                    <h3 className="text-xs font-medium text-foreground/70 mb-2">Dashboard</h3>
                    {mainMenuItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                          location.pathname === item.url 
                            ? "bg-accent text-accent-foreground" 
                            : "hover:bg-accent/50"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-xs font-medium text-foreground/70 mb-2">Administration</h3>
                    {supportMenuItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                          location.pathname === item.url 
                            ? "bg-accent text-accent-foreground" 
                            : "hover:bg-accent/50"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Municipal Admin</p>
                      <p className="text-xs text-muted-foreground">Delhi Branch</p>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
