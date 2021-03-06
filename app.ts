import {
  dirname,
  join,
  createError,
  opine,
  json,
  urlencoded,
  serveStatic,
  Response,
  Request,
  NextFunction,
  renderFileToString,
} from "./deps.ts"
import indexRouter from "./routes/index.ts"
import moviesRouter from "./routes/movies.ts"
import peopleRouter from "./routes/people.ts"

const __dirname = dirname(import.meta.url)

const app = opine()

// View engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "html");
// app.engine("ejs", renderFileToString);
app.engine('.html', renderFileToString)

// Handle different incoming body types
app.use(json())
app.use(urlencoded())

// Serve our static assets
app.use(serveStatic(join(__dirname, "public")))

// Mount our routers
app.use("/", indexRouter)
app.use("/movies", moviesRouter)
app.use("/people", peopleRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// Error handler
// app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
//   // Set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {}

//   // Render the error page
//   res.setStatus(err.status || 500)
//   res.render("error")
// });

export default app
// https://dev.to/craigmorten/opine-tutorial-part-2-creating-a-website-in-deno-37o3
