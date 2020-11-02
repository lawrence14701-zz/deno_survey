import {
  Application,
  Router,
  RouterContext,
} from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();

router.get("/", (ctx: RouterContext) => {
  ctx.response.body = "helo world";
});

app.use(router.routes());

app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on  ${secure ? `https://` : `http://`}${
      hostname || "localhost"
    }:${port}`
  );
});

await app.listen({ port: 8000 });
