import { cn } from "@/lib/utils";

interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const BaseCard = ({ children, className }: BaseCardProps) => {
  return (
    <div
      className={cn(
        " p-4 border border-gray-200 rounded-lg shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BaseCard;
