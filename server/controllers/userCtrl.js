const Users = require("../models/userModel");

const userCtrl = {
    register: async (req, res) => {
        try {
            if (!req.body) {
                return res.status(400).json({ msg: "Request body is missing." });
            }

            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ msg: "Please fill in all fields." });
            }

            if (!validateEmail(email)) {
                return res.status(400).json({ msg: "Invalid email." });
            }

            const user = await Users.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: "The email already exists." });
            }

            res.json({ msg: "Register Success!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
};

module.exports = userCtrl;