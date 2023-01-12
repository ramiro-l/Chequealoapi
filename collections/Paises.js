const Paises = {
    slug: 'paises',
    admin: {
      defaultColumns: ['nombre', 'abs'],
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
        name: 'abs',
        type: 'text',
      },
    ],
    timestamps: false,
  }
  
  export default Paises;