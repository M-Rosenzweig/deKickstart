import React from 'react';
import { useEffect, useState } from "react";
import factory from '../ethereum/factory';

function NewCampaign() {

  useEffect(() => {
    async function getDeployedContract() {
     const campaigns = await factory.methods.getDeployedCampaigns().call();
     console.log(campaigns); 
    }
    getDeployedContract()
  },[])

  // NewCampaign.getInitialProps = async () => {
  //   const campaigns = await factory.methods.getDeployedCampaigns().call();
  //   return { campaigns };
  // };

  return (
    <>
      <h1>Home Page Vibes!</h1>
    </>
  )
}

export default NewCampaign