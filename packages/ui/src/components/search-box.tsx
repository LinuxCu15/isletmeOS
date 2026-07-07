import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../lib/utils";

export interface SearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

export const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ className, wrapperClassName, ...props }, ref) => (
    <div className={cn("relative w-full", wrapperClassName)}>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        ref={ref}
        type="search"
        className={cn(
          "h-9 w-full rounded-md border border-input bg-background py-2 pl-9 pr-3 text-sm outline-none transition duration-normal ease-standard placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20",
          className,
        )}
        {...props}
      />
    </div>
  ),
);
SearchBox.displayName = "SearchBox";

