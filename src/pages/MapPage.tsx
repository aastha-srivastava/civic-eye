import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trash2, 
  Construction, 
  Car, 
  Bike,
  Loader2
} from "lucide-react";

const MockMap = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: `url("https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/77.5946,12.9716,12,0/800x600?access_token=example")`,
        opacity: 0.7
      }}></div>
      
      <div className="absolute top-1/4 left-1/3 flex items-center justify-center">
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-critical opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-critical"></span>
        </span>
      </div>
      
      <div className="absolute top-1/2 left-1/2 flex items-center justify-center">
        <span className="flex h-4 w-4 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-warning"></span>
        </span>
      </div>
      
      <div className="absolute bottom-1/3 right-1/4 flex items-center justify-center">
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-india-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-india-green"></span>
        </span>
      </div>
      
      <div className="absolute top-1/3 right-1/3 flex items-center justify-center">
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-saffron"></span>
        </span>
      </div>
    </div>
  );
};

interface MapIssue {
  id: string;
  title: string;
  location: string;
  category: 'Garbage' | 'RoadDamage' | 'TrafficViolation' | 'HelmetViolation';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  imageUrl?: string;
}

const mockMapIssues: MapIssue[] = [
  {
    id: '1',
    title: 'Large garbage pile blocking sidewalk',
    location: 'MG Road, near Metro station, Bengaluru',
    category: 'Garbage',
    severity: 'high',
    timestamp: '2025-04-10T12:30:00',
    imageUrl: 'https://placehold.co/600x400/png'
  },
  {
    id: '2',
    title: 'Deep pothole causing traffic congestion',
    location: 'Silk Board Junction, Bengaluru',
    category: 'RoadDamage',
    severity: 'critical',
    timestamp: '2025-04-10T09:15:00',
    imageUrl: 'https://placehold.co/600x400/png'
  },
  {
    id: '3',
    title: 'Multiple vehicles running red light',
    location: 'Brigade Road crossing, Bengaluru',
    category: 'TrafficViolation',
    severity: 'medium',
    timestamp: '2025-04-10T16:45:00',
    imageUrl: 'https://placehold.co/600x400/png'
  },
  {
    id: '4',
    title: 'Riders without helmets near college',
    location: 'Near Christ University, Bengaluru',
    category: 'HelmetViolation',
    severity: 'medium',
    timestamp: '2025-04-10T14:20:00',
    imageUrl: 'https://placehold.co/600x400/png'
  },
  {
    id: '5',
    title: 'Sewage overflow on main street',
    location: 'Indiranagar 12th Main, Bengaluru',
    category: 'Garbage',
    severity: 'high',
    timestamp: '2025-04-10T11:10:00',
    imageUrl: 'https://placehold.co/600x400/png'
  }
];

const getCategoryIcon = (category: MapIssue['category']) => {
  switch (category) {
    case 'Garbage':
      return <Trash2 className="h-4 w-4" />;
    case 'RoadDamage':
      return <Construction className="h-4 w-4" />;
    case 'TrafficViolation':
      return <Car className="h-4 w-4" />;
    case 'HelmetViolation':
      return <Bike className="h-4 w-4" />;
    default:
      return null;
  }
};

const getSeverityClass = (severity: MapIssue['severity']) => {
  switch (severity) {
    case 'low':
      return 'bg-blue-100 text-blue-800';
    case 'medium':
      return 'bg-warning text-warning-foreground';
    case 'high':
      return 'bg-orange-500 text-white';
    case 'critical':
      return 'bg-critical text-white';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const MapPage = () => {
  const [filter, setFilter] = useState<MapIssue['category'] | 'All'>('All');
  
  const filteredIssues = filter === 'All' 
    ? mockMapIssues 
    : mockMapIssues.filter(issue => issue.category === filter);
    
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <div className="flex flex-col h-screen">
      <div className="p-6 pb-0">
        <h1 className="text-2xl font-bold">Issue Map</h1>
        <p className="text-muted-foreground">Geographic visualization of reported urban issues</p>
      </div>
      
      <div className="p-6 grid md:grid-cols-3 gap-6 h-full">
        <div className="md:col-span-2 h-[75vh]">
          <Card className="h-full">
            <CardContent className="p-0 h-full">
              <MockMap />
            </CardContent>
          </Card>
        </div>
        
        <div className="h-[75vh] flex flex-col">
          <Card className="h-full">
            <Tabs defaultValue="All" className="h-full flex flex-col">
              <div className="px-6 pt-6">
                <TabsList className="w-full grid grid-cols-4">
                  <TabsTrigger value="All" onClick={() => setFilter('All')}>All</TabsTrigger>
                  <TabsTrigger 
                    value="Garbage" 
                    onClick={() => setFilter('Garbage')}
                    className="flex items-center gap-1"
                  >
                    <Trash2 className="h-3 w-3" />
                    <span className="hidden sm:inline">Garbage</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="RoadDamage" 
                    onClick={() => setFilter('RoadDamage')}
                    className="flex items-center gap-1"
                  >
                    <Construction className="h-3 w-3" />
                    <span className="hidden sm:inline">Roads</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="Traffic" 
                    onClick={() => setFilter('TrafficViolation')}
                    className="flex items-center gap-1"
                  >
                    <Car className="h-3 w-3" />
                    <span className="hidden sm:inline">Traffic</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="All" className="flex-1 overflow-auto px-6 pb-6">
                <div className="space-y-4 mt-4">
                  {filteredIssues.map((issue) => (
                    <Card key={issue.id} className="overflow-hidden">
                      <div className="flex flex-col">
                        {issue.imageUrl && (
                          <div className="w-full h-24 bg-muted">
                            <img 
                              src={issue.imageUrl} 
                              alt={issue.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-medium text-sm">{issue.title}</h3>
                            <Badge className={getSeverityClass(issue.severity)}>
                              {issue.severity}
                            </Badge>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mb-2">
                            <span>{issue.location}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1">
                              {getCategoryIcon(issue.category)}
                              <span>{issue.category}</span>
                            </div>
                            <span>{formatDate(issue.timestamp)}</span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="Garbage" className="flex-1 overflow-auto px-6 pb-6">
                <div className="space-y-4 mt-4">
                  {filteredIssues.map((issue) => (
                    <Card key={issue.id} className="overflow-hidden">
                      <div className="flex flex-col">
                        {issue.imageUrl && (
                          <div className="w-full h-24 bg-muted">
                            <img 
                              src={issue.imageUrl} 
                              alt={issue.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-medium text-sm">{issue.title}</h3>
                            <Badge className={getSeverityClass(issue.severity)}>
                              {issue.severity}
                            </Badge>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mb-2">
                            <span>{issue.location}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1">
                              {getCategoryIcon(issue.category)}
                              <span>{issue.category}</span>
                            </div>
                            <span>{formatDate(issue.timestamp)}</span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="RoadDamage" className="flex-1 overflow-auto px-6 pb-6">
                <div className="space-y-4 mt-4">
                  {filteredIssues.map((issue) => (
                    <Card key={issue.id} className="overflow-hidden">
                      <div className="flex flex-col">
                        {issue.imageUrl && (
                          <div className="w-full h-24 bg-muted">
                            <img 
                              src={issue.imageUrl} 
                              alt={issue.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-medium text-sm">{issue.title}</h3>
                            <Badge className={getSeverityClass(issue.severity)}>
                              {issue.severity}
                            </Badge>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mb-2">
                            <span>{issue.location}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1">
                              {getCategoryIcon(issue.category)}
                              <span>{issue.category}</span>
                            </div>
                            <span>{formatDate(issue.timestamp)}</span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="Traffic" className="flex-1 overflow-auto px-6 pb-6">
                <div className="space-y-4 mt-4">
                  {filteredIssues.map((issue) => (
                    <Card key={issue.id} className="overflow-hidden">
                      <div className="flex flex-col">
                        {issue.imageUrl && (
                          <div className="w-full h-24 bg-muted">
                            <img 
                              src={issue.imageUrl} 
                              alt={issue.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-medium text-sm">{issue.title}</h3>
                            <Badge className={getSeverityClass(issue.severity)}>
                              {issue.severity}
                            </Badge>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mb-2">
                            <span>{issue.location}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1">
                              {getCategoryIcon(issue.category)}
                              <span>{issue.category}</span>
                            </div>
                            <span>{formatDate(issue.timestamp)}</span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
