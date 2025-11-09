# To-Do List App

Esta es una aplicación de lista de tareas desarrollada con React y TypeScript + vite. Permite agregar, marcar como completadas y eliminar tareas, y guarda la información en localStorage para que no se pierda al recargar la pagina.

## Características implementadas

### Parte 1
🍪 Persistencia con localStorage: Las tareas se guardan en el navegador y se cargan automáticamente al abrir la aplicación.
🍪 Separación de componentes: La aplicación se dividió en dos componentes principales:
  - TaskInput: encargado de agregar nuevas tareas.
  - TaskList: encargado de mostrar, marcar y eliminar tareas.

### Parte 2
- Custom Hook useLocalStorage: Se creó un hook personalizado que combina useState y useEffect para manejar la persistencia de tareas de forma sencilla. Este hook devuelve el valor actual y una función para actualizarlo, y automáticamente sincroniza los cambios con localStorage.
- Mejora visual con Material-UI y animaciones: Se utilizó Material-UI para estilizar la aplicación con tarjetas y botones, y se agregaron animaciones usando Framer Motion para que las tareas aparezcan y desaparezcan suavemente.

## Uso
1. Clonar el repositorio:
   bash git clone https://github.com/CamilaGrahl/To-Do-List.git
   
2. Instalar dependencias:
npm install ...(vite, react, typeScript, gh-pages, Material-UI, Framer Motion)

3. Ejecutar en modo desarrollo:
npm run dev

4. Construir para producción:
npm run build

5 El despliegue se realiza automáticamente en GitHub Pages a través del script:
npm run deploy

##Tecnologías
- React
- vite
- TypeScript
- Material-UI
- Framer Motion
- localStorage

🎧 Repositorio en GitHub: https://github.com/CamilaGrahl/To-Do-List
🍨 Publicado en: https://camilagrahl.github.io/To-Do-List/

😸 Autor: Camila Grahl
