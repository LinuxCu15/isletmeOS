import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

export function Breadcrumb({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav aria-label="Breadcrumb" className={className} {...props} />;
}

export function BreadcrumbList({ className, ...props }: React.OlHTMLAttributes<HTMLOListElement>) {
  return <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground", className)} {...props} />;
}

export function BreadcrumbItem({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className={cn("inline-flex items-center gap-1.5", className)} {...props} />;
}

export function BreadcrumbLink({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn("transition hover:text-foreground", className)} {...props} />;
}

export function BreadcrumbPage({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span aria-current="page" className={cn("font-medium text-foreground", className)} {...props} />;
}

export function BreadcrumbSeparator({ className, children, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li aria-hidden="true" className={cn("text-muted-foreground/70", className)} {...props}>
      {children ?? <ChevronRight className="size-3.5" />}
    </li>
  );
}

