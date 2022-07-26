import React from "react";
// import { useRouter } from "next/router";
import web3 from "../../../ethereum/web3";
import Layout from "../../../components/Layout";
import individualCampaign from "../../../ethereum/individualCampaign";
import { Card, Grid, Button } from "semantic-ui-react";
import ContributeForm from "../../../components/ContributeForm";
import Link from "next/link";

function ShowCampaignDetails({ summary, address }) {
  // const router = useRouter();
  // const { ethAddress } = router.query;
  // console.log(summary);
  // console.log(address);

  const renderCards = () => {
    const {
      minimumContribution,
      balance,
      requestsCount,
      contributerCount,
      manager,
    } = summary;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money",
        style: {
          overflowWrap: "break-word",
        },
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this amount of wei to become an approver",
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests must be approved by contributers.",
      },
      {
        header: contributerCount,
        meta: "Number of Contributors",
        description:
          "Number of people who have already donated to this campaign.",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "The balance is how much money this campaign has left to spend.",
      },
    ];

    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <Grid.Row>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Column width={10}>{renderCards()}</Grid.Column>

          <Grid.Column width={6}>
            <ContributeForm address={address} />
          </Grid.Column>
        </Grid>
      </Grid.Row>
      <Grid.Row style={{ marginTop: "12px" }}>
       
          <Link
            href={{
              pathname: `/campaigns/${address}/requests`,
            }}
          >
            <a>
              <Button primary> View Requests</Button>
            </a>
          </Link>

      </Grid.Row>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const campaign = individualCampaign(params.address);
  const summary = await campaign.methods.getSummary().call();

  return {
    props: {
      summary: {
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        contributerCount: summary[3],
        manager: summary[4],
      },
      address: params.address,
    },
  };
}

export default ShowCampaignDetails;
