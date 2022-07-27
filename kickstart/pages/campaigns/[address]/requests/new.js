import React, { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import individualCampaign from "../../../../ethereum/individualCampaign";
import web3 from "../../../../ethereum/web3";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const address = params.address;

  return {
    props: { address },
  };
}

function newRequest({ address }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [recipient, setRecipient] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const campaign = individualCampaign(address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0],
        });
      router.push(`/campaigns/${address}/requests`);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };
  return (
    <Layout>
      <Link href={{
          pathname: `/campaigns/${address}/requests`
      }}>
        <a>Back</a>
      </Link>
      <h3>Create a New Request for {address} campaign</h3>
      <Form onSubmit={handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Value in Eth</label>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>
          Create
        </Button>
      </Form>
    </Layout>
  );
}

export default newRequest;
