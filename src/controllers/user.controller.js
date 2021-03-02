const wbm = require('wbm');

class UserController {

    async sendsms(req, res){

        wbm.start({showBrowser: true, qrCodeData: true, session: true})
            .then(async () => {
                await wbm.waitQRCode();
                const phone = ['2347063516620','2348102760530']
                const contacts = [
                    { phone: '2347063516620', name: 'Joshua', age: 21 },
                    { phone: '2348102760530', name: 'Triple A', age: 33 }
                ];
                const message = 'Hi {{name}}, your age is {{age}}';
                // Hi Bruno, your age is 21
                // Hi Will, your age is 33
                // await wbm.send(contacts, message);
                await wbm.send(phone, message);
                await wbm.end();
                }).catch(err => console.log(err));

              
        // res.status(200).send('Welcome Home')
    }

}

module.exports = new UserController()