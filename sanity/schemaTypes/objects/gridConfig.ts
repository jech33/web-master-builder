import { defineField } from 'sanity';

export const gridConfig = [
  defineField({
    name: 'mobileSpan',
    type: 'string',
    title: 'Mobile Width',
    initialValue: 'col-span-12',
    options: {
      list: [
        { title: 'Full (12/12)', value: 'col-span-12' },
        { title: 'Half (6/12)', value: 'col-span-6' },
      ],
    },
    group: 'layout',
  }),
  defineField({
    name: 'tabletSpan',
    type: 'string',
    title: 'Tablet Width',
    initialValue: 'sm:col-span-12',
    options: {
      list: [
        { title: 'Full (12/12)', value: 'md:col-span-12' },
        { title: 'Half (6/12)', value: 'md:col-span-6' },
        { title: 'One Third (4/12)', value: 'md:col-span-4' },
      ],
    },
    group: 'layout',
  }),
  defineField({
    name: 'desktopSpan',
    type: 'string',
    title: 'Desktop Width',
    initialValue: 'lg:col-span-12',
    options: {
      list: [
        { title: 'Full (12/12)', value: 'lg:col-span-12' },
        { title: 'Half (6/12)', value: 'lg:col-span-6' },
        { title: 'One Third (4/12)', value: 'lg:col-span-4' },
        { title: 'One Fourth (3/12)', value: 'lg:col-span-3' },
      ],
    },
    group: 'layout',
  }),
];
