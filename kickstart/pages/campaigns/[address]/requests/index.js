import React from "react";
import Layout from "../../../../components/Layout";
import { Button } from "semantic-ui-react";
import Link from "next/link";
import individualCampaign from "../../../../ethereum/individualCampaign";

export async function getServerSideProps({ params }) {
  const campaign = individualCampaign(params.address);
  const summary = await campaign.methods.getSummary().call();

  return {
    props: {address: params.address}
  };
}


function RequestIndex({address}) {
  return (
    <Layout>
      <h3>Requests</h3>
      <Link
        href={{
          pathname: `/campaigns/${address}/requests/new`
        }}
      >
        <a>
          <Button>Create Request</Button>
        </a>
      </Link>
    </Layout>
  );
}




export default RequestIndex;
