import React from "react";
import { Hamburger, HamburgerButton, HamburgerContent } from "../ui/Hamburger";
import { Button } from "../ui/Button";

export default function Header() {
    return (
        <header className="container sticky top-0 z-10 flex items-center justify-between bg-background py-2 sm:py-4 md:py-6">
            <h1 className="text-4xl font-medium">
                Joe{" "}
                <div className="inline-block size-2 rounded-full bg-primary" />
            </h1>
            <nav>
                <ul className="hidden w-full items-center justify-between gap-x-14 font-medium md:flex">
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>
                        <Button className="border-primary">Contact me!</Button>
                    </li>
                </ul>
            </nav>
            <Hamburger>
                <HamburgerButton />
                <HamburgerContent className="-bottom-16">
                    <ul className="flex w-full flex-col items-center gap-y-10 bg-card py-12 text-center font-medium">
                        <li>Home</li>
                        <li>Experience</li>
                        <li>Projects</li>
                        <li>
                            <Button className="border-primary">
                                Contact me!
                            </Button>
                        </li>
                    </ul>
                </HamburgerContent>
            </Hamburger>
        </header>
    );
}
