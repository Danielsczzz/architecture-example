import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

// Gateway configuration
const app = express()
app.set('port', 3000)
app.use(express.json())

// Redirection to services
app.use('/users', createProxyMiddleware({target: 'http://localhost:4010', changeOrigin: true}))
//app.use('/movies', createProxyMiddleware({target: 'http://localhost:4020', changeOrigin: true}))
app.use('/login', createProxyMiddleware({target: 'http://localhost:4030', changeOrigin: true}))

app.listen(app.get('port'), () => console.log(`gateway listening on: http://localhost:${app.get('port')}`))