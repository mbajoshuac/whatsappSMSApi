const app = require('express')()
const wbm = require('wbm');


wbm.start()
            .then(async () => {
                await wbm.waitQRCode();
                const phone = ['2347063516620','2348102760530']
                
                const message = 'Goodmorning';
                // Hi Bruno, your age is 21
                // Hi Will, your age is 33
                // await wbm.send(contacts, message);
                await wbm.send(phone, message);
                await wbm.end();
                }).catch(err => console.log(err));


//load middlewares
require('./src/middlewares/pre-route.middleware')(app)

//run route
app.use('/api', require('./src/routes/'))

//Server port listen
app.listen(2020, async ()=> {
    console.log(`Listening to port 2020`);
})