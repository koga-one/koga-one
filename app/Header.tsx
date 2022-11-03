export default function Header() {
  return (
    <header className="mx-2 mt-2 lg:mx-4 lg:mt-4">
      <div className="flex items-center gap-2 lg:gap-4">
        <p className="text-xl font-black text-front">K1</p>
        <div className="flex flex-grow flex-wrap items-center justify-end gap-1 overflow-hidden rounded-lg bg-front p-1">
          <a href="https://andrekoga.com" target="blank">
            <p className="whitespace-nowrap rounded bg-back px-2 italic text-front underline">
              my portfolio
            </p>
          </a>
          <a href="https://www.linkedin.com/in/andrehkoga/" target="blank">
            <p className="whitespace-nowrap rounded bg-back px-2 italic text-front underline">
              my linkedin
            </p>
          </a>
        </div>
      </div>
    </header>
  );
}
