# React Routing (Enrutamiento) - Proyecto Vite + React

## Introducción al Enrutamiento en React

El **enrutamiento** (routing) en aplicaciones de página única (SPA) permite navegar entre diferentes \"páginas\" o vistas sin recargar toda la página. En React, la librería más popular es **[react-router-dom](https://reactrouter.com/)**, que maneja URLs, transiciones y navegación del lado del cliente.

### ¿Por qué usar routing?
- Experiencia de usuario fluida (navegación rápida).
- Soporte para botones Atrás/Avanzar del navegador.
- URLs compartibles y bookmarkeables.
- Integración con servidores (SSR en frameworks como Next.js).

## Componentes Principales de react-router-dom

- **`BrowserRouter`**: Proveedor de contexto de routing (usa HTML5 History API).
- **`Routes` y `Route`**: Define las rutas (path → component).
- **`Link` y `NavLink`**: Enlaces para navegación declarativa.
- **Hooks**:
  - `useNavigate()`: Navegación programática.
  - `useParams()`: Parámetros de URL (e.g., /user/:id).
  - `useLocation()`, `useSearchParams()`.
- **`Outlet`**: Para rutas anidadas.
- **`Navigate`**: Redirecciones.

## Instalación

```bash
npm install react-router-dom
```

## Configuración Básica

1. Envuelve tu app en `BrowserRouter`.
2. Define `<Routes>` con `<Route path=\"/\" element={<Component />} />`.

### Ejemplo en este Proyecto

En `src/App.jsx`:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Usuarios from './components/Usuarios';
import Contacto from './components/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path=\"/\" element={<Inicio />} />
        <Route path=\"/usuarios\" element={<Usuarios />} />
        <Route path=\"/contacto\" element={<Contacto />} />
        {/* 404 */}
        <Route path=\"*\" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Navbar.jsx** (navegación):

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to=\"/\">Inicio</Link>
      <Link to=\"/usuarios\">Usuarios</Link>
      <Link to=\"/contacto\">Contacto</Link>
    </nav>
  );
}
```

### Rutas en este Proyecto
| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `Inicio` | Página principal. |
| `/usuarios` | `Usuarios` | Lista de usuarios. |
| `/contacto` | `Contacto` | Formulario de contacto. |

## Rutas Avanzadas

### Parámetros Dinámicos
```jsx
<Route path=\"/user/:id\" element={<User />} />
```
En componente: `const { id } = useParams();`

### Rutas Anidadas
```jsx
<Route path=\"/admin\" element={<AdminLayout />}>
  <Route path=\"dashboard\" element={<Dashboard />} />
</Route>
```

### Navegación Programática
```jsx
const navigate = useNavigate();
<button onClick={() => navigate('/usuarios')}>Ir a Usuarios</button>
```

### Redirecciones y Protegidas
```jsx
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuth = false; // lógica auth
  return isAuth ? children : <Navigate to=\"/login\" />;
}
```

## Ejecutar el Proyecto

```bash
cd Routing
npm install  # incluye react-router-dom
npm run dev  # http://localhost:5173
```

Navega: `/`, `/usuarios`, `/contacto`.

## Mejores Prácticas
- Usa `NavLink` para active class: `<NavLink to=\"/\" className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink>`.
- Lazy loading: `const LazyComponent = lazy(() => import('./Component'))`.
- Maneja 404 con `*`.
- Absolute imports, exact paths.

## Recursos
- [Documentación oficial](https://reactrouter.com/en/main)
- [Tutorial español](https://www.youtube.com/results?search_query=react+router+dom+espa%C3%B1ol)

¡Proyecto listo para enrutamiento en React!

## Configuración Vite + React (Original)
[Contenido original del template Vite...]

