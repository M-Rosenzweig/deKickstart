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

// export async function getServerSideProps(props) {
//  let ethAddress1 =  props.query.address
//  console.log(ethAddress1);
// }

// export async function getServerSideProps() {
//   const ethAddress1 = await props.query.address

//   return { props: { ethAddress1 } };
// }

export default ShowCampaignDetails