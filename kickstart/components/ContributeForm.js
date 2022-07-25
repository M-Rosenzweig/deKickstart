import React, {useState} from 'react'; 
import { Form, Button, Input, Message } from "semantic-ui-react";
import individualCampaign from '../ethereum/individualCampaign';
import web3 from '../ethereum/web3';
import { useRouter } from 'next/router'; 

function ContributeForm({address}) {

    const [value, setValue] = useState('')
    const router = useRouter();

    // console.log(address);

    async function handleSubmit(e) {
        e.preventDefault();
        const campaign = individualCampaign(address); 

        try {
            const accounts = await web3.eth.getAccounts(); 
            await campaign.methods.contribute().send({
                from: accounts[0], 
                value: web3.utils.toWei(value, 'ether')
            }) 
        router.replace(`/campaigns/${address}`)

        } catch (error) {
            
        }


    }

  return (
    <>
    <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Amount to Contribute</label>
            <Input
            label="ether"
            labelPosition='right'
            onChange={(e) => setValue(e.target.value)}
            />
        </Form.Field>
        <Button primary>
            Contribute!
        </Button>
    </Form>
    </>
  )
}

export default ContributeForm