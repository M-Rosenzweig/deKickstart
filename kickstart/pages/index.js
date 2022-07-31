import React from "react";
import { Card, Button } from "semantic-ui-react";
// import { useEffect, useState } from "react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import Link from "next/link";

function NewCampaign({ campaigns }) {
  // hooks version
  // const [campaigns, setCampaigns] = useState('')

  // useEffect(() => {
  //   async function getDeployedContract() {
  //    const campaignsinfo = await factory.methods.getDeployedCampaigns().call();
  //    setCampaigns(campaignsinfo)
  //   }
  //   getDeployedContract()
  // },[])
  // console.log(typeof campaigns);

  const renderCampaigns = () => {
    const items = campaigns.map((ethAddress) => {
      return {
        header: ethAddress,
        description: (
          <Link
            href={{
              pathname: `/campaigns/${ethAddress}`
              // query: { ethAddress },
            }}
          >
            View Campaign
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  };

  // the styles are from semantic UI content icon

  return (
    <>
      <Layout>
        <div>
          <h3>All Open Campaigns</h3>
          <Link href={"/campaigns/new"}>
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary={true}
              />
            </a>
          </Link>

          {renderCampaigns()}
        </div>
      </Layout>
    </>
  );
}

// this is a next method. Get inital props that returns campaigns and then can pass it to the function above. this is done on the next server before being computed in local browser with java script. this allowed me to render the stuff even while blocking javascript !
export async function getServerSideProps() {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { props: { campaigns } };
}

export default NewCampaign;
