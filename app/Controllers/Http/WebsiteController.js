'use strict'
const os = use('os');

class WebsiteController {
  async renderSesions({ view }) {
    return view.render("login");
  }
  async renderHome({ view, session, auth }) {
    // console.log("username: ", session.get('username'));
    // console.log("email: ", session.get('email'));
    // console.log("session: ", session.all());
    // console.log("auth: ", auth.user);
    return view.render("home", { nombre: "" }); // no logré autnticar, por eso el campo se envia vacio
  }
  async renderInfo({ view }) {
    return view.render("info", {
      platformName: process.platform, 
      versionNode: process.version, 
      rss: process.memoryUsage().rss, 
      path: `"${process.argv[0]}"`,
      processId: process.pid, 
      projectFolder: `"${process.cwd()}"`,
      numOfProcessors: os.cpus().length
    });
  }
}

module.exports = WebsiteController
