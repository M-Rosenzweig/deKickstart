import React, { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import individualCampaign from "../ethereum/individualCampaign";
import web3 from "../ethereum/web3";
import { useRouter } from "next/router";

function ContributeForm({ address }) {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // console.log(address);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    const campaign = individualCampaign(address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, "ether"),
      });
      router.replace(`/campaigns/${address}`);
      //   setValue('')
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
    setValue("");
  }

  return (
    <>
      <Form onSubmit={handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={value}
            label="ether"
            labelPosition="right"
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>
          Contribute!
        </Button>
      </Form>
    </>
  );
}

export default ContributeForm;
