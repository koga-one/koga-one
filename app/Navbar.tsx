export default function Navbar() {
  return (
    <div className="pointer-events-none sticky bottom-4 mb-4 flex justify-center">
      <nav className="pointer-events-auto flex gap-2 rounded-xl border border-dashed border-front p-2">
        <button className="rounded-lg border-2 bg-front p-4 font-medium">
          <p className="flex items-center gap-4 text-back">
            <span className="font-medium">
              K1. <span className="text-color">about</span>
            </span>
            <i className="fa fa-bars"></i>
          </p>
        </button>
        <ul className="flex items-center rounded-lg border border-front">
          <li className="p-4">
            <p>item 1</p>
          </li>
          <li className="p-4">
            <p>item 2</p>
          </li>
          <li className="p-4">
            <p>item 3</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
