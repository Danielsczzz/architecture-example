const playlists = []

export const getPlaylists = (req, res) => {
  res.json(playlists)
}

export const postPlaylist = (req, res) => {
  const body = req.body
  playlists.push({name: body.input})
  res.status(201).json({message: "playlist saved correctly"})
}