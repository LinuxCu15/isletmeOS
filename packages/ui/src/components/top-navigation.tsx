import * as React from "react";
import { cn } from "../lib/utils";

interface TopNavigationProps {
  brand: React.ReactNode;
  navigation?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export function TopNavigation({ brand, navigation, actions, className }: TopNavigationProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-sticky border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70",
        className,
      )}
    >
      <div className="container flex h-14 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-6">
          <div className="shrink-0 font-semibold">{brand}</div>
          {navigation ? <nav className="hidden items-center gap-1 md:flex">{navigation}</nav> : null}
        </div>
        {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}

export function TopNavigationLink({
  active,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean }) {
  return (
    <a
      className={cn(
        "rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
        active && "bg-muted text-foreground",
        className,
      )}
      {...props}
    />
  );
}

