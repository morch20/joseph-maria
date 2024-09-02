"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
    return (
        <div className="flex h-full w-full flex-col items-center lg:w-2/5">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0, duration: 0.4, ease: "easeIn" },
                }}
                className="relative flex w-full max-w-[250px] items-center justify-center lg:max-w-md 2xl:max-w-lg"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    // className="h-[250px] w-[250px] mix-blend-lighten xl:h-[400px] xl:w-[400px]"
                    className="absolute h-5/6 w-5/6 mix-blend-lighten"
                >
                    <Image
                        priority
                        fill
                        quality={100}
                        src="/me.png"
                        alt="me"
                        className="object-contain"
                    />
                </motion.div>

                <motion.svg
                    // className="h-[250px] w-[250px] xl:h-[450px] xl:w-[450px]"
                    className="h-auto w-full"
                    viewBox="0 0 450 450"
                    fill="transparent"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="228"
                        cy="228"
                        r="220"
                        stroke="hsl(var(--primary))"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "16 25 92 72",
                                "4 250 22 22",
                            ],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}
