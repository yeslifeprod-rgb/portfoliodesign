import * as React from "react"
import { cn } from "@/lib/utils"

export function Tabs({
  value,
  onValueChange,
  children,
  className
}: {
  value: string;
  onValueChange: (val: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex h-9 items-center justify-center rounded-lg bg-slate-100 p-1 text-slate-500 border border-slate-200/50 shadow-sm select-none", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            activeValue: value,
            onSelect: onValueChange
          });
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({
  children,
  className,
  activeValue,
  onSelect
}: {
  children: React.ReactNode;
  className?: string;
  activeValue?: string;
  onSelect?: (val: string) => void;
}) {
  return (
    <div className={cn("inline-flex items-center justify-center gap-1", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            activeValue,
            onSelect
          });
        }
        return child;
      })}
    </div>
  );
}

export function TabsTrigger({
  value,
  activeValue,
  onSelect,
  children,
  className
}: {
  value: string;
  activeValue?: string;
  onSelect?: (val: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const isActive = activeValue === value;
  return (
    <button
      onClick={() => onSelect?.(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3.5 py-1 text-xs font-bold ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        isActive 
          ? "bg-white text-slate-950 shadow-sm" 
          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/50",
        className
      )}
    >
      {children}
    </button>
  );
}
