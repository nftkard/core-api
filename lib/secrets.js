/**
 * Secrets Manager to load all secrets from AWS Secrets Manager
 */

//  Dependencies 
const helpers = require('./helper');

// Create module to export
let _ = {};

// Secret data (to be filled in later)
_.secrets = {};



let dummyScretData = {
    cryptr: { encryptionKey: '@Sabza@123' },
    mongodb: {
      protocol: 'mongodb://',
      database: 'SabzaDB',
      username: 'sabza-local',
      password: 'Maddy12345',
      primary_cluster: 'sabza-prod-db-cluster-01-shard-00-00-aelcs.mongodb.net:27017',
      secondary_cluster: 'sabza-prod-db-cluster-01-shard-00-01-aelcs.mongodb.net:27017',
      tertiary_cluster: 'sabza-prod-db-cluster-01-shard-00-02-aelcs.mongodb.net:27017',
      ssl: 'true',
      replicaSet: 'SABZA-PROD-DB-CLUSTER-01-shard-0', 
      authSource: 'admin',
      retryWrites: 'true',
      w: 'majority',
      attribute_string: '/SabzaDB?ssl=true&replicaSet=SABZA-PROD-DB-CLUSTER-01-shard-0&authSource=admin&retryWrites=true&w=majority',
      url: 'sabza-prod-db-cluster-01-shard-00-00-aelcs.mongodb.net:27017,sabza-prod-db-cluster-01-shard-00-01-aelcs.mongodb.net:27017,sabza-prod-db-cluster-01-shard-00-02-aelcs.mongodb.net:27017/SabzaDB?ssl=true&replicaSet=SABZA-PROD-DB-CLUSTER-01-shard-0&authSource=admin&retryWrites=true&w=majority',
      secrets_manager: 'localhost/mongo'
    },
    // s3: {
    //   bucketApp: 'sabza',
    //   bucketPrefix: 'sabza-localhost-',
    //   deployment: 'localhost',
    //   separator: '-',
    //   secrets_manager: 'localhost/s3'
    // },
    // sqs: {
    //   queuePrefix: 'https://sqs.us-east-2.amazonaws.com/049132504320/localhost_',
    //   secrets_manager: 'localhost/sqs'
    // },
    // mailgun: {
    //   privateKey: 'key-080fcab02f0b2e5df2e39a0358d4315e',
    //   domain: 'mail.sabza.pk'
    //     // domain: 'https://sandbox8fac053607344aa98055a61f31876d24.mailgun.org'
    // },
    // dynamodb: {
    //   tablePrefix: 'localhost_',
    //   deployment: 'localhost',
    //   separator: '_',
    //   secrets_manager: 'localhost/dynamo'
    // }
}

  // Load all the steps 
_.load = async () => {

    try {
        
        // // // Get the user data
        // let userData = await _.getUserNameAndType();

        // // // Get user's deployment tag
        // let userTag = await _.getDeploymenyTag(userData.name, userData.type);

        // // // Get all the sercrets for the tag
        // let secrets = await _.getAllSecretsByTag(userTag);
        
        // // // Get value of each secret
        // let secretData = await _.getSecretData(secrets);

        
        // To be removed when moving to deployment
        secretData = dummyScretData;
        
        _.secrets = secretData;

        // Return Data
        return secretData;
    } catch (err) {
        throw( new Error(err));
    }
};
module.exports = _;