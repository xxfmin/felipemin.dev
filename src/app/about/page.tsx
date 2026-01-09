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
        <div className="space-y-8 leading-relaxed text-secondary">
          <p>
            <span className="text-foreground">Hi, I&apos;m Felipe 👋 </span>{" "}
            I&apos;m drawn to internal tools, workflows, and smart automation.
            The kind of stuff that quietly powers real work behind the scenes.
            Currently, I'm a Computer Science student at the
            <span className="text-foreground">
              <Image
                src="/logos/ucf.jpeg"
                alt="UCF"
                width={20}
                height={20}
                className="inline rounded-sm h-5 w-5 align-middle mx-2"
              />
              University of Central Florida
            </span>
            .
          </p>

          <p>
            Outside of tech, I’m into traveling, trying new food spots, rock
            climbing, and poker. Whether I’m coding or not, I’m always
            exploring, experimenting, and trying to make things a little better.
          </p>
        </div>
      </div>
    </StaggeredContainer>
  );
}
