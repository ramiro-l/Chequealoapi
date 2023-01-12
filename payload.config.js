import { buildConfig } from 'payload/config';
import Categorias from './collections/Categorias';
import Paises from './collections/Paises';
import Entrevistas from './collections/Entrevistas';
import Usuarios from './collections/Usuarios';
import Herramientas from './collections/Herramientas';
import Media from './collections/Media';


export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  admin: {
    user: Usuarios.slug,
  },
  collections: [
    Entrevistas,
    Herramientas,
    Categorias,
    Paises,
    Media,
    Usuarios,
  ],
});
