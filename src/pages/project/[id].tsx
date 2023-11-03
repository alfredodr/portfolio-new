import ProjectDetails from "@/components/project/ProjectDetails";
import { projects } from "@/lib/projects";
import type { InferGetStaticPropsType } from "next";

function project({ project }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="bg-[#191A1C]">
      <ProjectDetails data={project} />
    </section>
  );
}

export default project;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
      {
        params: { id: "4" },
      },
      {
        params: { id: "5" },
      },
      {
        params: { id: "6" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context;
  const data = projects.find(
    (project: { id: number }) => project.id === parseInt(params.id)
  );

  return {
    props: {
      project: data,
    },
  };
}
