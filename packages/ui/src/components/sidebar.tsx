import * as React from "react";
import { cn } from "../lib/utils";

export function Sidebar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <aside
      className={cn(
        "flex h-full w-64 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex h-14 items-center border-b px-4", className)} {...props} />;
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1 space-y-6 overflow-y-auto p-3", className)} {...props} />;
}

export function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("border-t p-3", className)} {...props} />;
}

export function SidebarSection({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-1", className)} {...props} />;
}

export function SidebarSectionLabel({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("px-2 pb-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground", className)}
      {...props}
    />
  );
}

export function SidebarItem({
  active,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean }) {
  return (
    <a
      className={cn(
        "flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
        active && "bg-muted text-foreground",
        className,
      )}
      {...props}
    />
  );
}

