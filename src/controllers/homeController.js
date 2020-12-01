module.exports = {
    Index(req, res) {
        const response = res.json({ msg: "this is the default route" });
    }
}