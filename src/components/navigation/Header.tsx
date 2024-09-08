import React from "react";
import Link from "next/link";
import {
    Hamburger,
    HamburgerButton,
    HamburgerContent,
    HamburgerLink,
} from "../ui/Hamburger";
import { Button } from "../ui/Button";
import { links } from "@/lib/utils/constants";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-background/90 py-2 backdrop-blur sm:py-4">
            <div className="container flex w-full items-center justify-between">
                <Link href="/">
                    <h1 className="text-4xl font-medium">
                        Joe{" "}
                        <div className="inline-block size-2 rounded-full bg-primary" />
                    </h1>
                </Link>
                <nav>
                    <ul className="hidden w-full items-center justify-between gap-x-14 font-medium md:flex">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                        <li>
                            <Button className="border-primary">
                                Contact me!
                            </Button>
                        </li>
                    </ul>
                </nav>
                <Hamburger>
                    <HamburgerButton />
                    <HamburgerContent className="-bottom-16">
                        <ul className="flex w-full flex-col items-center gap-y-10 bg-card py-12 text-center font-medium">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <HamburgerLink>
                                        <Link href={link.href}>
                                            {link.name}
                                        </Link>
                                    </HamburgerLink>
                                </li>
                            ))}
                            <li>
                                <Button className="border-primary">
                                    Contact me!
                                </Button>
                            </li>
                        </ul>
                    </HamburgerContent>
                </Hamburger>
            </div>
        </header>
    );
}
