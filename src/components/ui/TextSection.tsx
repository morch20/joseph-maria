"use client";

import CountUp from "react-countup";
import { cn } from "@/lib/utils/functions";
/* eslint-disable react/require-default-props */

type TextSectionProps = {
    title: number;
    text: string;
    text2?: string;
    className?: string;
    titleClassName?: string;
    textClassName?: string;
};

export default function TextSection({
    title,
    text,
    text2 = "",
    className = "",
    titleClassName = "",
    textClassName = "",
}: TextSectionProps) {
    return (
        <div
            className={cn(
                "!mt-0 grid grid-cols-[1fr,1fr] gap-2 lg:grid-cols-[1fr,2fr] 2xl:gap-4",
                className
            )}
        >
            <h2 className={cn("text-4xl font-medium", titleClassName)}>
                <CountUp duration={3} delay={1} end={title} />
            </h2>
            <div className="text-start text-lg text-muted-foreground lg:text-base">
                <p className={textClassName}>{text}</p>
                {text2 && <p className={textClassName}>{text2}</p>}
            </div>
        </div>
    );
}
