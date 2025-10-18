## 


### Instalación

#### 1 Clonar repositorio

```sh
git clone https://github.com/FaztWeb/first-node-express-app
```

#### 2 Moverse al directorio de la app.

```sh
cd first-node-express-app
```

#### 3 Instalación de dependencias:

```sh
npm install
```

# Ejecutar proyecto

```sh
npm run dev
```



## Deployment

Proyecto desplegado en Render. 

Añadir la siguiente linea de código al package.json:
```
"start": "node src/index.js"
```
# Estructura del proyecto
```
.
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
├── project-map.md
└── README.md
```


