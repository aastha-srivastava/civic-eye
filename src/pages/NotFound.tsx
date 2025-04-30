
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
            <MapPin className="h-12 w-12 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The page you're looking for seems to be missing from our map. Let's get you back to a known location.
        </p>
        <Button asChild>
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
