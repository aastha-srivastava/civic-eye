
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type IssueStatus = 'open' | 'inProgress' | 'resolved';

interface Issue {
  id: string;
  title: string;
  location: string;
  status: IssueStatus;
  priority: 'low' | 'medium' | 'high' | 'critical';
  reportedAt: string;
  progressPercent: number;
}

interface IssueTrackerProps {
  issues: Issue[];
}

const getStatusColor = (status: IssueStatus) => {
  switch (status) {
    case 'open':
      return 'bg-warning text-warning-foreground';
    case 'inProgress':
      return 'bg-blue-500 text-white';
    case 'resolved':
      return 'bg-success text-white';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getPriorityColor = (priority: Issue['priority']) => {
  switch (priority) {
    case 'low':
      return 'bg-green-100 text-green-800';
    case 'medium':
      return 'bg-blue-100 text-blue-800';
    case 'high':
      return 'bg-warning text-warning-foreground';
    case 'critical':
      return 'bg-critical text-white';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const IssueTracker: React.FC<IssueTrackerProps> = ({ issues }) => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Recent Issues</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {issues.map((issue) => (
            <div key={issue.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{issue.title}</h4>
                  <p className="text-sm text-muted-foreground">{issue.location}</p>
                </div>
                <div className="flex gap-2">
                  <Badge className={getStatusColor(issue.status)}>
                    {issue.status === 'inProgress' ? 'In Progress' : issue.status}
                  </Badge>
                  <Badge className={getPriorityColor(issue.priority)}>
                    {issue.priority}
                  </Badge>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>{issue.progressPercent}%</span>
                </div>
                <Progress value={issue.progressPercent} className="h-2" />
              </div>
              <div className="mt-3 text-xs text-muted-foreground">
                Reported: {issue.reportedAt}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueTracker;
