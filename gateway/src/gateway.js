import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
app.set('port', 3000)
app.use(express.json())


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, '../../frontend')))


app.use('/users', createProxyMiddleware({ target: 'http://localhost:4010', changeOrigin: true }))
app.use('/movies', createProxyMiddleware({ target: 'http://localhost:4020', changeOrigin: true }))
app.use('/login', createProxyMiddleware({ target: 'http://localhost:4030', changeOrigin: true }))


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/index.html'))
})

app.listen(app.get('port'), () => console.log(`Gateway listening on: http://localhost:${app.get('port')}`))
