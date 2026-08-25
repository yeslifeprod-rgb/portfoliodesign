import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-border bg-background px-2.5 py-0.5 text-caption font-semibold text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary !text-primary-foreground shadow-sm hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "border-border text-foreground",
        // Accent principal du portfolio : la couleur est fournie par
        // --primary / --primary-foreground dans app/globals.css.
        accent:
          "border-transparent bg-primary !text-primary-foreground shadow-sm hover:bg-primary/90",
        // Pastille posée à cheval sur une bordure : elle reprend le fond
        // de la carte pour l'entailler proprement.
        label: "border-border bg-card text-card-foreground shadow-sm",
        // Pastille posée sur un visuel : doit rester lisible sur n'importe
        // quelle image, d'où l'inversion fond/texte.
        overlay: "border-transparent bg-foreground text-background shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
