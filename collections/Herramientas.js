const Herramientas = {
  slug: 'herramientas',
  admin: {
    defaultColumns: ['nombre', 'link'],
    useAsTitle: 'nombre',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'descripcion',
      type: 'text',
    },
    {
      name: 'categoria',
      type: 'relationship',
      relationTo: 'categorias'
    }
  ],
}

export default Herramientas;