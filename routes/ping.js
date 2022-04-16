 /**
 * Application Type: Router
 * Route Handler: Ping
 * Description: Ping Handler, useable on the router in place to give ping request anwser
 * 
 */

// Dependencies

const Ping = require('./../models/ping');
// const dummyJSON = require('./../s3/response.json');
const { get }   =   require('lodash');
// Create module to export
let _ = {};



dummyJSON = {
    "smartContractAddress" : "0xd0dc06D11109C6bbB0981619d9Ec66770f4e950B",
    "nftNFCUID" : "049C64D2452B80",
    "nftCardNumber" : "000723",
    "edition" : "Limited Edition",
    "sample" : "028/100",
    "image": "SpaceSnakeSample.png",
    "name": "Space Snake # 5610",
    "description": "ISI Lab NFT Demo Card SAMPLE",
    "external_url": "isilab.kaist.ac.kr",
    "attributes": [
      {
        "trait_type": "Background",
        "value": "Magic Mint"
      },
      {
        "trait_type": "Skin",
        "value": "Blue"
      },
      {
        "trait_type": "Expression",
        "value": "Neutral"
      },
      {
        "trait_type": "Eyes",
        "value": "Stupid"
      },
      {
        "trait_type": "Clothes",
        "value": "Astronaut Suit"
      },
      {
        "trait_type": "Headgear",
        "value": "Fedora"
      },
      {
        "trait_type": "Accessories",
        "value": "Bat"
      }
    ]
  }
// Get Request to /ping route
_.get = async (req, res) => {
    let code = 200;
    key = '_id';
    let ping = new Ping(get(req.query, key));
    res.json({
        'ping' : 'successful',
        'status' : code,
        'timestamp' : Date.now()
    });
    // return res.status(code).json(new ResquestError(code));
};

// Get Request to /ping route
_.rpc = async (req, res) => {
    // check if rpc is available 
    
    let code = 200;
    key = '_id';
    let ping = new Ping(get(req.query, key));
    res.json({
        'ping' : 'RPC ping successful',
        'status' : code,
        'timestamp' : Date.now(),
        'response': dummyJSON

    });
    // return res.status(code).json(new ResquestError(code));
};
_.rpcQuery = async (req, res) => {
    
    console.log(req.params)
    let code = 200;
    key = '_id';
    let ping = new Ping(get(req.query, key));
    res.json({
        'ping' : 'RPC ping successful',
        'status' : code,
        'network': req.params.network,
        'timestamp' : Date.now(),
        'response': dummyJSON

    });
}


// Export router module as _ to handle ping route and errors
module.exports = _;