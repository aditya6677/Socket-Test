const getProfile = (req,res) => {
    res.status(200).json({
        firstName : 'Aditya',
        lastName : 'Kumar'
    });
    return;
}

module.exports = {
    getProfile
}