import Image from "next/image";
import { TimeLine, TimeLineElement } from "./ui/TimeLine";
import InView from "./animations/InView";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

export default function Experience() {
    return (
        <section
            id="experience"
            className="min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)]"
        >
            <p className="text-muted-foreground 2xl:text-lg">
                WHAT I HAVE WORK SO FAR
            </p>
            <h2>Work Experience</h2>
            <div className="mt-20 flex flex-col">
                <TimeLine>
                    <TimeLineElement
                        icon={
                            <Image
                                src="/images/seguenteLogo.png"
                                alt="Segente"
                                width={50}
                                height={50}
                                className="h-1/2 w-1/2"
                            />
                        }
                        date="March 2024 - Present"
                        iconClassName="bg-secondary flex items-center justify-center"
                    >
                        <InView>
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-primary">
                                        Full-Stack Software Engineer
                                    </CardTitle>
                                    <CardDescription>Seguente</CardDescription>

                                    <CardContent>
                                        <ul className="list-inside list-disc space-y-4">
                                            <li>
                                                Leading development of a
                                                full-stack application for data
                                                collection and visualization,
                                                and management of data centers.
                                            </li>
                                            <li>
                                                Designing a responsive front-end
                                                interface using React, Next.js,
                                                TailwindCSS, Recharts, Framer
                                                Motion, and D3.js and creating
                                                scalable back-end microservices
                                                with Node.js, Express.js,
                                                Socket.io, Auth.js, and external
                                                caching with Redis.
                                            </li>
                                            <li>
                                                Implementing data collection
                                                with Telegraf, data streaming
                                                with Kafka & Socket.io, data
                                                storage with PostgreSQL &
                                                InfluxDB, and utilizing Docker
                                                for containerization, ensuring
                                                consistent
                                                development/production
                                                environments.
                                            </li>
                                            <li>
                                                Automating tests using Jest,
                                                Supertest, and Testing Library.
                                                Documentation and Agile with
                                                Jira & Confluence.
                                            </li>
                                        </ul>
                                    </CardContent>
                                </CardHeader>
                            </Card>
                        </InView>
                    </TimeLineElement>

                    <TimeLineElement
                        icon={
                            <Image
                                src="/images/oracleLogo.png"
                                alt="Oracle"
                                width={50}
                                height={50}
                                className="h-1/2 w-1/2"
                            />
                        }
                        date="May 2023 - Aug 2023"
                        iconClassName="bg-white flex items-center justify-center"
                    >
                        <InView direction="right">
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-primary">
                                        Software Engineer Intern
                                    </CardTitle>
                                    <CardDescription>Oracle</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-inside list-disc space-y-4">
                                        <li>
                                            Developed a web application that
                                            performs CRUD operations on dynamic
                                            business objects where users can
                                            import and manage them into custom
                                            libraries. Users can CRUD business
                                            objects on user-friendly tables with
                                            4000+ rows.
                                        </li>
                                        <li>
                                            Set up a cloud-based development
                                            environment and developed
                                            microservices and VMs to perform
                                            CRUD operations on Fusion, or on
                                            MySQL using, Docker, Node.js,
                                            Express.js, Knex.js, Objection.js.
                                        </li>
                                        <li>
                                            Developed dynamic UI on Visual
                                            Builder, documented on Confluence
                                            pages and Jira, and assisted scrum
                                            meetings.
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </InView>
                    </TimeLineElement>

                    <TimeLineElement
                        icon={
                            <Image
                                src="/images/rtcgroupLogo.png"
                                alt="RTC Group"
                                width={50}
                                height={50}
                                className="h-1/2 w-1/2"
                            />
                        }
                        date="Aug 2022 - May 2023"
                        iconClassName="bg-secondary flex items-center justify-center"
                    >
                        <InView>
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-primary">
                                        Web Developer Co-Op
                                    </CardTitle>
                                    <CardDescription>RTC Group</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-inside list-disc space-y-4">
                                        <li>
                                            Transitioned a desktop app into a
                                            web app using React, TailwindCSS,
                                            C#, .Net, .Net Core, WinForms,
                                            MySQL.
                                        </li>
                                        <li>
                                            Identified, tracked, and repaired
                                            bugs as well as maintained software
                                            in React/Electron applications.
                                        </li>
                                        <li>
                                            Implemented features to an eCommerce
                                            application using React and
                                            Material-UI, and wrote
                                            documentation.
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </InView>
                    </TimeLineElement>
                </TimeLine>
            </div>
        </section>
    );
}
