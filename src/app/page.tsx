import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <>
            <Hero />

            <Experience />

            <section className="h-screen w-full border">
                <h1>Homepage</h1>
                <p>This is the homepage</p>
            </section>
        </>
    );
}
