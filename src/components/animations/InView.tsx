"use client";

/* eslint-disable react/require-default-props */
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function InView({
    children,
    className = "",
    direction = "left",
}: {
    children: React.ReactNode;
    className?: string;
    direction?: "left" | "right";
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const directions = {
        left: "translateX(-100%)",
        right: "translateX(100%)",
    };

    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? "none" : directions[direction],
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className={className}
        >
            {children}
        </div>
    );
}
