
exports.createWebHosting = (req, res) => {
    const { domain, plan } = req.body;
    res.json({ message: `Web hosting created for ${domain} with plan ${plan}` });
};

exports.createEmailHosting = (req, res) => {
    const { domain, email } = req.body;
    res.json({ message: `Email hosting setup for ${email} on ${domain}` });
};
