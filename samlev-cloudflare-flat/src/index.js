export default {
  async fetch(request, env, ctx) {
    // All requests that match files in ./samlev will be served directly as static assets.
    // This handler only runs for non-asset routes.
    return new Response("Not found", { status: 404 });
  }
};
