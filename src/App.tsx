
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Index from "./pages/Index";
import MapPage from "./pages/MapPage";
import CategoriesPage from "./pages/CategoriesPage";
import RewardsPage from "./pages/RewardsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/rewards" element={<RewardsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              {/* Placeholder routes for navigation */}
              <Route path="/reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Reports</h1><p className="text-muted-foreground">This page is under development</p></div>} />
              <Route path="/riders" element={<div className="p-6"><h1 className="text-2xl font-bold">Rider Management</h1><p className="text-muted-foreground">This page is under development</p></div>} />
              <Route path="/support" element={<div className="p-6"><h1 className="text-2xl font-bold">Help & Support</h1><p className="text-muted-foreground">This page is under development</p></div>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
