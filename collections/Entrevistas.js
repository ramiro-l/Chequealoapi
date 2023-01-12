const Entrevistas = {
  slug: 'entrevistas',
  admin: {
    defaultColumns: ['titulo', 'autor','empresa', 'categoria', 'estadoEmpresa', 'estado', 'pais'],
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
      name: 'fotoPerfil',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'empresa',
      type: 'text',
    },
    {
      name: 'fechaPublicacion',
      type: 'date',
    },
    {
      name: 'categoria',
      type: 'relationship',
      relationTo: 'categorias'
    },
    {
      name: 'pais',
      type: 'relationship',
      relationTo: 'paises'
    },
    {
      name: 'estadoEmpresa',
      type: 'select',
      options: [
        {
          value: 'fallida',
          label: 'Fallida',
        },
        {
          value: 'exitosa',
          label: 'Exitosa',
        },
      ],
      defaultValue: 'exitosa',
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
      name: 'foto',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'estado',
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

export default Entrevistas;