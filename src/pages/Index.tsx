import React, { useState } from 'react';
import { 
  Trash2, 
  Construction, 
  Car, 
  Camera,
  BarChart2,
  UserCheck,
  AlertTriangle
} from "lucide-react";
import StatCard from '@/components/dashboard/StatCard';
import IssueTracker from '@/components/dashboard/IssueTracker';
import RiderStats from '@/components/dashboard/RiderStats';
import CategoriesChart from '@/components/dashboard/CategoriesChart';
import TrendingIssues from '@/components/dashboard/TrendingIssues';

const mockIssues = [
  {
    id: '1',
    title: 'Large garbage pile at MG Road',
    location: 'MG Road, Bengaluru',
    status: 'open' as const,
    priority: 'high' as const,
    reportedAt: '2 hours ago',
    progressPercent: 0
  },
  {
    id: '2',
    title: 'Broken traffic light at Brigade Junction',
    location: 'Brigade Road, Bengaluru',
    status: 'inProgress' as const,
    priority: 'critical' as const,
    reportedAt: '5 hours ago',
    progressPercent: 45
  },
  {
    id: '3',
    title: 'Pothole causing traffic at Silk Board',
    location: 'Silk Board Junction, Bengaluru',
    status: 'inProgress' as const,
    priority: 'medium' as const,
    reportedAt: '1 day ago',
    progressPercent: 70
  },
  {
    id: '4',
    title: 'Overflowing sewage near market',
    location: 'KR Market, Bengaluru',
    status: 'resolved' as const,
    priority: 'high' as const,
    reportedAt: '2 days ago',
    progressPercent: 100
  }
];

const mockTopRiders = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    issuesReported: 32,
    rewardsEarned: 2400,
    rating: 4.8,
    badgeLevel: 'platinum' as const
  },
  {
    id: '2',
    name: 'Priya Singh',
    issuesReported: 28,
    rewardsEarned: 2100,
    rating: 4.7,
    badgeLevel: 'gold' as const
  },
  {
    id: '3',
    name: 'Vikram Sharma',
    issuesReported: 21,
    rewardsEarned: 1650,
    rating: 4.5,
    badgeLevel: 'silver' as const
  }
];

const mockCategoryData = [
  { name: 'Garbage', value: 42, color: '#8E9196', icon: Trash2 }, // Gray
  { name: 'Road Damage', value: 28, color: '#F97316', icon: Construction }, // Orange
  { name: 'Traffic Violations', value: 18, color: '#E63946', icon: Car }, // Red
  { name: 'Helmet Violations', value: 12, color: '#FFBF00', icon: AlertTriangle } // Yellow
];

const generateMockTrendData = () => {
  const types = [
    { name: 'Garbage', color: '#8E9196' }, // Gray
    { name: 'Road Damage', color: '#F97316' }, // Orange
    { name: 'Traffic Violations', color: '#E63946' }, // Red
  ];
  
  const dates = Array.from({ length: 90 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (89 - i));
    return date.toISOString().split('T')[0];
  });
  
  return types.map(type => {
    return {
      name: type.name,
      color: type.color,
      data: dates.map(date => {
        const baseValue = type.name === 'Garbage' ? 20 : 
                          type.name === 'Road Damage' ? 15 : 10;
        
        const value = Math.max(0, 
          baseValue + Math.sin(new Date(date).getDate() / 5) * 5 + Math.random() * 5
        );
        
        return {
          date,
          value: Math.round(value)
        };
      })
    };
  });
};

const trendDataFull = generateMockTrendData();

const Index = () => {
  const [timeRange, setTimeRange] = useState<'7days' | '30days' | '90days'>('30days');
  
  const getFilteredTrendData = () => {
    const ranges = {
      '7days': 7,
      '30days': 30,
      '90days': 90
    };
    
    return trendDataFull.map(trend => ({
      ...trend,
      data: trend.data.slice(-ranges[timeRange])
    }));
  };
  
  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Track360 Dashboard</h1>
        <p className="text-muted-foreground text-lg">Real-time monitoring of urban issues across India</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Issues" 
          value="1,248" 
          change={{ value: 12, isPositive: true }}
          icon={<AlertTriangle className="h-6 w-6" />} 
          valueClassName="text-2xl font-bold"
          className="hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        />
        <StatCard 
          title="Active Riders" 
          value="87" 
          change={{ value: 5, isPositive: true }}
          icon={<UserCheck className="h-6 w-6" />} 
          variant="success"
          valueClassName="text-2xl font-bold"
          className="hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        />
        <StatCard 
          title="Resolved Issues" 
          value="732"
          change={{ value: 8, isPositive: true }}
          icon={<BarChart2 className="h-6 w-6" />} 
          valueClassName="text-2xl font-bold"
          className="hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        />
        <StatCard 
          title="Rewards Distributed" 
          value="₹87,500"
          change={{ value: 15, isPositive: true }}
          icon={<Camera className="h-6 w-6" />} 
          variant="warning"
          valueClassName="text-2xl font-bold"
          className="hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <TrendingIssues 
            trends={getFilteredTrendData()} 
            timeRange={timeRange}
            onTimeRangeChange={setTimeRange}
          />
        </div>
        <div>
          <CategoriesChart data={mockCategoryData} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <IssueTracker issues={mockIssues} />
        </div>
        <div>
          <RiderStats topRiders={mockTopRiders} />
        </div>
      </div>
    </div>
  );
};

export default Index;
