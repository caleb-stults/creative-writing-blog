import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'caleb-stults',
      name: 'creative-writing-blog',
    },
  },
  collections: {
    stories: collection({
      label: 'Stories',
      path: 'glyptodon/src/content/stories/*',
      slugField: 'title',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        publicationDate: fields.date({ label: 'Publication Date' }),
        content: fields.document({ label: 'Content', formatting: true }),
      },
    }),
    poetry: collection({
      label: 'Poetry',
      path: 'glyptodon/src/content/poetry/*',
      slugField: 'title',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        publicationDate: fields.date({ label: 'Publication Date' }),
        content: fields.document({ label: 'Content', formatting: true }),
      },
    }),
    misc: collection({
      label: 'Miscellaneous',
      path: 'glyptodon/src/content/misc/*',
      slugField: 'title',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        publicationDate: fields.date({ label: 'Publication Date' }),
        content: fields.document({ label: 'Content', formatting: true }),
      },
    }),
  },
});