
## Descripción

Curso NodeJS de Fazt más despliegue en Render.


## Instalación

### 1. Clonar repositorio

```sh
git clone https://github.com/ejsdev/curso-nodejs-fazt
```

### 2. Moverse al directorio de la app.

```sh
cd curso-nodejs-fazt
```

### 3. Instalación de dependencias:

```sh
npm install
```

## Ejecutar proyecto

```sh
npm run dev
```

## Deployment 

Proyecto desplegado en Render. 
### Configuración del package.json
Añadir la siguiente linea de código al package.json:
```
"start": "node src/index.js"
```
### Configuración en render

**Build command:**
```
$ npm install
```
**Start Command:**
```
$ npm run start
```

# Estructura del proyecto
```
root
├── src
│   ├── public
│   │   ├── css
│   │   │   └── main.css
│   │   └── img
│   │       ├── ejsdev.png
│   │       └── logo_v1.gif
│   ├── routes
│   │   └── index.js
│   ├── views
│   │   ├── partials
│   │   │   ├── footer.ejs
│   │   │   ├── head.ejs
│   │   │   └── navigation.ejs
│   │   ├── about.ejs
│   │   ├── contact.ejs
│   │   └── index.ejs
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```


# Links

*  [Video tutorial.](https://www.youtube.com/watch?v=OVESuyVoPkI)	
*  [Repositorio original del proyecto.](https://github.com/FaztWeb/first-node-express-app)	
