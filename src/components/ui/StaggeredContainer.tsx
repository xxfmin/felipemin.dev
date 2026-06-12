import { Children } from "react";
import { cn } from "@/lib/utils";

export function StaggeredContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const childrenArray = Children.toArray(children);

  return (
    <div className={cn("stagger-container", className)}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className="stagger-item"
          style={{ animationDelay: `${0.05 + index * 0.08}s` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
