const mongoose = require('mongoose');

module.exports.connect = () => mongoose.connect('mongodb+srv://root:root@cluster0.c3ttq.mongodb.net/codebuddy?retryWrites=true&w=majority');
module.exports.disconnect = () => mongoose.disconnect();