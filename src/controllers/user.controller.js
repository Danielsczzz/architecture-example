const users = []

export const getUsers = (req, res) => {
  res.json(users)
}

export const postUser = (req, res) => {
  const body = req.body
  users.push({username: body.input})
  res.status(201).json({message: "user saved correctly"})
}
