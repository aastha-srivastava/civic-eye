
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  change?: {
    value: number;
    isPositive: boolean;
  };
  valueClassName?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  variant = 'default',
  change,
  valueClassName,
  className
}) => {
  const variantStyles = {
    default: {
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      changeColor: 'text-green-500'
    },
    success: {
      iconBg: 'bg-success/10',
      iconColor: 'text-success',
      changeColor: 'text-success'
    },
    warning: {
      iconBg: 'bg-warning/10',
      iconColor: 'text-warning',
      changeColor: 'text-warning'
    },
    danger: {
      iconBg: 'bg-critical/10',
      iconColor: 'text-critical',
      changeColor: 'text-critical'
    }
  };

  const styles = variantStyles[variant];
  
  return (
    <Card className={cn("overflow-hidden group", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-2 rounded-lg", styles.iconBg)}>
            <div className={cn("w-10 h-10 flex items-center justify-center", styles.iconColor)}>
              {icon}
            </div>
          </div>
          {change && (
            <div className="flex items-center">
              {change.isPositive ? (
                <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <ArrowDownIcon className="w-4 h-4 text-critical mr-1" />
              )}
              <span className={cn("text-sm font-medium", change.isPositive ? 'text-green-500' : 'text-critical')}>
                {change.value}%
              </span>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-muted-foreground font-medium text-sm mb-1">{title}</h3>
          <p className={cn("font-bold tracking-tight group-hover:scale-105 transition-transform", valueClassName || "text-xl")}>{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
