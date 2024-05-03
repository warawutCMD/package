const expressLib = require('express');
const express = expressLib();
const router = expressLib.Router();
const port = process.env.PORT || 80;

module.exports = {
    express,
    router,
    port
};
