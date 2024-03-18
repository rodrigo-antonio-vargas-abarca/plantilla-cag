------------------------
    Version List
------------------------

    Node   :- 20.1.0
    React  :- 18.2.0
    Next   :- 14.0.4

------------------------

Proyecto Base Next.js [Next.js](https://nextjs.org/) para CoopeAgri R.L inicializado
con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Cómo iniciar

### Instalación de dependencias

Primero, si es la primera vez que inicia el proyecto, instale las dependencias base ejecutando el siguiente comando en
la base del proyecto:

```bash
npm install
```

Las dependencias a instalar son las determinadas en el archivo `package.json` y una vez instaladas, se creará la
carpeta `node_modules` con las fuentes recopiladas de las dependencias.

Una vez instaladas las dependencias, puede iniciar el servidor de desarrollo ejecutando el siguiente comando en la base
del proyecto:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Opcionalmente, en el archivo `package.json` se encuentran los siguientes comandos que la mayoría de IDE permiten
ejecutar directamente desde integraciones gráficas o consolas integradas:

```json
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
}
```

### Inicialización de proyecto

Abra [http://localhost:3000](http://localhost:3000) con su navegador preferido para ver el resultado.

### Modificar el proyecto

Como ejemplo, puede modificar la página localizada en `src/components/pages/inicio/PaginaInicio.tsx` y guardarla. La
página se recargará automáticamente con los cambios.

## Estrucutra de proyecto

La estructura de proyecto es la siguiente:

- `/api`: Archivos requeridos para el consumo de las apis.
- `/app`: Rutas expuestas por la aplicación agrupadas por la lógica del negocio. Se utiliza
  la [`convención`](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) definida por next.js
  para generar las rutas automáticamente.
- `/components`: Archivos con componentes para aplicaciones, se encuentran estructurados por carpetas que representan su
  naturaleza de la siguiente forma:
- `/config`: Contiene archivos de configuración del proyecto.
- `/data`: Contiene archivos de datos que se utilizan en la aplicación.
- `/state`: Contiene los archivos para el manejo de estados de la aplicación, organizados de acuerdo a su naturaleza.
  Para el manejo de estados se utiliza la librería [`redux`](https://react-redux.js.org/).
- `/utils`: Contiene archivos de utilidades que se pueden reutilizar en toda la aplicación.
- `/validation`: Contiene los [`esquemas`](https://yup-docs.vercel.app/docs/typescript) de validación utilizados para
  los formularios [`Formik`](https://formik.org/docs/guides/validation). Se encuentra organizado por carpetas de acuerdo
  a la lógica del negocio.

### Organización `/api`

- `/clients`: Archivos que contienen la encapsulación de las apis del negocio, con sus llamadas base y configuraciones.
- `/model`: Archivos que contienen los tipos de datos que se utilizan en la aplicación.
- `/services`: Archivos que contienen la lógica de negocio al hacer los llamados a los distintos endpoints de las apis.

### Organización de `/components`

- `/common`: Componentes comunes que se pueden reutilizar en toda la aplicación.
- `/layout`: Componentes de diseño que se pueden reutilizar en toda la aplicación.
- `/pages`: Componentes de páginas que se utilizan de acuerdo a la estructura definida por módulos de la lógica del
  negocio. Incluyendo el contenedor principal de la página.

### Organización de `/state`

- `/hooks`: Contiene los [`hooks`](https://react-redux.js.org/api/hooks) personalizados para invocar las acciones que
  modifican la aplicación.
- `/providers`: Contiene los archivos de definición
  de [`contextos`](https://react-redux.js.org/using-react-redux/accessing-store#multiple-stores) de estados de la
  aplicación y su [`provider`](https://react-redux.js.org/api/provider) para permitir encapsular partes de la aplicación
  en ese contexto.
- `/slices`: Contiene los archivos de definición
  de [`slices`](https://react-redux.js.org/tutorials/typescript-quick-start#define-slice-state-and-action-types) donde
  se definen las variables de estado y las acciones que modifican el estado de la aplicación.
- `Rootreducer.tsx`: Contiene el archivo de configuración de los reductores de los
  slices [`combinados`](https://redux.js.org/api/combinereducers/) que será usado por el store principal.
- `Store.tsx`: Contiene el archivo
  de [`configuración`](https://react-redux.js.org/using-react-redux/usage-with-typescript) del almacenamiento de estados
  centralizado de la aplicación.

### Organización de `/data`

- `/constants`: Contiene archivos de definición de constantes que se utilizan en la aplicación.
- `/props`: Contiene los archivos de definición de propiedades de páginas y componentes que se utilizan en la
  aplicación.
- `/...`

## Creando una página

Para crear una nueva página, puede crear un nuevo directorio en el directorio `app/(pages)` ubicándola de acuerdo a la
lógica del negocio (módulo/submódulo) y dentro del mismo crear un archivo llamado `page.tsx`. Esto expondrá
automáticamente una ruta disponible por la aplicación que redirigirá a esa página. Ejemplo:

```
   /app/(pages)/modulo/(movimientos)/ejemplo/page.tsx
```

Ahora puede acceder a la página en [http://localhost:3000/modulo/ejemplo](http://localhost:3000/inicio). La página se
estará
vacía, ya que no se ha definido contenido. Para ello debemos definir el componente contenedor de la página, el cual debe
ser importado por el archivo `page.tsx`.

Nota: Recuerde que esta estructura de carpetas es
una [`convención`](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) de next.js.

```tsx
// app/(pages)/modulo/(movimientos)/inicio/page.tsx

"use client"
import PaginaEjemplo from "@pageComponents/modulo/movimientos/ejemplo/PaginaEjemplo";
import React from "react";

const Pagina = () => {
    return <PaginaEjemplo/>
};

export default Pagina;
```

En la ruta `@pageComponents/modulo/movimientos/ejemplo/PaginaEjemplo` se encuentra el componente contenedor de la página
que debemos crear.

Nota: La ruta `@pageComponents` es un [`alias`](https://nextjs.org/docs/advanced-features/module-path-aliases) que
apunta a la carpeta `./src/components/pages` de la aplicación y es definida en el archivo `tsconfig.json`. Y la
organización de este directorio de componentes está dada por la lógica del negocio y no por convenciones de Next.js.

```tsx
// @pageComponents/modulo/movimientos/ejemplo/PaginaEjemplo.tsx

// --- imports requeridos ---

const PaginaEjemplo = () => {

    // Si se requiere dispatch para ejecutar las acciones que modifican el estado
    const dispatch = useAppDispatch();

    // TODO: Obtener el estado de la página

    // Acciones de la página
    const limpiarEntidadSeleccionada = () => {
        // TODO: Código del evento limpiar
    }

    const eliminarEntidadSeleccionada = () => {
        // TODO: Código del evento eliminar
    }

    const guardarEntidadSeleccionada = (articulo: ArticuloDto) => {
        // TODO: Código del evento guardar
    };

    // Variable que define los eventos de la página, requeridos por el contenedor genérico
    const eventosPagina: EventosPaginaProps = {
        limpiar: limpiarEntidadSeleccionada,
        guardar: guardarEntidadSeleccionada,
        eliminar: eliminarEntidadSeleccionada
    }

    return (
        // Contenedor genérico de páginas que maneja el título y los eventos de la página
        <ContenedorPagina titulo={"Ejemplo"} eventos={eventosPagina}>
            <Col>
                // TODO: Contenido de la página
            </Col>
            // TODO: Otros componentes de la página
        </ContenedorPagina>
    );
};

export default PaginaEjemplo;
```

Nota: El componente `ContenedorPagina` es un componente genérico que maneja el título y los eventos de la página. Este
componente se encarga de asignar el título de la página, los breadcums y los eventos de la misma.

Una vez definido el contenido de la página, puede acceder a ella en la ruta [http://localhost:3000/modulo/ejemplo](http://localhost:3000/modulo/ejemplo) ver los componentes definidos en el contenedor
renderizados.

## Más referencias y documentación

Para aprender más sobre Next.js, puede consultar los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - learn about React features and API.
- [Redux Documentation](https://redux.js.org/introduction/getting-started) - learn about Redux features and API.
- [Formik Documentation](https://formik.org/docs/overview) - learn about Formik features and API.
- [Yup Documentation](https://yup-docs.vercel.app/) - learn about Yup features and API.

