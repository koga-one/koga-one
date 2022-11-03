import Project from "./Project";

export default function Projects() {
  return (
    <div>
      <section className="rounded-xl border border-dashed border-front p-4">
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Project
            link="https://andrekoga.com"
            imageLink="/images/resume.jpg"
            title="Portfolio"
            description="My resume / portfolio containing all of my experience, projects, awards, etc."
            tags={["NextJS", "TypeScript", "Vercel", "Tailwind", "HygraphCMS"]}
            frontColor="#FF0055"
            backColor="#D6D3D1"
            neutralColor="#000000"
          ></Project>
          <Project
            link="https://blog.koga.one"
            imageLink="/images/blog.jpg"
            title="K1 blog"
            description="My (now discontinued) design-focused personal blog"
            tags={["NextJS", "TypeScript", "Vercel", "Tailwind", "HygraphCMS"]}
            frontColor="#F43F5E"
            backColor="#0F1024"
            neutralColor="#F4F0F0"
          ></Project>
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
            link="https://www.instagram.com/color.koga/"
            imageLink="/images/ig.jpg"
            title="Digital art"
            description="
            Digital pieces of art made throughout the years using different softwares!"
            tags={["Clip Studio Paint", "Krita", "Procreate"]}
            frontColor="#EC1FAD"
            backColor="#FAFAFA"
            neutralColor="#262626"
          ></Project>
          <Project
            link="https://kogaone.itch.io"
            imageLink="/images/games.jpg"
            title="Indie games"
            description="Games that I've done during my spare time - sometimes with a team during game jams!"
            tags={["C#", "Unity"]}
            frontColor="#F43F5E"
            backColor="#0F1024"
            neutralColor="#F4F0F0"
          ></Project>
          <Project
            link="https://noic.com.br/"
            imageLink="/images/noic.jpg"
            title="NOIC"
            description="My first job! NOIC is a Brazilian NGO focused on delivering Scientific Olympiad material of high quality for free"
            tags={["WordPress", "Bootstrap", "JavaScript"]}
            frontColor="#0168CC"
            backColor="#F7F7F7"
            neutralColor="#000000"
          ></Project>
          <Project
            link="https://duplatech.com/"
            imageLink="/images/dupla.jpg"
            title="DUPLA"
            description="DUPLA is a startup that connects women to tech-related companies (the current website wasn't done by me)"
            tags={["WIX", "Wordpress", "Tailwind", "JavaScript"]}
            frontColor="#FFFFFF"
            backColor="#8A6DEB"
            neutralColor="#FFFFFF"
          ></Project>
        </ul>
      </section>
    </div>
  );
}
