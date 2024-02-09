const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { getAllUser, getUserById, createUser, updateUser, deleteUserById } = require('../service/user.service');
const route = express.Router();
route.get('/ping', async (req, res) => {
    try {
        const data = await getAllUser();
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 400);
    }
})

route.get('/ping/:_id', async (req, res) => {
    try {
        const data = await getUserById(req.params._id);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 400);
    }
})

route.post('/registration', async (req, res) => {
    try {
        const data = await createUser(req.body)
        buildResponse(res, data, 200)
    } catch (error) {
        buildResponse(res, error.message, 404)
    }
})


route.put('/ping/:_id', async (req, res) => {
    try {
        const data = await updateUser(req.params._id, req.body);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 400);
    }
})

route.delete('/ping/:_id', async (req, res) => {
    try {
        const data = await deleteUserById(req.params._id);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 400);
    }
})

module.exports = route;