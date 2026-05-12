require('dotenv').config()

const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())

const SECRET = process.env.SECRET

if (!SECRET) {
  throw new Error('SECRET não definida no .env')
}

// rota inicial
app.get('/', (req, res) => {
  res.send('API funcionando')
})

// rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body

  // validação fake
  if (email === 'admin@email.com' && senha === '12345') {
    const token = jwt.sign(
      { email },
      SECRET,
      { expiresIn: '1h' }
    )

    return res.json({ token })
  }

  return res.status(401).json({
    erro: 'Credenciais inválidas'
  })
})

// middleware para verificar token
function verificarToken(req, res, next) {

  // pega apenas o token do Bearer
  const token = req.headers['authorization']?.split(' ')[1]

  if (!token) {
    return res.status(403).json({
      erro: 'Token não fornecido'
    })
  }

  try {
    const decoded = jwt.verify(token, SECRET)

    req.user = decoded

    next()

  } catch (err) {

    return res.status(401).json({
      erro: 'Token inválido'
    })
  }
}

// rota protegida
app.get('/dashboard', verificarToken, (req, res) => {

  res.json({
    mensagem: 'Acesso permitido',
    user: req.user
  })

})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})