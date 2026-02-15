import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blocks/blockContentType';
import { heroType } from './blocks/heroType';
import { pageBuilderType } from './blocks/pageBuilderType';
import { authorType } from './documents/authorType';
import { categoryType } from './documents/categoryType';
import { pageType } from './documents/pageType';
import { postType } from './documents/postType';
import { richTextType } from './objects/richTextType';
import { sectionType } from './objects/sectionType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    sectionType,
    heroType,
    pageType,
    pageBuilderType,
    richTextType,
  ],
};
