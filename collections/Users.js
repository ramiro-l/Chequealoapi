const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => false,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    }
  ],
};

export default Users;