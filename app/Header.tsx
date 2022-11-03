export default function Header() {
  return (
    <header className="mx-2 mt-2 lg:mx-4 lg:mt-4">
      <div className="flex items-stretch gap-2 lg:gap-4">
        <p className="text-lg font-black text-front">K1</p>
        <div className="flex flex-grow items-center gap-1 overflow-hidden rounded-lg bg-front p-1">
          {/* <p className="whitespace-nowrap rounded bg-back px-2 font-semibold italic">
            sleeping...
          </p>
          <p className="whitespace-nowrap rounded bg-back px-2 font-semibold italic text-color">
            latest project just released!
          </p> */}
        </div>
      </div>
    </header>
  );
}
