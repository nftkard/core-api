/**
 * Application Router
 * 
 */


//  Dependencies
const express = require('express');


// Routing files
const def = require('./../routes/default');
const ping = require('./../routes/ping');
// const users = require('./../routes/users');
// const paths = require('./../routes/paths');
// const policies = require('./../routes/policies');
// const emailVerifications = require('./../routes/emailVerifications');
// const emailTokens = require('./../routes/emailTokens');
// const totpKeys = require('./../routes/totpKeys');
// const totpTokens = require('./../routes/totpTokens');


// Create module to export
let _ = express.Router();



// Ping
_.get('/ping', ping.get);
_.get('/ping/rpc', ping.rpc);
_.get('/ping/rpc/:network', ping.rpcQuery);
_.all('/ping', def._405);

// // Users
// _.post('/users', users.post)
// _.all('/users', def._405);

// // Paths
// _.get('/paths', paths.get)
// _.all('/paths', def._405);

// Policies
// _.get('/policies', policies.get);
// _.all('/policies', def._405);

// // Email Verifications
// _.post('/emails/verifications', emailVerifications.post);
// _.all('/emails/verifications', def._405);

// // Email Tokens
// _.post('/emails/tokens', emailTokens.post);
// _.all('/emails/tokens', def._405);

// // TOTP Keys
// _.post('/totp/keys', totpKeys.post);
// _.all('/totp/keys', def._405);

// // TOTP Tokens
// _.post('/totp/tokens', totpTokens.post);
// _.all('/totp/tokens', def._405);

// 404 Handler
_.all('*', def._404);

// Export router module as _ to router all request to relevant files
module.exports = _;