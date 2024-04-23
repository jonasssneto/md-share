import express from 'express'
import { prisma } from './services/prisma'

const app = express()
const port = 3000 || process.env.PORT

app.get('/', async (req, res) => {
  const x = await prisma.markdown.create({
    data: {
      name: 'test',
      path: 'test',
    }
  })

  console.log(x)
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})