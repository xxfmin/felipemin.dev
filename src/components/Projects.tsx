import { projects } from "@/lib/data";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="space-y-6">
      <h2 className="section-title">Projects</h2>

      <div className="flex flex-col space-y-4">
        {projects.map((project) => (
          <div key={project.slug} className="flex flex-row group">
            <div className="text-muted mr-1 cursor-pointer">↳</div>

            <span className="text-secondary leading-relaxed">
              <Link
                href={`/projects/${project.slug}`}
                className="text-foreground group-hover:underline transition-all"
              >
                {project.title}
              </Link>
              : {project.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
