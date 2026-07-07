import { Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

interface LoadingStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export function LoadingState({
  title = "Loading",
  description = "Preparing the latest information.",
  className,
}: LoadingStateProps) {
  return (
    <div
      className={cn("flex min-h-40 flex-col items-center justify-center gap-3 text-center", className)}
      role="status"
      aria-live="polite"
    >
      <Loader2 className="size-5 animate-spin text-muted-foreground" aria-hidden="true" />
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

