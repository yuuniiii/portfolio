import { ProjectRow } from "./components/projectrow";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-h1 font-semibold">Hi! I'm Yuni.</h1>

      <p className="mt-6 text-[var(--body)] text-neutral-600">
        Learning about human-computer interaction through projects at FlashGrub and Columbia.
      </p>

      <section className="mt-20 space-y-8">
        <ProjectRow
          title="FlashGrub App"
          description="Creating prototypes to implement subscription models and refine app flows."
          imageSrc="/images/fgprototype.png"
          href="/projects/figma"
          meta="Figma · Ongoing"
        />

        <ProjectRow
          title="Furniture Flow App"
          description="Prototype for furniture and resale delivery app."
          imageSrc="/images/duolingo.png"
          href="/projects/duolingo"
          meta="Figma · Fall 2025"
        />

        <ProjectRow
          title="Coffee Shop Ordering Platform"
          description="Online ordering platform for the campus coffee shop, The Green Bean."
          imageSrc="/images/onboarding.png"
          href="/projects/onboarding"
          meta="Figma · Fall 2024"
        />
      </section>
    </main>
  );
}