
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Trash2, Construction, Car, AlertTriangle, LucideIcon } from "lucide-react";

interface CategoryData {
  name: string;
  value: number;
  color: string;
  icon: LucideIcon; // Update to LucideIcon type
}

interface CategoriesChartProps {
  data: CategoryData[];
}

// Define more intuitive and accessible colors
const CATEGORY_COLORS = {
  'Garbage': '#8E9196', // Gray
  'Road Damage': '#F97316', // Orange 
  'Traffic Violations': '#E63946', // Red
  'Helmet Violations': '#FFBF00', // Yellow
};

const CategoriesChart: React.FC<CategoriesChartProps> = ({ data }) => {
  // Ensure data has the right colors based on category names
  const enhancedData = data.map(item => ({
    ...item,
    color: CATEGORY_COLORS[item.name as keyof typeof CATEGORY_COLORS] || item.color
  }));

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Issues by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={enhancedData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                labelLine={false}
              >
                {enhancedData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    stroke="var(--background)"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-background border border-border p-3 rounded-lg shadow-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 rounded" style={{ backgroundColor: data.color }} />
                          <span className="font-medium">{data.name}</span>
                        </div>
                        <p className="text-sm">{data.value} issues</p>
                        <p className="text-xs text-muted-foreground">
                          {((data.value / enhancedData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}% of total
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-6">
          {enhancedData.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="flex items-center group hover:bg-accent/50 p-2 rounded-md transition-colors">
                <div 
                  className="w-8 h-8 rounded-md mr-3 flex items-center justify-center" 
                  style={{ backgroundColor: category.color + '30', color: category.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
                <span className="ml-auto text-sm font-bold">{category.value}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoriesChart;
