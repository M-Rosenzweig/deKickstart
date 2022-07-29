import React from "react";
import Layout from "../../../../components/Layout";
import { Button, Table } from "semantic-ui-react";
import Link from "next/link";
import individualCampaign from "../../../../ethereum/individualCampaign";
import RequestRow from "../../../../components/RequestRow";

const { Header, Row, HeaderCell, Body } = Table;

export async function getServerSideProps({ params }) {
  const campaign = individualCampaign(params.address);
  // const summary = await campaign.methods.getSummary().call();
  const contributerCount = await campaign.methods.contributerCount().call();
  const requestCount = await campaign.methods.getRequestCount().call();

  // console.log(summary);

  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((el, index) => {
        return campaign.methods.requests(index).call();
      })
  );

  const sanitizedRequests = requests.map(
    ({ description, value, recipient, complete, ApprovalCount }) => {
      return { description, value, recipient, complete, ApprovalCount };
    }
  );

  return {
    props: {
      address: params.address,
      requests: sanitizedRequests || [],
      contributerCount,
      requestCount: sanitizedRequests.length || 0,
    },
  };
}

function RequestIndex({ address, requests, requestCount, contributerCount }) {

  const renderRows = () =>
  requests.map((request, index) => {
    return (
      <RequestRow
        request={request}
        key={index}
        id={index}
        address={address}
        contributerCount={contributerCount}
      />
    );
  });

  return (
    <Layout>
     <h3>Requests</h3>
      <Link href={`/campaigns/${address}/requests/new`}>
        <Button style={{ marginBottom: 10 }} floated="right" primary>
          New Request
        </Button>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{renderRows()}</Body>
      </Table>

      <div>Found {requestCount} requests</div>
    </Layout>
  );
}

export default RequestIndex;
