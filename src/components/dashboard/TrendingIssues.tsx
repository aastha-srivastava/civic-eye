
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface TrendData {
  name: string;
  data: {
    date: string;
    value: number;
  }[];
  color: string;
}

interface TrendingIssuesProps {
  trends: TrendData[];
  timeRange: '7days' | '30days' | '90days';
  onTimeRangeChange: (range: '7days' | '30days' | '90days') => void;
}

const TrendingIssues: React.FC<TrendingIssuesProps> = ({ 
  trends, 
  timeRange,
  onTimeRangeChange
}) => {
  // Format data for recharts
  const chartData = trends[0]?.data.map((item, index) => {
    const dataPoint: { [key: string]: string | number } = {
      date: item.date,
    };
    
    trends.forEach(trend => {
      dataPoint[trend.name] = trend.data[index].value;
    });
    
    return dataPoint;
  });

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Trending Issues</CardTitle>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onTimeRangeChange('7days')}
            className={`px-2 py-1 text-xs rounded-md transition-colors duration-200 ${
              timeRange === '7days' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary/20 text-secondary-foreground hover:bg-secondary/40'
            }`}
          >
            7 Days
          </button>
          <button 
            onClick={() => onTimeRangeChange('30days')}
            className={`px-2 py-1 text-xs rounded-md transition-colors duration-200 ${
              timeRange === '30days' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary/20 text-secondary-foreground hover:bg-secondary/40'
            }`}
          >
            30 Days
          </button>
          <button 
            onClick={() => onTimeRangeChange('90days')}
            className={`px-2 py-1 text-xs rounded-md transition-colors duration-200 ${
              timeRange === '90days' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary/20 text-secondary-foreground hover:bg-secondary/40'
            }`}
          >
            90 Days
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis 
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return `${date.getDate()}/${date.getMonth() + 1}`;
                }}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'var(--background)', 
                  borderColor: 'var(--border)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                labelStyle={{ fontWeight: 'bold' }}
                labelFormatter={(label) => {
                  const date = new Date(label);
                  return `Date: ${date.toLocaleDateString()}`;
                }}
                formatter={(value, name) => {
                  return [`${value} issues`, name];
                }}
              />
              {trends.map((trend) => (
                <Area
                  key={trend.name}
                  type="monotone"
                  dataKey={trend.name}
                  stackId="1"
                  stroke={trend.color}
                  fill={trend.color}
                  fillOpacity={0.2}
                  activeDot={{ r: 6, strokeWidth: 1 }}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap gap-6">
          {trends.map((trend) => (
            <div key={trend.name} className="flex items-center">
              <div 
                className="w-4 h-4 rounded-md mr-2" 
                style={{ backgroundColor: trend.color }}
              />
              <span className="text-sm font-medium">{trend.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingIssues;
