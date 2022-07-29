import React, {useEffect} from 'react'
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import individualCampaign from '../ethereum/individualCampaign';
import { useRouter } from "next/router";


function RequestRow({id, request, contributerCount, address}) {
  const {Row, Cell} = Table; 
  const readyToFinalize = request.ApprovalCount > contributerCount / 2; 
  // console.log(request);
  const router = useRouter();

  // let campaign; 
  // let accounts; 

  useEffect(() => {
    informationForPage(); 
  },[])


  async function informationForPage() {
    let campaign = individualCampaign(address); 
    // let accounts = await web3.eth.getAccounts();
    let manager = await campaign.methods.manager().call(); 
    console.log(manager);
  }


  const handleApprove = async () => {
    let campaign = individualCampaign(address); 
    let accounts = await web3.eth.getAccounts(); 
  

    await campaign.methods.approveRequest(id).send({
      from: accounts[0]
    })

    router.replace(`/campaigns/${address}/requests`);

  }
  const handleFinalize = async () => {
    let campaign = individualCampaign(address); 
    let accounts = await web3.eth.getAccounts(); 

    await campaign.methods.finalizeRequest(id).send({
      from: accounts[0]
    })

    router.replace(`/campaigns/${address}/requests`);
  }

  return (
    <>
    <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
      <Cell>{id}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
      <Cell>{request.recipient}</Cell>
      <Cell>{request.ApprovalCount} / {contributerCount} </Cell>
      <Cell>
        { request.complete ? null : (
        <Button color='green' basic onClick={handleApprove}>Approve</Button> 
        )}
      </Cell>
      <Cell>
        {
          request.complete ? null : (
          <Button color='teal' basic onClick={handleFinalize}>Finalize</Button> 
      
          )}
      </Cell>
    </Row>
    </>
  )
}

export default RequestRow