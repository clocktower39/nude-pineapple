import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
  shadcn Button, restyled for the pineapple theme.
  Extra variants: `neon` (pineapple fill) and `grape` (purple outline).
*/
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97] cursor-pointer",
  {
    variants: {
      variant: {
        neon: "bg-pineapple text-[#1a1500] shadow-glow hover:bg-pineapple-soft hover:shadow-[0_10px_40px_-6px_rgba(255,214,10,0.6)]",
        grape:
          "bg-grape/15 text-grape-soft border border-grape/40 hover:bg-grape/25 hover:shadow-glow-grape",
        leaf: "bg-leaf/12 text-leaf border border-leaf/40 hover:bg-leaf/22 hover:shadow-glow-leaf",
        outline:
          "border border-white/15 bg-white/5 text-fg hover:bg-white/10 hover:border-white/25",
        ghost: "text-fg-muted hover:text-fg hover:bg-white/5",
        link: "text-pineapple underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-3.5",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "neon", size: "default" },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
