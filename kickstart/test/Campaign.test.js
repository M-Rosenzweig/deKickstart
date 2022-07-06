const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// entire file. different than last time where only imported the bytecode and abi
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts; 
let factory; 
let campaignAddress; 
let campaign; 

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) 
    .deploy({data: compiledFactory.bytecode})
    .send({from:accounts[0], gas: '1000000'})

    await factory.methods.createCampaign('100').send({
        from: accounts[0], 
        gas: '1000000'
    });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    // this destructuring of campaignAddress is saying that the first index of item from the contract call should be assigned to campaignAddress

    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    }); 

    it('marks the caller of create campaign as the manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    })

    it('can contribute and be marked as approver. assert - the account that sent funds is truthy in the mapping of approvers ', async () => {
        await campaign.methods.contribute().send({
            value:'200', 
            from: accounts[1]
        })
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    })

    it('requires a minimum contribution', async () => {
        try {
          await campaign.methods.contribute().send({
            value: '5',
            from: accounts[1]
          });
          assert(false);
        } catch (err) {
          assert(err);
        }
      });

      it('the request is successfull and matches the arguments we fed it', async () => {
        await campaign.methods
        .createRequest('Community Link Ads', '800', accounts[1]).send({
            from: accounts[0], 
            gas: '1000000'
        })
        // 
        const request = await campaign.methods.requests(0).call();
        assert.equal('Community Link Ads', request.description);
      })

})