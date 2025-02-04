import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-900"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "bg-black",
        "items-center",
        "justify-center",
        "border-none", 
        "m-8",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: 'default'
  }
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

// const classes = buttonStyles({sizes: 'icon'})
export function Button({variant, size, className, ...props}: ButtonProps) {
  return <button {...props}  className={twMerge(buttonStyles({variant, size}),
   className)}/>
}
