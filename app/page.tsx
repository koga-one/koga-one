import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="mx-2 my-4 flex flex-col gap-4">
      <section className="pb-4">
        <p className="text-5xl font-thin text-front">
          I make stuff{" "}
          <span id="catchword" className="font-bold">
            that looks good.
          </span>
        </p>
      </section>
      <section>
        <p className="rounded-xl bg-front px-4 py-2 text-2xl font-medium italic text-back">
          Check it out:
        </p>
      </section>
      <Projects />
    </div>
  );
}
