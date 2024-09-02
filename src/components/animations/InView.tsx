"use client";

/* eslint-disable react/require-default-props */
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function InView({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className={className}
        >
            {children}
        </div>
    );
}
