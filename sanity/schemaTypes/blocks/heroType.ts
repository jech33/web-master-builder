import { defineField, defineType } from 'sanity';

import { gridConfig } from '../objects/gridConfig';

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero Block',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'design', title: 'Design & Media' },
    { name: 'layout', title: 'Grid Layout' }, // Para cuando vive dentro de una Section
  ],
  fields: [
    // --- CONTENT GROUP ---
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Main Heading',
      group: 'content',
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      title: 'Subheading',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'cta',
      type: 'object',
      title: 'Call to Action',
      group: 'content',
      fields: [
        { name: 'label', type: 'string', title: 'Button Label' },
        { name: 'link', type: 'string', title: 'Button Link' },
        {
          name: 'style',
          type: 'string',
          title: 'Button Style',
          options: { list: ['primary', 'outline'] },
        },
      ],
    }),

    // --- DESIGN GROUP ---
    defineField({
      name: 'bgType',
      type: 'string',
      title: 'Background Type',
      group: 'design',
      options: { list: ['image', 'video'] },
      initialValue: 'image',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Background Image',
      group: 'design',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.bgType !== 'image',
    }),
    defineField({
      name: 'videoUrl',
      type: 'url',
      title: 'Video URL (Direct link)',
      group: 'design',
      hidden: ({ parent }) => parent?.bgType !== 'video',
    }),
    defineField({
      name: 'heroHeight',
      type: 'string',
      title: 'Hero Height',
      group: 'design',
      options: { list: ['medium', 'large', 'full-screen'] },
      initialValue: 'large',
    }),

    // --- GRID LAYOUT GROUP ---
    ...gridConfig, // Esparcimos los campos de mobileSpan, tabletSpan, desktopSpan
  ],
});
