const express=require('express');
const cors = require('cors');
require('dotenv').config;
const mongoose= require( "mongoose");

const server=express();
server.use(cors());
server.use(express.json())
const PORT=3020
