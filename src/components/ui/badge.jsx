import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium font-mono transition-colors",
  {
    variants: {
      variant: {
        default: "border-white/12 bg-white/5 text-fg-muted",
        pineapple: "border-pineapple/40 bg-pineapple/12 text-pineapple",
        leaf: "border-leaf/40 bg-leaf/12 text-leaf",
        grape: "border-grape/40 bg-grape/12 text-grape-soft",
        tangerine: "border-tangerine/40 bg-tangerine/12 text-tangerine",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
