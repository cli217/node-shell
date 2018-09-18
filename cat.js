const cat = () => {
    const fs = require('fs');
    process.stdout.write('prompt > ');
    process.stdin.on( 'data', (data) => {
        const command = data.toString().split(' ');
        if(command[0] === 'cat')
        {
            fs.readFile(`./${command[1]}`, (err, data) => {
                if(err){
                    throw err;
                }
                else{
                    process.stdout.write(data);
                }
            });
        }
    })

}


module.exports = cat;