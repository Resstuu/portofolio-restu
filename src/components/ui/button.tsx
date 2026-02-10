import * as React from "react"
import { type ClassValue } from "clsx"
import { cn } from "../../lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-lg border text-sm font-semibold transition-all focus-visible:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-slate-900 border-transparent hover:bg-primary-hover shadow-[0_0_15px_rgba(56,189,248,0.3)] focus:ring-primary": variant === "default",
                        "border-slate-300 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800": variant === "outline",
                        "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border-transparent": variant === "ghost",
                        "text-primary underline-offset-4 hover:underline border-transparent": variant === "link",
                        "h-10 px-4 py-2": size === "default",
                        "h-9 rounded-md px-3": size === "sm",
                        "h-11 rounded-md px-8": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
