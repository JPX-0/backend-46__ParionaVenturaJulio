'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const Products = use('App/Models/Product');

/*[API]*/   Route.group((product = "/product", /* message = "/message", user = "/user" */) => {
/*[API]*/     // PRODUCTS
/*[API]*/     Route.get("/", "ProductController.read")        .prefix(`${product}s`); // ROUTE >> /api/products/
/*[API]*/     Route.get("/:id", "ProductController.read")     .prefix(product);       // ROUTE >> /api/product/:id
/*[API]*/     Route.post("/", "ProductController.create")     .prefix(product);       // ROUTE >> /api/product/
/*[API]*/     Route.put("/:id", "ProductController.update")   .prefix(product);       // ROUTE >> /api/product/:id
/*[API]*/     Route.delete("/:id", "ProductController.delete").prefix(product);       // ROUTE >> /api/product/:id
/*[API]*/   }).prefix('/api');

/*[AUTH]*/  Route.group(() => {
/*[AUTH]*/    Route.post("/login", "AuthController.login");       // ROUTE >> /auth/login/
/*[AUTH]*/    Route.post("/register", "AuthController.register"); // ROUTE >> /auth/register/
/*[AUTH]*/  }).prefix('/auth');

/*[VIEW]*/  // LOGIN | REGISTER
/*[VIEW]*/  Route.get("/", "WebsiteController.renderSesions").middleware('guest'); // ROUTE >> /
/*[VIEW]*/  
/*[VIEW]*/  Route.group(() => { 
/*[VIEW]*/    // HOME
/*[VIEW]*/    Route.get("/", "WebsiteController.renderHome"); // ROUTE >> /website/
/*[VIEW]*/    // INFO
/*[VIEW]*/    Route.get("/info", "WebsiteController.renderInfo"); // ROUTE >> /website/info
/*[VIEW]*/  }).prefix('/website'); // No logré la autenticación, por eso cualquier usuario puede ingresar a las siguientes páginas.