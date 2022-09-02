import express from "express";
import indexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));
const hbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoutes);

//estatic files
app.use(express.static(path.join(__dirname, "public")));

//2:49:53

export default app;

/**
 * Si alguien tiene problemas con handlebars, Aca la solucion:
En el import cambiamos por: import {create} from 'express-handlebars';
Y ahora creamos una constante con la confg:

const hbs = create({
    layoutsDir: path.join(app.get("views"), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs',
});

luego, le pasamos como parametro a app.engine la constante:

app.engine(
    ".hbs",
    hbs.engine,
);

Espero que les halla servido :)
 */
