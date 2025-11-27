interface AdPlaceholderProps {
  size?: "small" | "medium" | "large" | "sidebar";
  className?: string;
}

const AdPlaceholder = ({ size = "medium", className = "" }: AdPlaceholderProps) => {
  const sizeClasses = {
    small: "h-24",
    medium: "h-40",
    large: "h-64",
    sidebar: "h-96",
  };

  return (
    <div
      className={`bg-muted border-2 border-dashed border-border rounded-lg flex items-center justify-center ${sizeClasses[size]} ${className}`}
    >
      <div className="text-center p-4">
        <p className="text-sm font-medium text-muted-foreground">Advertisement Space</p>
        <p className="text-xs text-muted-foreground mt-1">{size} banner</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
