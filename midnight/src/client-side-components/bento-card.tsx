import React, { ReactNode } from "react";
import { cn } from "../../utils/cn";

// TypeScript interface for BentoGrid props
interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

// BentoGrid component
export const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// TypeScript interface for BentoGridItem props
interface BentoGridItemProps {
  className?: string;
  title: string;
  description: string;
  header: string;
  Link: string // Use ReactNode for elements like icons
}

// BentoGridItem component
export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  header,
  Link,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="">
        {Link}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
