function git (command){
    var  spwan = require('child_process').spawn;
    var  ping = spwan('git', [command]);
    ping.stdout.setEncoding('utf8');
    ping.stdout.on('data', function(data){
        console.log(data);
    });
}
git('status');
git('add .');
git('commit -m "test script"');
git('pull');
git('push');