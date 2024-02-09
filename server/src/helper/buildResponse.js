function buildResponse(res, message, code) {
    res.status(code).send(message)
};

module.exports = { buildResponse };