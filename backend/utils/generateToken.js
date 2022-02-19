import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '5d',
  })
}

export { generateToken }

// advantage : i) expires after certain interval
//            ii) all the information are encrypted

// disadvantage : i) the token is not completely safe. if someone gets the token from
// local storage then they can save it in their system and use our account for doing
// something inappropriate
