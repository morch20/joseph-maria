import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import TextSection from "@/components/ui/TextSection";
import Photo from "@/components/Photo";
import Experience from "@/components/Experience";

export default function Home() {
    return (
        <>
            <section className="flex min-h-[85vh] w-full flex-col items-center justify-between lg:flex-row-reverse lg:items-stretch">
                {/* <div className="relative h-fit w-fit">
                    <Image src="/me.png" alt="me" width={150} height={150} />
                    <div className="absolute right-0 top-0 z-[1] h-full w-full bg-background/20" />
                </div> */}

                {/* <div className="h-32 w-full"> */}
                <Photo />
                {/* </div> */}

                <div className="flex h-auto flex-col justify-around space-y-6 text-center md:w-3/5 lg:text-start">
                    <div className="space-y-6 2xl:space-y-12">
                        <div>
                            <p className="text-muted-foreground 2xl:text-lg">
                                Software Engineer
                            </p>
                            <h1 className="duration-1000 animate-in fade-in-0 slide-in-from-top-20">
                                Hello I&apos;m
                                <br />
                                <span className="text-primary">
                                    Joseph Maria
                                </span>
                            </h1>
                        </div>
                        <div className="max-w-lg">
                            <p className="2xl:text-lg">
                                I excel at crafting elegant digital experiences
                                and I am proficient in various programming
                                languages and technologies
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0">
                            <Button
                                variant="outline"
                                className="mx-auto flex items-center gap-x-2 border-2 border-primary text-primary lg:mx-0 2xl:text-lg"
                            >
                                DOWNLOAD CV <Download size={20} />
                            </Button>
                            <div className="flex items-center justify-around gap-x-6 text-primary lg:ml-6">
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="rounded-full border-2 border-primary"
                                >
                                    <a
                                        href="https://github.com/morch20"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Github size={20} />
                                    </a>
                                </Button>
                                <Button
                                    size="icon"
                                    className="rounded-full border-2 border-primary"
                                    variant="outline"
                                >
                                    <a
                                        href="https://www.linkedin.com/in/joseph-maria"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-full space-y-6 lg:mx-0 lg:flex lg:items-start lg:justify-between lg:gap-x-6">
                        <TextSection
                            title={2}
                            text="Years of"
                            text2="experience"
                        />
                        <TextSection
                            title={5}
                            text="Projects"
                            text2="completed"
                        />
                        <TextSection
                            title={10}
                            text="Technologies"
                            text2="mastered"
                        />
                        <TextSection title={500} text="Code" text2="commits" />
                    </div>
                </div>
            </section>

            <Experience />

            <section className="h-screen w-full border">
                <h1>Homepage</h1>
                <p>This is the homepage</p>
            </section>
        </>
    );
}
