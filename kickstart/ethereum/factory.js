import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x3992E4e59Ee4C896AA475990810edACfa33F3159"
);

export default instance;
