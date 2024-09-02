"use client";

/* eslint-disable react/require-default-props */
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
    VerticalTimelineProps,
    VerticalTimelineElementProps,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface TimeLineProps extends VerticalTimelineProps {
    children: React.ReactNode;
}

export function TimeLine(props: TimeLineProps) {
    const { children, ...rest } = props;
    return <VerticalTimeline {...rest}>{children}</VerticalTimeline>;
}

interface TimeLineElementProps extends VerticalTimelineElementProps {
    children: React.ReactNode;
    visible?: boolean;
    className?: string;
}
export function TimeLineElement(props: TimeLineElementProps) {
    const { children, visible = true, ...rest } = props;
    return (
        <VerticalTimelineElement
            visible={visible}
            contentStyle={{
                background: "#00000000",
                padding: "0px",
                boxShadow: "0 0 0 0",
            }}
            {...rest}
        >
            {children}
        </VerticalTimelineElement>
    );
}
