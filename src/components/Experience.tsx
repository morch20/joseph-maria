import { TimeLine, TimeLineElement } from "./ui/TimeLine";
import InView from "./animations/InView";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Experience() {
    return (
        <section>
            <InView>
                <p className="text-muted-foreground 2xl:text-lg">
                    WHAT I HAVE WORK SO FAR
                </p>
                <h2>Work Experience</h2>
            </InView>

            <div className="mt-20 flex flex-col">
                <TimeLine>
                    <TimeLineElement>
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Software Engineer</CardTitle>
                                <CardDescription>SAP SE</CardDescription>
                            </CardHeader>
                        </Card>
                    </TimeLineElement>
                    <TimeLineElement>
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Software Engineer 2</CardTitle>
                                <CardDescription>SAP SE 2</CardDescription>
                            </CardHeader>
                        </Card>
                    </TimeLineElement>
                </TimeLine>
            </div>
        </section>
    );
}
