import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "success" | "outline" | "premium";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                    {
                        "bg-primary/10 text-primary": variant === "default",
                        "bg-green-100 text-green-800": variant === "success",
                        "border border-gray-300 text-gray-600 bg-transparent": variant === "outline",
                        "bg-gradient-to-r from-primary to-red-500 text-white shadow-md": variant === "premium",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = "Badge";

export { Badge };
