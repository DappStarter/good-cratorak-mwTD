require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food damp cost spider unusual gesture flower army genius'; 
let testAccounts = [
"0xc5fe9d57b3a927dad271ce0d14652c42c2f9a9b2cf1c32cc4c41e16531fb5aaa",
"0x4793c672b18f03bcb0eabecd8ebc11d3b9451b452ab9aaecb0947064d1a0f8f2",
"0x8e8d2ba781603cb7992a2f60aec85e840e6a483346db457caff19ea19031b646",
"0x374598d0b34c98fc4a0ee2caf2f19951253b94a3b9662954a5904fbd275e446a",
"0x8b6343146972d49f6654914ab4e109222c4f6a2874d5885beffce461cfec2463",
"0xb67b8beec2d4307f2fe2d02c993cb27c20f5621659b737dc98f22a43a7445796",
"0xde52385df466cf0f7f2782f7686d032a51b96ab3bfa0db6668bce16ee440cc01",
"0xd9949f09b0ce7250b9065155910c65e5e1467b0e4e635889f3a255f15706e343",
"0x02d850e64f383d36e480233bfaa39050b8cbee6bf34a000def157cef47e9110f",
"0x53f85bca0a747083425027686862973c5f9cf26939ccabbb9c6d777c8c5703cf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

