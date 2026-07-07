import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  tone?: "neutral" | "success" | "warning" | "danger";
  icon?: LucideIcon;
  className?: string;
}

const toneClassName = {
  neutral: "text-muted-foreground",
  success: "text-success",
  warning: "text-warning-foreground",
  danger: "text-destructive",
};

export function MetricCard({
  label,
  value,
  change,
  tone = "neutral",
  icon: Icon,
  className,
}: MetricCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-5 shadow-panel", className)}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {Icon ? <Icon className="size-4 text-muted-foreground" aria-hidden="true" /> : null}
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-tight">{value}</p>
      {change ? <p className={cn("mt-2 text-sm", toneClassName[tone])}>{change}</p> : null}
    </div>
  );
}

