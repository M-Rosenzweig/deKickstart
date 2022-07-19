import React from "react";
import { Card, Button } from "semantic-ui-react";
// import { useEffect, useState } from "react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";

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

  const items = campaigns.map((item) => {
    return {
      header: item,
      description: <a>View Campaign</a>,
      fluid: true,
    };
  });

  // the styles are from semantic UI content icon 

  return (
    <>
    <Layout>
      <div>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        ></link>
        <h3>Open Campaigns</h3>
        <Button
        floated="right"
        content='Create Campaign'
        icon='add circle'
        primary={true}
        />
        <Card.Group items={items} />
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
