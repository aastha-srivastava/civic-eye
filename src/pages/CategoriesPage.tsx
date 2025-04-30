
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Construction, Car, AlertTriangle, Plus, Search, Filter } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  color: string;
  icon: React.ReactNode;
}

const CategoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories: Category[] = [
    {
      id: '1',
      name: 'Garbage Disposal',
      description: 'Issues related to waste management and garbage collection',
      count: 487,
      color: '#8E9196',
      icon: <Trash2 className="h-5 w-5" />
    },
    {
      id: '2',
      name: 'Road Damage',
      description: 'Potholes, broken roads, and related infrastructure issues',
      count: 356,
      color: '#F97316',
      icon: <Construction className="h-5 w-5" />
    },
    {
      id: '3',
      name: 'Traffic Violations',
      description: 'Signal jumping, wrong-way driving, and other traffic rule violations',
      count: 247,
      color: '#E63946',
      icon: <Car className="h-5 w-5" />
    },
    {
      id: '4',
      name: 'Helmet Violations',
      description: 'Two-wheeler riders without proper safety helmets',
      count: 158,
      color: '#FFBF00',
      icon: <AlertTriangle className="h-5 w-5" />
    }
  ];
  
  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Issue Categories</h1>
        <p className="text-muted-foreground text-lg">Manage and monitor urban issues by category</p>
      </div>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search categories..." 
            className="pl-10"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button size="sm" className="flex gap-2">
            <Plus className="h-4 w-4" />
            <span>New Category</span>
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Categories</TabsTrigger>
          <TabsTrigger value="active">Most Active</TabsTrigger>
          <TabsTrigger value="resolved">Recently Updated</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden hover:shadow-md transition-all duration-300 group">
                <CardHeader className="pb-2 flex flex-row items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <div 
                        className="p-2 rounded-md" 
                        style={{ backgroundColor: `${category.color}30`, color: category.color }}
                      >
                        {category.icon}
                      </div>
                      {category.name}
                    </CardTitle>
                    <CardDescription className="mt-2">{category.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-md font-medium px-2 py-1">
                    {category.count}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="group-hover:opacity-100 opacity-0 transition-opacity">
                      Edit
                    </Button>
                    <Button variant="default" size="sm" className="group-hover:opacity-100 opacity-0 transition-opacity">
                      View Issues
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="active" className="mt-0">
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Most active categories view coming soon</p>
          </div>
        </TabsContent>
        
        <TabsContent value="resolved" className="mt-0">
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Recently updated categories view coming soon</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CategoriesPage;
