function git (command){
    var  spwan = require('child_process').spawnSync;
    var  ping = spwan('git', command);
    console.log(ping.stderr.toString('utf-8'));
}
git(['push']);