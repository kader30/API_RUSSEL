const mongoose = require ('mongoose');

const clientOptions = {
    
    dbName           : 'apiRussel'
};

exports.initClientDbConnection = async () => {
    try {
        /*attention 
        on essaie de se connecté a mongoDB en utilisant la variable d'environnement
        URL_MONGO il faut donc ne pas oublier de l'ajouter au fichier .env
        URL_MONGO  prends pour valeur la chaine de connexion de votre cluster 
        mongoDB*/
        await mongoose.connect(process.env.URL_MONGO, clientOptions)
        console.log('connected')
    } catch (error) {
        console.log(error);
        throw error;
    }
}