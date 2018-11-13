import Launcher from './Launcher.js';

const launchersSet = new Set();

launchersSet.add(new Launcher(
    'Battle.net',
    'battlenet.png',
    'C:\\Program Files (x86)\\Battle.net',
    'start "" "C:\\Program Files (x86)\\Battle.net\\Battle.net.exe"'
));

launchersSet.add(new Launcher(
    'Discord',
    'discord.png',
    process.env.APPDATA + '\\Discord',
    `start "" "${process.env.APPDATA}\\Discord\\Update.exe" --processStart Discord.exe`
));

launchersSet.add(new Launcher(
    'Origin',
    'origin.png',
    'C:\\Program Files (x86)\\Origin',
    'start "" "C:\\Program Files (x86)\\Origin\\Origin.exe"'
));

launchersSet.add(new Launcher(
    'Twitch',
    'twitch.png',
    process.env.APPDATA + '\\Twitch',
    `start "" "${process.env.APPDATA}\\Twitch\\Bin\\Twitch.exe"`
));

launchersSet.add(new Launcher(
    'uPlay',
    'uplay.png',
    'C:\\Program Files (x86)\\Ubisoft\\Ubisoft Game Launcher\\',
    'start "" "C:\\Program Files (x86)\\Ubisoft\\Ubisoft Game Launcher\\Uplay.exe"'
));
launchersSet.add(new Launcher(
    'Steam',
    'steam.png',
    'C:\\Program Files (x86)\\Steam\\Steam.exe',
    'start "" "C:\\Program Files (x86)\\Steam\\Steam.exe"'
));


let launchersHub = document.getElementById('launchers-hub');

for (let launcher of launchersSet) {
    launchersHub.insertAdjacentHTML('beforeend', launcher.html());
    launchersHub.lastChild.addEventListener('click', () => launcher.select());
}