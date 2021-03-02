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
} from "./deps.ts";
import indexRouter from "./routes/index.ts";
import moviesRouter from "./routes/movies.ts";
import peopleRouter from "./routes/people.ts";

const __dirname = dirname(import.meta.url)

const app = opine()

// https://dev.to/craigmorten/opine-tutorial-part-2-creating-a-website-in-deno-37o3
