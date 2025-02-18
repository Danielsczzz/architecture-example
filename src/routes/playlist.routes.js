import { Router } from "express";
import { getPlaylists, postPlaylist } from "../controllers/playlist.controller.js";

const playlistRoutes = Router()

playlistRoutes.get('/', getPlaylists)
playlistRoutes.post('/', postPlaylist)

export default playlistRoutes