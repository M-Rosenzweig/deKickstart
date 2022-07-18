const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
// const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  "blame people fun join fringe payment water choice lawn million monitor shield",
  "https://rinkeby.infura.io/v3/fa80dc3692a3432db5c164171ce3c560"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

//   console.log(`contract ABI ${compiledFactory.interface}`);
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
