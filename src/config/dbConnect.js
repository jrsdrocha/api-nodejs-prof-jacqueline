import mongoose from "mongoose";

mongoose.connect("mongodb+srv://login-e-senha@cluster0.2iofz.mongodb.net/Alura-node");

let db = mongoose.connection;

export default db;