const Posts = {
  slug: 'entrevistas',
  admin: {
    defaultColumns: ['titulo', 'autor','empresa', 'categoria', 'tags', 'status'],
    useAsTitle: 'titulo',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titulo',
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
      name: 'categoria',
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
      name: 'resumen',
      type: 'text'
    },
    {
      name: 'contenido',
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