// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection, getCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { getCountryCodes } from '@/utils/countries';

const productsCollection = defineCollection({
  type: 'content',
    schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    main: z.object({
      id: z.number(),
      content: z.string(),
      imgCard: image(),
      imgMain: image(),
      imgAlt: z.string(),
    }),
    tabs: z.array(
      z.object({
        id: z.string(),
        dataTab: z.string(),
        title: z.string(),
      })
    ),
    longDescription: z.object({
      title: z.string(),
      subTitle: z.string(),
      btnTitle: z.string(),
      btnURL: z.string(),
    }),
    descriptionList: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsLeft: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsRight: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ).optional(),
    tableData: z.array(
      z.object({
        feature: z.array(z.string()),
        description: z.array(z.array(z.string())),
      })
    ).optional(),
    blueprints: z.object({
      first: image().optional(),
      second: image().optional(),
    }),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    author: z.string().optional(),
    pubDate: z.date(),
    cardImage: image(),
    cardImageAlt: z.string(),
    readTime: z.number(),
    tags: z.array(z.string()).optional(),
    category: z.array(z.string()).length(1),
  }).refine(async (data) => {
    if (data.author) {
      // Verificar que el autor existe en membersCollection
      const members = await getCollection('members');
      const authorExists = members.some(member => member.slug === data.author);
      if (!authorExists) {
        throw new Error(`Author ${data.author} not found in members collection`);
      }
    }
    return true;
  }, {
    message: "Author must exist in members collection"
  }),
});

const insightsCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
  title: z.string(),
  description: z.string(),
  // contents: z.array(z.string()),
  cardImage: image(),
  cardImageAlt: z.string(),
  }),
});

const cvOptionalLinkSchema = z.object({
  name: z.string(),
  url: z.string().optional(),
});

const cvTaskSchema = z.object({
  description: z.string(),
  output: z.string().optional(),
});

const cvProjectSchema: z.ZodTypeAny = z.object({
  name: z.string(),
  url: z.string().optional(),
  description: z.string(),
  output: z.string().optional(),
  technologies: z.array(cvOptionalLinkSchema),
});

const cvOrganizationSchema = z.object({
  name: z.string(),
  city: z.string().optional(),
  country: z.string(),
  url: z.string().optional(),
  remarks: z.string().optional(),
});

const cvPositionSchema = z.object({
  title: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: z.string(),
  tasks: z.array(cvTaskSchema),
  projects: z.array(cvProjectSchema).optional(),
});

const cvExperienceSchema = z.object({
  company: cvOrganizationSchema,
  current: z.boolean().optional(),
  positions: z.array(cvPositionSchema),
});

const cvVolunteerPositionSchema = z.object({
  title: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
});

const cvVolunteerSchema = z.object({
  organization: cvOrganizationSchema,
  description: z.string().optional(),
  positions: z.array(cvVolunteerPositionSchema),
  tasks: z.array(z.string()),
  isActiveMember: z.boolean(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

const cvEducationSchema = z.object({
  institution: cvOrganizationSchema,
  degree: z.string(),
  major: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  inProgress: z.boolean().optional(),
  projects: z.array(cvProjectSchema).optional(),
  achievements: z.array(z.string()).optional(),
});

const cvCertificationSchema = z.object({
  authority: z.string(),
  name: z.string(),
  code: z.string().optional(),
  description: z.string().optional(),
  license: z.string().optional(),
  issueDate: z.string(),
  expirationDate: z.string().optional(),
  url: z.string().optional(),
  image: z.string().optional(),
});

const cvSkillSchema = cvOptionalLinkSchema.extend({
  proficiency: z.number().min(1).max(5),
  category: z.string().optional(),
});

// Red Profesional de Programadores
const membersCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
    // Información Personal
    nombre: z.string(),
    imagen: image().refine((img) => img.width >= 100 && img.height >= 100, {
      message: 'La imagen debe ser al menos 100x100px'
    }),
    idiomas: z.array(z.string()).optional(),
    pais: z.enum(['', ...getCountryCodes()]).optional(),
    ciudad: z.string().optional(),

    // Información de Contacto
    redesSociales: z.object({
      github: z.string().optional(),
      linkedIn: z.string().optional(),
      twitter: z.string().optional(),
      website: z.string().optional(),
    }).optional(),

    // Información Profesional
    profesion: z.string().optional(),
    biografia: z.string(),
    tecnologias: z.array(z.string()).min(1).optional(),
    disponibleParaTrabajar: z.boolean().default(false),
    disponibleParaMentoria: z.boolean().default(false),
    disponibleParaProyectos: z.boolean().default(false),

    // Información de la Empresa
    empresa: z.object({
      nombre: z.string(),
      cargo: z.string().optional(),
      departamento: z.string().optional(),
      ciudad: z.string().optional(),
      pais: z.enum(['', ...getCountryCodes()]).optional(),
      url: z.string().optional(),
      logo: image().optional().refine(
        (img) => {
          if (img) {
            return img.width >= 100 && img.height >= 100;
          }
          return true;
        }, {
        message: 'La imagen debe ser al menos 100x100px'
      }),
    }).optional(),

    // Información de Membresía
    fechaIngreso: z.date().default(new Date()),
    rol: z.enum(['miembro', 'administrador']).default('miembro'),
    activo: z.boolean().default(true),

    // Información opcional para CV
    cv: z.object({
      email: z.string().email(),
      phone: z.string(),
      address: z.string(),
      timezone: z.string().optional(),
      addressUrl: z.string().optional(),
      summary: z.string().optional(),
      experience: z.array(cvExperienceSchema).optional(),
      volunteering: z.array(cvVolunteerSchema).optional(),
      education: z.array(cvEducationSchema).optional(),
      certifications: z.array(cvCertificationSchema).optional(),
      projects: z.array(cvProjectSchema).optional(),
      skills: z.array(cvSkillSchema).optional(),
      config: z.object({
        categoryOrder: z.array(z.string()).optional(),
      }).optional(),
    }).optional(),
  }),
});

export const collections = {
  members: membersCollection,
  docs: defineCollection({ schema: docsSchema() }),
  'products': productsCollection,
  'blog': blogCollection,
  'insights': insightsCollection,
};
