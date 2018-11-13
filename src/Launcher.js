const os = require('os'),
    fs = require('fs'),
    cp = require("child_process"),
    opn = require('opn');

class Launcher {
    constructor(name, icon, path, startCommand) {
        this.name = name;
        this.icon = icon;
        this.path = path;
        this.startCommand = startCommand;
    }

    exists() {
        return fs.existsSync(this.path);
    }

    html() {
        return `<li class="${this.exists() ? 'active' : ''}">
            <a href="#">
                <span class="add">ADD</span>
                <img src="./assets/img/${this.icon}" alt="${this.name} Launcher"/>
            </a>
        </li>`
    }

    select() {
        this.exists() ?
            this.launch() :
            this.search();
    }

    launch() {
        cp.exec(this.startCommand, function (err, stdout, stderr) {
            process.exit(0);// exit process once it is opened
        });
    }

    search() {
        opn(`https://google.com/search?q=Download ${this.name} Launcher`);
    }
}


export default Launcher;