import app from './index'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

const port = Number(process.env.PORT) || 3000

// Serve static files from public directory
app.use("/css/*", serveStatic({ root: "./public" }));
app.use("/js/*", serveStatic({ root: "./public" }));
app.use("/images/*", serveStatic({ root: "./public" }));


serve({ fetch: app.fetch, port })

console.log(`Server running on http://0.0.0.0:${port}`)