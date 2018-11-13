'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var os = require('os'),
    fs = require('fs'),
    cp = require("child_process"),
    opn = require('opn');

var Launcher = function () {
    function Launcher(name, icon, path, startCommand) {
        _classCallCheck(this, Launcher);

        this.name = name;
        this.icon = icon;
        this.path = path;
        this.startCommand = startCommand;
    }

    _createClass(Launcher, [{
        key: 'exists',
        value: function exists() {
            return fs.existsSync(this.path);
        }
    }, {
        key: 'html',
        value: function html() {
            return '<li class="' + (this.exists() ? 'active' : '') + '">\n            <a href="#">\n                <span class="add">ADD</span>\n                <img src="./assets/img/' + this.icon + '" alt="' + this.name + ' Launcher"/>\n            </a>\n        </li>';
        }
    }, {
        key: 'select',
        value: function select() {
            this.exists() ? this.launch() : this.search();
        }
    }, {
        key: 'launch',
        value: function launch() {
            cp.exec(this.startCommand, function (err, stdout, stderr) {
                process.exit(0); // exit process once it is opened
            });
        }
    }, {
        key: 'search',
        value: function search() {
            opn('https://google.com/search?q=Download ' + this.name + ' Launcher');
        }
    }]);

    return Launcher;
}();

exports.default = Launcher;