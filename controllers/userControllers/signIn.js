<<<<<<< HEAD
const jwt = require('jsonwebtoken')


function signInController(req, res){

  
    const { username, password } = req.body
    if (username=== user){
        return res.status(401).end()
    }
    const token = jwt.sign({ username }, process.env.SECRET, {
        algorithm: 'HS256',
        expiresIn: 3000
      })

    res.status(201).json()

=======
function signInController(req, res){
    res.status(201).json()


>>>>>>> 31bd0d00e265ce3a9a7ecbe3611fec98527f71ee
}

module.exports = signInController