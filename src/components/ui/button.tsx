import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-between gap-3 whitespace-nowrap rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F2A2E]/30 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#1F2A2E] text-white pl-7 pr-2 py-2 hover:bg-black",
        primary: "bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white pl-7 pr-2 py-2 hover:brightness-95 shadow-sm",
        secondary: "bg-white text-[#1F2A2E] border border-[#1F2A2E]/15 pl-7 pr-2 py-2 hover:border-[#1F2A2E]/40",
        outline: "border border-white/25 bg-transparent text-white pl-7 pr-2 py-2 hover:bg-white/10",
        ghost: "hover:bg-black/5 text-[#626a6d] hover:text-[#1F2A2E] pl-4 pr-4",
      },
      size: {
        default: "min-h-[64px] text-[15px]",
        sm: "min-h-[52px] text-sm",
        lg: "min-h-[68px] text-base",
        icon: "h-10 w-10 p-0 justify-center",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
