# Inicializaci贸n:

_Ejecutar este comando para poder comenzar a utilizar el c贸digo sin problemas._

```
npm i
```


# Comandos para ejecutar la aplicaci贸n:

_Al ejecutar los comandos de la siguiente manera se estar谩 usando el modo FORK que seria por defecto._

* [DEVELOPMENT] - usando adonis.
```
adonis serve --dev
```


## **馃毃 Tener en cuenta 馃毃 馃摙** (Estas configuraciones evitar谩n ciertos errores durante el testeo)
  
_- Modificar el archivo .env de la siguiente manera:_
  - Ubicarse en "./.env.example"
  - Cambiar el nombre a ".env"
  - Modificar los datos sensibles y guardar.

_- Para crear una cuenta "admin" debe colocar admin. antes de su correo, por ejemplo:_
  ```
    admin.el_correo@mail.com
  ```

## **Problemas detectados en el Framework 馃摗** 
  * _No podia realizar los m茅todos [POST, PUT, DELTE] debido a una protecci贸n que viene por defecto en AdonisJs_
    - Ubicaci贸n: "/config/shield.js" & linea: 134
      <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/adonis_csrf.PNG?alt=media&token=8bf116d9-9273-4ff1-8539-878ef0cfde29" alt="csrf"/></p>
    - Soluci贸n: Cambiar de [true] a [false].
  
  * _No podia crear nuevos datos debido a un error de c贸digo que viene al instalar AdonisJs_
    - Ubicaci贸n: "/node_modules/@adonisjs/lucid/src/Lucid/Model/index.js" & linea: 356
      <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/adonis_create.PNG?alt=media&token=3e311dd1-ca84-43b9-b64a-7d26dad65fd1" alt="csrf"/></p>
    - Soluci贸n: separar el [await].


# Entrega de desaf铆o:
_La respuesta a las consignas la encontrar谩 en la siguiente ruta:_
> Ubicaci贸n: "./desafio.md"