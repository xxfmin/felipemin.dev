import React from "react";
import { StaggeredContainer } from "@/components/ui/StaggeredContainer";
import Image from "next/image";
import Link from "next/link";
import { Interests } from "@/components/Interests";
import { Traveling } from "@/components/Traveling";
import { Music } from "@/components/Music";

export default function About() {
  return (
    <StaggeredContainer className="space-y-8">
      <Link
        href="/"
        className="text-sm text-secondary hover:text-foreground transition-colors duration-150"
      >
        <span className="mr-1">←</span>Back
      </Link>

      <div className="space-y-16 sm:space-y-20">
        <div className="space-y-5 leading-relaxed text-secondary">
          <p>
            <span className="text-foreground mr-1">
              Hi, I&apos;m Felipe 👋{" "}
            </span>
            I got into this path by tinkering with things like installing
            Minecraft mods and jailbreaking my phone during my childhood. I
            loved pushing past defaults and exploring what could be improved.
          </p>
          <p>
            Currently, I&apos;m a Computer Science student at the{" "}
            <span className="text-foreground group inline">
              <Image
                src="/logos/ucf.jpeg"
                alt="UCF"
                width={20}
                height={20}
                className="inline rounded-sm h-5 w-5 mx-2 cursor-pointer"
                style={{ verticalAlign: "middle" }}
              />
              <Link
                href="https://www.cecs.ucf.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:underline transition-all"
              >
                University of Central Florida
              </Link>
            </span>
            . I&apos;m drawn to internal tools, workflows, and smart automation.
            The kind of stuff that quietly powers real work behind the scenes.
          </p>
        </div>

        <Interests />

        <Music />

        <Traveling />
      </div>
    </StaggeredContainer>
  );
}
