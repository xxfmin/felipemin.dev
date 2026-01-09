import Image from "next/image";
import { experiences } from "@/lib/data";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="space-y-6">
      <h2 className="text-xs font-mono tracking-wider text-muted font-medium uppercase">
        Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div
            key={`${experience.company}-${index}`}
            className="flex items-center"
          >
            <div className="text-xs uppercase text-secondary shrink-0 w-40">
              {experience.date}
            </div>
            <div className="flex items-center gap-2 flex-1">
              <span className="text-secondary">{experience.title} at </span>
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={20}
                height={20}
                className="rounded-sm h-5 w-5"
              />
              <Link href={experience.companyUrl} className="">
                {experience.company}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
