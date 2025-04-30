
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, Star } from "lucide-react";

interface Rider {
  id: string;
  name: string;
  avatar?: string;
  issuesReported: number;
  rewardsEarned: number;
  rating: number;
  badgeLevel: 'bronze' | 'silver' | 'gold' | 'platinum';
}

interface RiderStatsProps {
  topRiders: Rider[];
}

const getBadgeColor = (level: Rider['badgeLevel']) => {
  switch (level) {
    case 'bronze':
      return 'bg-orange-700';
    case 'silver':
      return 'bg-gray-400';
    case 'gold':
      return 'bg-yellow-500';
    case 'platinum':
      return 'bg-purple-600';
    default:
      return 'bg-gray-400';
  }
};

const RiderStats: React.FC<RiderStatsProps> = ({ topRiders }) => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Top Riders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topRiders.map((rider) => (
            <div key={rider.id} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={rider.avatar} />
                  <AvatarFallback>{rider.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">{rider.name}</p>
                    <div className={`ml-2 p-1 rounded-full ${getBadgeColor(rider.badgeLevel)}`}>
                      <BadgeCheck className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mt-0.5">
                    <span>{rider.issuesReported} issues reported</span>
                    <span className="mx-2">•</span>
                    <span>₹{rider.rewardsEarned} earned</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-warning">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 font-medium">{rider.rating.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RiderStats;
