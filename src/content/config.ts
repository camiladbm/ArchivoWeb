import { defineCollection, z } from 'astro:content';

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    fechaPublicacion: z.date(),
    autor: z.string(),
    universidad: z.string().optional(),
    imagenPortada: z.string().optional(),
    resumen: z.string(),
    tags: z.array(z.string()),
    tiempoLectura: z.number().int().positive().optional(), // minutos
  }),
});

const podcast = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    numeroEpisodio: z.number().int().positive(),
    descripcion: z.string(),
    duracion: z.string().optional(),         // e.g. "48:00"
    invitado: z.string().optional(),
    entrevistador: z.string().optional(),
    linkYoutube: z.string().url().optional(),
    linkSpotify: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articulos, podcast };
