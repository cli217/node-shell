
const pwd = () => {
    process.stdout.write('prompt > ');
    process.stdin.on( 'data', (data) => {
        const cmd = data.toString().trim();
        if(cmd === 'pwd')
        {
            process.stdout.write(process.cwd().toString());
        }
        else{
        process.stdout.write('you Typed: ' + cmd)
        }

        process.stdout.write('\nprompty > ')
    })
}

module.exports = pwd;
