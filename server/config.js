const PORT = 4000;
const mongo = {
    dev: {
        url: 'mongodb://localhost:27017',
        dbPath: './mockdata/mock.json'
    },
    prod: {
        url: '',
        dbPath: ''
    },

}

module.exports = {
    PORT,
    mongo: mongo.dev
}