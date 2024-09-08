"use client";

import React, { useEffect, useRef } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils/functions";

type HamburgerContextProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerContext = React.createContext<HamburgerContextProps | null>(
    null
);

function useHamburger() {
    const context = React.useContext(HamburgerContext);

    if (!context) {
        throw new Error("useHamburger must be used within a <Hamburger />");
    }

    return context;
}

export function Hamburger({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <HamburgerContext.Provider value={{ open, setOpen }}>
            <div className="hamburger md:hidden">{children}</div>
        </HamburgerContext.Provider>
    );
}

export function HamburgerButton() {
    const { setOpen, open } = useHamburger();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.checked = open;
        }
    }, [open]);
    return (
        <label htmlFor="hamburger" className="cursor-pointer">
            <input
                ref={inputRef}
                id="hamburger"
                type="checkbox"
                onChange={() => setOpen((prev) => !prev)}
            />
            <svg viewBox="0 0 32 32" className="h-10">
                <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                />
                <path className="line" d="M7 16 27 16" />
            </svg>
        </label>
    );
}

export interface HamburgerContentProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
}

export function HamburgerContent(props: HamburgerContentProps) {
    const { children, className } = props;
    const { open, setOpen } = useHamburger();

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.3 },
                    }}
                    exit={{ x: 300, opacity: 0, transition: { duration: 0.3 } }}
                    key="hamburgerContent"
                    {...props}
                    className={cn(
                        "fixed left-0 top-[64px] z-10 h-screen w-full bg-muted/70",
                        className
                    )}
                    onClick={() => setOpen(false)}
                    aria-hidden
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export interface HamburgerLinkProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}
export function HamburgerLink(props: HamburgerLinkProps) {
    const { children, className = "", ...rest } = props;
    const { setOpen } = useHamburger();

    return (
        <div
            aria-hidden
            {...rest}
            className={cn(className)}
            onClick={() => setOpen(false)}
        >
            {children}
        </div>
    );
}
