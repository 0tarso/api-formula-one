import { createApp } from "./app"

const PORT = process.env.PORT ?? 3232

const app = createApp()

app.listen(PORT, () => { console.log(`🌐 Server running at http://localhost:${PORT}/`) })