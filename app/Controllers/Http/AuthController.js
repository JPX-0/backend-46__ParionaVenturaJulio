'use strict'

const { validate } = use('Validator');
const User = use("App/Models/User")

const dataLocation = [
  { code: "(+51)", prefix: "pe", country: "Perú" },
  { code: "(+54)", prefix: "arg", country: "Argentina" },
  { code: "(+34)", prefix: "esp", country: "España" },
  { code: "(+57)", prefix: "co", country: "Colombia" }
];

class AuthController {
  async login({ auth, request }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)
    return response.redirect('/website');
  }
  async register({ request: { body }, response }){
    const { firstname, lastname, location, phone, avatar, username, password } = body
    if(!firstname || !lastname || !avatar || location == "-" || !phone || isNaN(phone)) 
      throw new Error({ message: "Unregistered user" });
    const phoneParse = `${dataLocation.find(e => location.split(" ")[0].toLowerCase() == e.prefix).code} ${phone}`;
    const locationParse = dataLocation.find(e => location.split(" ")[0].toLowerCase() == e.prefix).country;
    const newUser = {
      avatar,
      email: username,
      firstname,
      lastname,
      location: locationParse,
      phone: phoneParse,
      admin: username.split(".")[0] == "admin" ? true : false,
      password
    }
    const rules = { email: 'required' }
    const validation = await validate(newUser, rules)
    if (validation.fails()) {
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('/');
    }
    await User.create(newUser)
    return response.redirect('/website');
  }
}

module.exports = AuthController
