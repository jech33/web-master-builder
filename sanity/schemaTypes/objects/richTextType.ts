import { DocumentWordIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { gridConfig } from './gridConfig';

export const richTextType = defineType({
  name: 'richText',
  title: 'Rich Text',
  type: 'document',
  icon: DocumentWordIcon,
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'layout', title: 'Grid Layout' }, // Para cuando vive dentro de una Section
  ],
  fields: [
    defineField({
      name: 'content',
      type: 'blockContent',
      title: 'Rich Text Content',
      group: 'content',
    }),
    ...gridConfig, // Spread the grid configuration fields into the rich text type
  ],
});
