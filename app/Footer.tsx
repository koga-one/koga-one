import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-screen flex-col gap-2 bg-front text-back">
      <section className="flex-grow">
        <ul>
          <li>
            <Link href="https://instagram.com/real.koga">
              hey
              <i className="fa fa-linkedin"></i>
            </Link>
          </li>
        </ul>
      </section>
      <section className="overflow-hidden">
        <p className="-translate-x-[10%] whitespace-nowrap text-[10rem] font-black uppercase leading-[58%]">
          K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1K1
        </p>
      </section>
      <section className="border-t border-dashed border-back p-4">
        <p className="text-center text-sm font-light italic">
          ...appreciating the journey since 2002
        </p>
      </section>
    </footer>
  );
}
