function adminAuthorization(req, res, next) {
    const session = req.session;
    if (session) {
        if ('passport' in session && session.passport.user.username === 'admin') {
            return next();
        } else {
            return res.status(403).json({ 'Error': 'No access to this route'});
        }
    }
    return res.status(401).json({ 'Error': 'No access to this route' });
}


function userAuthorization(req, res, next) {
    const username = req.params.username;
    const session = req.session;
    if (session) {
        if ('passport' in session && (session.passport.user.username === username || session.passport.user.username === 'admin')) {
            return next();
        } else {
            return res.status(403).json({ 'Error': 'No access to this route'});
        }
    }
    return res.status(401).json({ 'Error': 'No access to this route' });
}

module.exports = {
    userAuthorization,
    adminAuthorization,
}
