const bcrypt = require('bcrypt');

module.exports = {
    register: {

    },

    login: {

    },

    getUser: {

    },

    logout(req, res) {
        req.session.destroy();
        res.sendStatus(200);
    }
}