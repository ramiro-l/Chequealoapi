const Categorias = {
    slug: 'categorias',
    admin: {
      defaultColumns: ['nombre'],
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
        name: 'logo',
        type: 'upload',
        relationTo: 'media'
      },
    ],
    timestamps: false,
  }
  
  export default Categorias;