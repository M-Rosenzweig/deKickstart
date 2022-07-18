import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0xb3e544bec52c2E07844c7e20157Ab05b059BF989'
); 

export default instance;