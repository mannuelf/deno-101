import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const controller = new AbortController();
const router = new Router();
const { signal } = controller;

router.get('/', (ctx, next) => {
  ctx.response.body = 'Hello World!';
  next();
});

await app.use(router.routes());
await app.use(router.allowedMethods());
await app.listen({ port: 8000, signal });
console.log('Server started on port 8000');
