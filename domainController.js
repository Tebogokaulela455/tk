
exports.registerDomain = (req, res) => {
    const { domain, email } = req.body;
    res.json({ message: `Domain ${domain} registered for ${email}` });
};

exports.transferDomain = (req, res) => {
    const { domain, epp } = req.body;
    res.json({ message: `Domain ${domain} transfer initiated with code ${epp}` });
};
