import { buildConfig } from 'payload/config';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';
import Herramientas from './collections/Herramientas';


export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  admin: {
    user: Users.slug,
  },
  collections: [
    Posts,
    Herramientas,
    Categories,
    Tags,
    Users,
  ],
});
