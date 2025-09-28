import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  title: "Projects",
  description: "Selected work by Leonel Felezario",
};

export default function ProjectsPage() {
  const projects = portfolioData.projects || [];

  return (
    <section className="container mx-auto px-4 md:px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Projects</h1>
      <p className="text-gray-600 mb-10">Selected builds and experiments. Source links included where available.</p>

      {projects.length === 0 ? (
        <p>No projects yet. Check back soon.</p>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.id} className="panel overflow-hidden">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={160}
                  className="h-40 w-full object-cover bg-gray-200"
                  loading="lazy"
                  priority={false}
                />
              ) : (
                <div className="h-40 bg-gray-200" aria-hidden />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold tracking-tight mb-2">{p.title}</h2>
                <p className="text-gray-700 mb-3">{p.description}</p>
                <div className="text-sm text-gray-500 mb-4 flex flex-wrap gap-2">
                  {p.technologies?.map((t: string) => (
                    <span key={t} className="inline-block px-2 py-1 bg-white border border-gray-200 rounded">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {p.githubUrl && (
                    <Link href={p.githubUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">
                      Code →
                    </Link>
                  )}
                  {p.liveUrl && (
                    <Link href={p.liveUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">
                      Live →
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
