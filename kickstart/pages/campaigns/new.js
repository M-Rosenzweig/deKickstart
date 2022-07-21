import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { useRouter } from 'next/router'; 

function New() {
  const [minimumContribution, setMinimumContribution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleContribution(e) {
    setMinimumContribution(e.target.value);
    // console.log(minimumContribution);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const accounts = await web3.eth.getAccounts();
    try {
      await factory.methods.createCampaign(minimumContribution).send({
        from: accounts[0],
      });
      router.push("/");
    } catch (err) {
      setErrorMessage(err.message);
      // console.log(err.message);
    }
    setLoading(false);
  }

  return (
    <Layout>
      <h3>Create a Campaign</h3>
      <Form onSubmit={handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Minimum Contribution </label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={handleContribution}
          />
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Button loading={loading} primary>
          Create!
        </Button>
      </Form>
    </Layout>
  );
}

export default New;
