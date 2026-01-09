import React from "react";
import { StaggeredContainer } from "@/components/ui/StaggeredContainer";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <StaggeredContainer className="space-y-8">
      <Link href="/" className="text-sm">
        <span className="mr-1">←</span>Back
      </Link>

      <div className="space-y-16 sm:space-y-20">
        <div className="space-y-8">
          <p className="leading-relaxed text-secondary">
            I'm driven by curiosity and a love for creating thoughtful, useful
            things. I'm just as interested in why things work as how they do.
            I've pursued that across internships, academia, hackathons, and
            personal projects.
          </p>
          <Link href={"/about"} className="flex flex-row items-start gap-1">
            <Image
              src="/icons/yellow-folder.png"
              alt="about"
              width={24}
              height={24}
              className="rounded-sm h-6 w-6"
            />
            <span className="mt-1 text-sm">More about me</span>
            <span className="mt-0.5">→</span>
          </Link>
        </div>
      </div>
    </StaggeredContainer>
  );
}
