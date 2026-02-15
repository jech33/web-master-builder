import { defineField, defineType } from 'sanity';

export const sectionType = defineType({
  name: 'section',
  type: 'object',
  title: 'Smart Section',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'layout', title: 'Layout & Spacing' },
    { name: 'visuals', title: 'Background & Style' },
  ],
  fields: [
    // --- CONTENT ---
    defineField({
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Reference Name',
      description: 'Internal name to identify this section in the studio',
      group: 'content',
    }),

    defineField({
      name: 'blocks',
      type: 'array',
      title: 'Grid Blocks',
      description: 'Add and arrange blocks inside this section grid',
      of: [
        { type: 'hero' },
        // { type: 'infoCard' }, <-- Future blocks go here
      ],
      group: 'content',
    }),

    // --- LAYOUT ---
    defineField({
      name: 'maxWidth',
      type: 'string',
      title: 'Container Max Width',
      group: 'layout',
      initialValue: 'container mx-auto',
      options: {
        list: [
          { title: 'Container', value: 'container mx-auto' },
          { title: 'Full Width (Edge to Edge)', value: 'max-w-full' },
        ],
      },
    }),
    defineField({
      name: 'columnGap',
      type: 'string',
      title: 'Column Gap',
      group: 'layout',
      initialValue: 'gap-8',
      options: {
        list: [
          { title: 'None', value: 'gap-0' },
          { title: 'Small', value: 'gap-4' },
          { title: 'Medium', value: 'gap-8' },
          { title: 'Large', value: 'gap-16' },
        ],
      },
    }),
    defineField({
      name: 'paddingY',
      type: 'string',
      title: 'Vertical Padding',
      initialValue: 'py-20',
      group: 'layout',
      options: {
        list: [
          { title: 'None', value: 'py-0' },
          { title: 'Small', value: 'py-10' },
          { title: 'Medium', value: 'py-20' },
          { title: 'Large', value: 'py-32' },
        ],
      },
    }),

    // --- VISUALS ---
    defineField({
      name: 'backgroundColor',
      type: 'color', // Ensure @sanity/color-input is installed
      title: 'Background Color',
      group: 'visuals',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      group: 'visuals',
      options: { hotspot: true },
    }),
  ],
});
