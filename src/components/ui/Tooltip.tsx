import React from "react";
import { cn } from "@/lib/utils/functions";

export type TooltipProps = {
    children: React.ReactNode;
    className?: string;
    arrow?: boolean;
    position: "top" | "bottom" | "left" | "right";
} & ({ arrow?: false } | { arrow: true; arrowClassName?: string });

export function Tooltip(props: TooltipProps) {
    const { children, className, arrow, position } = props;
    let arrowClass = "";
    if (arrow) {
        const { arrowClassName } = props;
        arrowClass = arrowClassName || "";
    }

    return (
        <span
            className={cn(
                {
                    "absolute z-10 hidden h-fit w-fit rounded-md bg-muted px-4 py-2 shadow group-hover:block group-hover:animate-in group-hover:fade-in":
                        true,
                    "left-16 top-1/2 -translate-y-1/2": position === "right",
                    "right-16 top-1/2 -translate-y-1/2": position === "left",
                    "-top-14 left-1/2 -translate-x-1/2": position === "top",
                    "-bottom-14 left-1/2 -translate-x-1/2":
                        position === "bottom",
                },
                className
            )}
        >
            {children}
            {arrow && (
                <>
                    {position === "right" && (
                        <span
                            className={cn(
                                "absolute -left-1 top-1/2 size-2 -translate-y-1/2 rotate-45 bg-muted",
                                arrowClass
                            )}
                        />
                    )}
                    {position === "left" && (
                        <span
                            className={cn(
                                "absolute -right-1 top-1/2 size-2 -translate-y-1/2 rotate-45 bg-muted",
                                arrowClass
                            )}
                        />
                    )}

                    {position === "top" && (
                        <span
                            className={cn(
                                "absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-muted",
                                arrowClass
                            )}
                        />
                    )}

                    {position === "bottom" && (
                        <span
                            className={cn(
                                "absolute -top-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-muted",
                                arrowClass
                            )}
                        />
                    )}
                </>
            )}
        </span>
    );
}

interface TooltipTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    // eslint-disable-next-line react/require-default-props
    className?: string;
    children: React.ReactNode;
}

export function TooltipTrigger(props: TooltipTriggerProps) {
    const { className, children, ...rest } = props;
    return (
        <div {...rest} className={cn("group relative", className)}>
            {children}
        </div>
    );
}
