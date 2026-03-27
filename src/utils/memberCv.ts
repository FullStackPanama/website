import type { CollectionEntry } from "astro:content";
import type { ICvData } from "cv-astro";

export function hasMemberCv(member: CollectionEntry<"members">) {
  return Boolean(member.data.cv);
}

export function getMemberCv(member: CollectionEntry<"members">): ICvData | null {
  const cv = member.data.cv;

  if (!cv) {
    return null;
  }

  return {
    info: {
      name: member.data.nombre,
      title: member.data.empresa?.cargo ?? member.data.profesion ?? "Miembro de Full Stack Panamá",
      email: cv.email,
      phone: cv.phone,
      website: member.data.redesSociales?.website,
      linkedin: member.data.redesSociales?.linkedIn,
      github: member.data.redesSociales?.github,
      twitter: member.data.redesSociales?.twitter,
      address: cv.address,
      addressUrl: cv.addressUrl,
      timezone: cv.timezone,
      summary: cv.summary ?? member.data.biografia,
      image: member.data.imagen.src,
    },
    experience: cv.experience,
    volunteering: cv.volunteering,
    education: cv.education,
    certifications: cv.certifications,
    projects: cv.projects,
    skills: cv.skills ?? member.data.tecnologias?.map((tech) => ({
      name: tech,
      proficiency: 4,
      category: "Tecnologías",
    })),
    config: cv.config,
  };
}
