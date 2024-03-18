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
  se definen las variables de estado y las acciones que modifican el estado de la aplicación. Estos archivos están
  organizados de acuerdo a la lógica del negocio `(módulo/archivo)`.
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

    // Si se requiere dispatch para ejecutar las acciones que modifican el estado. 
    // Utilice el hook useAppDispatch para obtener el dispatch. 
    const dispatch = useAppDispatch();

    // Si se requiere, obtener el estado de la página con el hook useAppSelector.
    const variable = useAppSelector((state) => state.articulos.variable);

    // Acciones de la página
    const limpiarEntidadSeleccionada = () => {
        // TODO: Código del evento limpiar, si requiere modificación de estado usar dispatch(accion).
    }

    const eliminarEntidadSeleccionada = () => {
        // TODO: Código del evento eliminar, si requiere modificación de estado usar dispatch(accion)
    }

    const guardarEntidadSeleccionada = (articulo: ArticuloDto) => {
        // TODO: Código del evento guardar, si requiere modificación de estado usar dispatch(accion)
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

Una vez definido el contenido de la página, puede acceder a ella en la
ruta [http://localhost:3000/modulo/ejemplo](http://localhost:3000/modulo/ejemplo) ver los componentes definidos en el
contenedor
renderizados.

## Manejando el estado de la aplicación

Para manejar el estado de la aplicación se utiliza la librería [`redux`](https://react-redux.js.org/). La configuración
de los reductores de los slices combinados se encuentra en el archivo `Rootreducer.tsx` y el almacenamiento de estados
centralizado de la aplicación se encuentra en el archivo `Store.tsx`.

La estructura de manejo de estado está organizada mediante el uso
de [`slices`](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#writing-slices) organizados de acuerdo a
la lógica del negocio (modulo/[slice].tsx), donde cada slice define
una porción del estado de la aplicación, es decir, una abstracción de la definición de las
variables de estado y las acciones que modifican el estado de la aplicación. En este
ejemplo se define el slice `ejemplo` con la variable `variable` y la acción `setVariable` que modifica el estado de la
variable `variable`. Este patrón nos brinda una simplificación en la definición de
los [`reductores`](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#writing-reducers) y las
acciones que
modifican el estado de la aplicación.

Para definir un nuevo slice, se debe crear un archivo en la carpeta `/state/slices/[modulo]/` con el nombre del slice y
su respectiva
definición. Ejemplo:

```tsx
// state/slices/modulo/ejemploSlice.tsx

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Definición de la interfaz del estado
interface EstadoEjemplo {
  variable: string;
}

// Estado inicial
const estadoInicial: EstadoEjemplo = {
  variable: "", // Estado inicial de la variable
};

// Definición del slice
const ejemploSlice = createSlice({
  name: "ejemplo", // Nombre del slice
  estadoInicial, // Estado inicial del slice
  reducers: { // Definición de las acciones que modifican el estado del slice
    setVariable: (state, action: PayloadAction<string>) => {
      state.variable = action.payload; // Modificación del estado de la variable
    },
  },
});

// Exportación de las acciones del slice
export const {setVariable} = ejemploSlice.actions;

// Exportación del reductor del slice
export default ejemploSlice.reducer;

```

Una vez definido el slice, se deben agregar sus reductores al archivo `Rootreducer.tsx` para que sea combinado con los
demás slices y
pueda ser utilizado por el store principal.

```tsx
// state/slices/rootreducer.tsx

import {combineReducers} from "@reduxjs/toolkit";
import ejemploSlice from "./slices/modulo/ejemploSlice";

// Combinación de los reductores de los slices
const rootReducer = combineReducers({
    // ...otros slices
    ejemplo: ejemploSlice, // Reductor del slice ejemplo
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

```

Una vez definido el slice y agregado al archivo `rootreducer.tsx`, se puede utilizar el hook `useAppDispatch` para
obtener el dispatch que permite ejecutar las acciones que modifican el estado de la aplicación y el hook `useAppselector`
para obtener valores del estado de la aplicación, Ejemplo:

```tsx
// @pageComponents/modulo/movimientos/ejemplo/PaginaEjemplo.tsx

import {useAppDispatch, useAppSelector} from "@state/hooks";
import {setVariable} from "@state/slices/modulo/ejemploSlice";

const PaginaEjemplo = () => {

    // Obtener el dispatch para ejecutar las acciones que modifican el estado
    const dispatch = useAppDispatch();

    // Obtener el estado de la página
    const variable = useAppSelector((state) => state.ejemplo.variable);

    const limpiarEntidadSeleccionada = () => {
        // Utilizando reductor setVariable del slice ejemplo
        dispatch(setVariable(""));
    }

    const eventosPagina: EventosPaginaProps = {
        limpiar: limpiarEntidadSeleccionada,
    }

    return (
        <ContenedorPagina titulo={"Ejemplo"} eventos={eventosPagina}>
            <Col>
            </Col>
        </ContenedorPagina>
    );
};

export default PaginaEjemplo;
```

## Más referencias y documentación

Para aprender más sobre Next.js, puede consultar los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - learn about React features and API.
- [Redux Documentation](https://redux.js.org/introduction/getting-started) - learn about Redux features and API.
- [Formik Documentation](https://formik.org/docs/overview) - learn about Formik features and API.
- [Yup Documentation](https://yup-docs.vercel.app/) - learn about Yup features and API.

