const registerUser = async(req, res) => {
    try {
        console.log('Date', Date.now())
        res.status(200).json({ message: 'Test Successfully!'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    registerUser
}