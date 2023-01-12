const Posts = {
  slug: 'posts',
  admin: {
    defaultColumns: ['tiulo', 'autor','empresa', 'category', 'tags', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'tiulo',
      type: 'text',
    },
    {
      name: 'autor',
      type: 'text',
    },
    {
      name: 'empresa',
      type: 'text',
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories'
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'content',
      type: 'richText'
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'borrador',
          label: 'Borrador',
        },
        {
          value: 'publicada',
          label: 'Publicada',
        },
      ],
      defaultValue: 'borrador',
      admin: {
        position: 'sidebar',
      }
    }
  ],
}

export default Posts;