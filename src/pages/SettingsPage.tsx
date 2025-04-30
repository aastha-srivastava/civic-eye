
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BellRing, Globe, Languages, Lock, Mail, Map, SaveIcon, Settings, User } from "lucide-react";
import { ThemeToggle } from '@/components/ThemeToggle';

const SettingsPage = () => {
  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground text-lg">Configure your Track360 platform settings</p>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-4 h-auto p-1 md:w-fit md:grid-cols-none md:flex">
          <TabsTrigger value="general" className="flex gap-2 items-center">
            <Settings className="h-4 w-4" />
            <span>General</span>
          </TabsTrigger>
          <TabsTrigger value="account" className="flex gap-2 items-center">
            <User className="h-4 w-4" />
            <span>Account</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex gap-2 items-center">
            <BellRing className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="map" className="flex gap-2 items-center">
            <Map className="h-4 w-4" />
            <span>Map Settings</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize how Track360 looks on your device
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <span className="text-sm text-muted-foreground">
                    Choose between light and dark theme
                  </span>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <div className="flex gap-2">
                  <Select defaultValue="en">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="ta">Tamil</SelectItem>
                      <SelectItem value="te">Telugu</SelectItem>
                      <SelectItem value="mr">Marathi</SelectItem>
                      <SelectItem value="bn">Bengali</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="flex gap-2">
                    <Languages className="h-4 w-4" />
                    <span>Add New Language</span>
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="asia-kolkata">
                  <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asia-kolkata">Asia/Kolkata (IST)</SelectItem>
                    <SelectItem value="gmt">GMT</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Regional Settings</CardTitle>
              <CardDescription>
                Configure location-specific settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="city">Primary City</Label>
                <Select defaultValue="delhi">
                  <SelectTrigger className="w-full md:w-[300px]">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="kolkata">Kolkata</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Default View</Label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="overview" defaultChecked />
                    <Label htmlFor="overview">Overview Dashboard</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="map-view" />
                    <Label htmlFor="map-view">Map View</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Amit Sharma" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="amit.sharma@municipality.gov.in" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="Municipal Admin" readOnly className="bg-muted" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Input id="branch" defaultValue="Delhi Branch" />
                </div>
              </div>
              <Button className="flex gap-2 mt-4">
                <SaveIcon className="h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="2fa">Two-Factor Authentication</Label>
                  <Switch id="2fa" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Button variant="default" className="flex gap-2 mt-2">
                <Lock className="h-4 w-4" />
                Update Security Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how and when you receive alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-md font-medium">Email Notifications</h3>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="new-issues" className="font-medium">New Issues</Label>
                      <p className="text-sm text-muted-foreground">Get notified when riders report new issues</p>
                    </div>
                    <Switch id="new-issues" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="critical-issues" className="font-medium">Critical Issues</Label>
                      <p className="text-sm text-muted-foreground">Urgent notifications for high-priority issues</p>
                    </div>
                    <Switch id="critical-issues" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="issue-updates" className="font-medium">Issue Updates</Label>
                      <p className="text-sm text-muted-foreground">Updates when an issue status changes</p>
                    </div>
                    <Switch id="issue-updates" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="system" className="font-medium">System Notifications</Label>
                      <p className="text-sm text-muted-foreground">Important platform updates and maintenance notices</p>
                    </div>
                    <Switch id="system" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-md font-medium">Digest Frequency</h3>
                <div className="space-y-2">
                  <Label>Daily Reports</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger className="w-full md:w-[300px]">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="daily">Daily Digest</SelectItem>
                      <SelectItem value="weekly">Weekly Summary</SelectItem>
                      <SelectItem value="disabled">Disabled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="flex gap-2">
                <Mail className="h-4 w-4" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="map" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Map Configuration</CardTitle>
              <CardDescription>Customize your map view and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-view">Default Map View</Label>
                <Select defaultValue="satellite">
                  <SelectTrigger className="w-full md:w-[300px]">
                    <SelectValue placeholder="Select map style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="streets">Streets</SelectItem>
                    <SelectItem value="satellite">Satellite</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Map Layers</Label>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="traffic-layer" className="font-medium">Traffic Layer</Label>
                      <p className="text-sm text-muted-foreground">Show traffic conditions on the map</p>
                    </div>
                    <Switch id="traffic-layer" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="boundary-layer" className="font-medium">Municipal Boundaries</Label>
                      <p className="text-sm text-muted-foreground">Show administrative boundaries</p>
                    </div>
                    <Switch id="boundary-layer" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="heatmap" className="font-medium">Issue Heatmap</Label>
                      <p className="text-sm text-muted-foreground">Show issue density heatmap</p>
                    </div>
                    <Switch id="heatmap" defaultChecked />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="issue-clustering">Issue Clustering</Label>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Group nearby issues into clusters on the map</p>
                  <Switch id="issue-clustering" defaultChecked />
                </div>
              </div>
              <Button className="flex gap-2 mt-2">
                <Globe className="h-4 w-4" />
                Apply Map Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
