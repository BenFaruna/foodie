function requestDetails(req, res, next) {
    const start = Date.now();
    next();
    console.log(`${req.baseUrl}${req.url}\t${Date.now() - start} ms`);
}

module.exports = {
    requestDetails,
}
