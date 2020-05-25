const mongoose = require('mongoose');
const config = require('config');

const connect = async() => {
    try {
        if(!config.has('mongoURI')){
            console.log('no database URI');
            return;
        }
        await mongoose.connect(config.get('mongoURI'), {});
        console.log('connected to database successfully...')
    } catch (err) {
        console.log(err);
    }
}

module.exports = connect;