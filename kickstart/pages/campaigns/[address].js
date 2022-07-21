import React from 'react'
import { useRouter } from "next/router";
import Layout from '../../components/Layout';

function ShowCampaignDetails() {
    const router = useRouter();
    const { ethAddress } = router.query;
  return (
    <Layout>
          <p>Campaign: {ethAddress}</p>
    </Layout>
  
  )
}

export default ShowCampaignDetails