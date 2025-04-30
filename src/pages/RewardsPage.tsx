import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Calendar, Camera, CheckCircle, ChevronRight, Clock, Coins, Gift, Info, MapPin, Trash2, Construction } from "lucide-react";

const RewardsPage = () => {
  const [activeTab, setActiveTab] = useState('programs');

  const rewardPrograms = [
    {
      id: '1',
      title: 'Urban Heroes Program',
      description: 'Report critical urban issues to earn points and rewards',
      progress: 70,
      target: '₹1,500 monthly potential',
      status: 'active',
      color: 'bg-india-green',
      icon: <Camera className="h-5 w-5" />
    },
    {
      id: '2',
      title: 'Waste Warriors',
      description: 'Identify and report garbage dumps and waste management issues',
      progress: 45,
      target: '₹800 monthly potential',
      status: 'active',
      color: 'bg-saffron',
      icon: <Trash2 className="h-5 w-5" />
    },
    {
      id: '3',
      title: 'Road Safety Champions',
      description: 'Report road damages and safety hazards to earn rewards',
      progress: 20,
      target: '₹1,200 monthly potential',
      status: 'active',
      color: 'bg-critical',
      icon: <Construction className="h-5 w-5" />
    }
  ];

  const achievements = [
    {
      id: '1',
      title: 'First Report',
      description: 'Successfully submitted your first issue report',
      date: '15 Apr 2023',
      points: 100,
      icon: <Camera className="h-5 w-5" />
    },
    {
      id: '2',
      title: 'Top Contributor',
      description: 'Ranked among top 10 contributors for the month',
      date: '30 Mar 2023',
      points: 500,
      icon: <Award className="h-5 w-5" />
    },
    {
      id: '3',
      title: 'Issue Resolver',
      description: 'Your reported issue was successfully resolved',
      date: '22 Feb 2023',
      points: 250,
      icon: <CheckCircle className="h-5 w-5" />
    }
  ];

  const topRiders = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      points: 2450,
      rank: 1,
      image: ''
    },
    {
      id: '2',
      name: 'Priya Singh',
      points: 2180,
      rank: 2,
      image: ''
    },
    {
      id: '3',
      name: 'Vikram Sharma',
      points: 1950,
      rank: 3,
      image: ''
    },
    {
      id: '4',
      name: 'Anita Desai',
      points: 1820,
      rank: 4,
      image: ''
    },
    {
      id: '5',
      name: 'Sanjay Patel',
      points: 1790,
      rank: 5,
      image: ''
    }
  ];

  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Rider Rewards</h1>
        <p className="text-muted-foreground text-lg">Incentivize riders for reporting urban issues</p>
      </div>

      <Alert className="mb-8 border-india-green/30 bg-india-green/5">
        <Info className="h-5 w-5 text-india-green" />
        <AlertTitle className="text-india-green">Reward System Active</AlertTitle>
        <AlertDescription>
          Your riders have earned ₹12,500 in rewards this month. Keep encouraging quality reports!
        </AlertDescription>
      </Alert>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="programs">Reward Programs</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {rewardPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-md transition-all duration-300 group">
                <CardHeader className="pb-2 flex flex-row items-start">
                  <div className="flex-1">
                    <div className="flex gap-2 items-center mb-2">
                      <div className={`p-2 rounded-md ${program.color} text-white`}>
                        {program.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold">{program.title}</CardTitle>
                    </div>
                    <CardDescription>{program.description}</CardDescription>
                  </div>
                  <Badge variant={program.status === 'active' ? 'default' : 'secondary'} className="ml-2 capitalize">
                    {program.status}
                  </Badge>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Your progress</span>
                      <span className="font-medium">{program.progress}%</span>
                    </div>
                    <Progress value={program.progress} className="h-2" />
                    <p className="text-sm flex items-center gap-1">
                      <Coins className="h-4 w-4 text-muted-foreground" />
                      <span>{program.target}</span>
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group-hover:bg-india-green group-hover:text-white transition-colors">
                    <span>View Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leaderboard">
          <Card>
            <CardHeader>
              <CardTitle>Top Performers This Month</CardTitle>
              <CardDescription>Riders who reported most valuable urban issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topRiders.map((rider) => (
                  <div key={rider.id} className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        rider.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' : 
                        rider.rank === 2 ? 'bg-gray-300/20 text-gray-500' : 
                        rider.rank === 3 ? 'bg-amber-700/20 text-amber-700' : 'bg-muted'
                      }`}>
                        {rider.rank}
                      </div>
                      <Avatar>
                        <AvatarFallback>{rider.name.charAt(0)}{rider.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{rider.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> Delhi Region
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        <span>{rider.points} points</span>
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">View Full Leaderboard</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {achievement.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">{achievement.title}</CardTitle>
                  </div>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <p className="text-sm flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" /> {achievement.date}
                    </p>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Coins className="h-3 w-3" /> {achievement.points} points
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 border rounded-lg p-6 bg-muted/10">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Gift className="h-5 w-5 text-primary" /> 
          Available Rewards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-saffron/10 to-india-green/10 border-0">
            <CardHeader>
              <CardTitle className="text-md">Cash Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">₹500 - ₹2,000</p>
              <p className="text-sm text-muted-foreground">Monthly earning potential</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-0">
            <CardHeader>
              <CardTitle className="text-md">Fuel Vouchers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">₹250 - ₹500</p>
              <p className="text-sm text-muted-foreground">Redeemable monthly</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-critical/5 to-critical/10 border-0">
            <CardHeader>
              <CardTitle className="text-md">Mobile Recharges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">₹100 - ₹300</p>
              <p className="text-sm text-muted-foreground">Weekly earning potential</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
