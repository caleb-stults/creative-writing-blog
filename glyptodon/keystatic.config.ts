import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'caleb-stults',
      name: 'creative-writing-blog',
    },
  branch: 'main',
  },
  collections: {
    stories: collection({
      label: 'Stories',
      path: 'glyptodon/src/content/stories/*',
      slugField: 'title',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        publicationDate: fields.date({ label: 'Publication Date' }),
        body: fields.document({ label: 'Body', formatting: true }),
      },
    }),
    poetry: collection({
      label: 'Poetry',
      path: 'glyptodon/src/content/poetry/*',
      slugField: 'title',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        publicationDate: fields.date({ label: 'Publication Date' }),
        body: fields.document({ label: 'Body', formatting: true }),
      },
    }),
    misc: collection({
      label: 'Miscellaneous',
      path: 'glyptodon/src/content/misc/*',
      slugField: 'title',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        publicationDate: fields.date({ label: 'Publication Date' }),
        body: fields.document({ label: 'Body', formatting: true }),
      },
    }),
  },
});