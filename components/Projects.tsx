import Project from "./Project";

export default function Projects() {
  return (
    <div>
      <section className="rounded-xl border border-dashed border-front p-4">
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Project
            link="https://numerus.koga.one"
            imageLink="/images/numerus.jpg"
            title="NUMERUS"
            description="A unique calculator that gives interesting and sometimes useful
                information about the numbers you choose."
            tags={["NextJS", "TypeScript", "Vercel", "Tailwind", "HygraphCMS"]}
            frontColor="#EAB308"
            backColor="#1B1F21"
            neutralColor="#DFE0E8"
          ></Project>
          <Project
            link="https://blog.koga.one"
            imageLink="/images/blog.jpg"
            title="K1 Blog"
            description="My (now discontinued) design-focused personal blog"
            tags={["NextJS", "TypeScript", "Vercel", "Tailwind", "HygraphCMS"]}
            frontColor="#F43F5E"
            backColor="#0F1024"
            neutralColor="#F4F0F0"
          ></Project>
        </ul>
      </section>
    </div>
  );
}
