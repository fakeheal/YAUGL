'use strict';

var _Launcher = require('./Launcher.js');

var _Launcher2 = _interopRequireDefault(_Launcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var launchersSet = new Set();

launchersSet.add(new _Launcher2.default('Battle.net', 'battlenet.png', 'C:\\Program Files (x86)\\Battle.net', 'start "" "C:\\Program Files (x86)\\Battle.net\\Battle.net.exe"'));

launchersSet.add(new _Launcher2.default('Discord', 'discord.png', process.env.APPDATA + '\\Discord', 'start "" "' + process.env.APPDATA + '\\Discord\\Update.exe" --processStart Discord.exe'));

launchersSet.add(new _Launcher2.default('Origin', 'origin.png', 'C:\\Program Files (x86)\\Origin', 'start "" "C:\\Program Files (x86)\\Origin\\Origin.exe"'));

launchersSet.add(new _Launcher2.default('Twitch', 'twitch.png', process.env.APPDATA + '\\Twitch', 'start "" "' + process.env.APPDATA + '\\Twitch\\Bin\\Twitch.exe"'));

launchersSet.add(new _Launcher2.default('uPlay', 'uplay.png', 'C:\\Program Files (x86)\\Ubisoft\\Ubisoft Game Launcher\\', 'start "" "C:\\Program Files (x86)\\Ubisoft\\Ubisoft Game Launcher\\Uplay.exe"'));
launchersSet.add(new _Launcher2.default('Steam', 'steam.png', 'C:\\Program Files (x86)\\Steam\\Steam.exe', 'start "" "C:\\Program Files (x86)\\Steam\\Steam.exe"'));

var launchersHub = document.getElementById('launchers-hub');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    var _loop = function _loop() {
        var launcher = _step.value;

        launchersHub.insertAdjacentHTML('beforeend', launcher.html());
        launchersHub.lastChild.addEventListener('click', function () {
            return launcher.select();
        });
    };

    for (var _iterator = launchersSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}