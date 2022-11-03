import Image from "next/image";

export default function Project({
  link,
  imageLink,
  title,
  description,
  tags,
  frontColor,
  backColor,
  neutralColor,
}: {
  link: string;
  imageLink: string;
  title: string;
  description: string;
  tags: string[];
  frontColor: string;
  backColor: string;
  neutralColor: string;
}) {
  return (
    <li
      className="overflow-hidden rounded-lg"
      style={{ backgroundColor: backColor, color: neutralColor }}
    >
      <a href={link} target="blank">
        <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              className="object-cover"
              src={imageLink}
              fill={true}
              sizes="(max-width: 768px) 100vw,
              50vw"
              alt="Project thumbnail"
            />
          </div>
          <div className="flex flex-col gap-4 px-4 pb-4 md:py-4 md:pb-4">
            <p
              className="rounded-lg text-xl font-light italic underline"
              style={{ color: frontColor }}
            >
              {title}
            </p>
            <div className="flex-grow">
              <p className="text-lg">{description}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {tags &&
                tags.sort().map((tag, idx) => {
                  return (
                    <li
                      key={idx}
                      className="font-semix-blend-color-dodge rounded border px-2 py-1"
                      style={{ borderColor: frontColor, color: frontColor }}
                    >
                      {tag}
                    </li>
                  );
                })}
            </ul>
            <a href={link} target="blank">
              <p className="italic underline">{link}</p>
            </a>
          </div>
        </div>
      </a>
    </li>
  );
}
