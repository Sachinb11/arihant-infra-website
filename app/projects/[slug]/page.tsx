import type { Metadata } from "next";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import ProjectDetailClient from "./ProjectDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — ${project.status === "ongoing" ? "Ongoing" : "Completed"} Project`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Arihant Infra`,
      description: project.shortDescription,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Arihant Infra`,
      description: project.shortDescription,
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectDetailClient project={project as any} />;
}
