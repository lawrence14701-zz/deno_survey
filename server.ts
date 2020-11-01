import {
  serve,
  Server,
  ServerRequest,
} from "https://deno.land/std@0.76.0/http/server.ts";

const s: Server = serve({ port: 8000 });

console.log("Started at http://localhost:8000");

for await (const req: ServerRequest of s) {
  if (req.url === "/") {
    req.respond({ body: "hello world" });
  } else if (req.url === "/about") {
    req.respond({ body: "about world" });
  }
}
