pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns; 

    function createCampaign(uint minimum) public {
        // newCampaign = a new instance of the Campaign contract and the creator feeds the minimum $ requirement for their campaign 
        address newCampaign =  new Campaign(minimum, msg.sender);
        // add this newCampaign to the array of addresses that contains all the deployed campains that this factory made. 
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns; 
    }
}


// ---- 

contract Campaign {
    // struct declaration on the top. This is a new Data type like address or uint - it is a 'Request' type
    struct Request {
        string description; 
        uint value; 
        address recipient; 
        bool complete;
        uint ApprovalCount; 
        mapping(address => bool) approvals;  
    }
// declaring the variables we will be using. The top one is an array of Request mappings(objects).
    Request[] public requests; 
    address public manager;
    mapping(address => bool) public approvers;
    uint public minimumContribution;
    uint public contributerCount ; 

// modifier for the functions that only the manager / campaign starter should be able to call to finalize payments with vendors
    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }

// the constructor of the contract. 
    function Campaign(uint minimum, address creator) public {
        minimumContribution = minimum;
        manager = creator;
    }

// allowing people to contribute to the campaign 
    function contribute () public payable {
        require(msg.value > minimumContribution);
        // approvers.push(msg.sender);
        approvers[msg.sender] = true; 
        contributerCount++;
    }

// function for manager to ask his people for money towards a expenditure
    function createRequest(string description, uint value, address recipient) public onlyManager {
        Request memory newRequest = Request({
            description: description, 
            value: value,
            recipient: recipient, 
            complete: false, 
            ApprovalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        // request = the specific request at the index specified in the argument 
        Request storage request = requests[index];

        // in order to approve this request you need to be a contributing approver
        require(approvers[msg.sender]);
        // must return false when asked if sender is in the approvals mapping and already voted
        require(!request.approvals[msg.sender]);
        
        // add this sender to the mapping as true
        request.approvals[msg.sender] = true;
        // raise the counter by one so we know how many people / senders are supporting this request.
        request.ApprovalCount++; 
    }

    function finalizeRequest(uint index) public onlyManager {
        Request storage request = requests[index];

        require(!request.complete);
        require(request.ApprovalCount > ( contributerCount / 2));
        // approval count is the Request mappings counter - contributer count is total contributers. meaning of the contributers half of them have to of called the approveRequest function. 

        request.recipient.transfer(request.value);
        request.complete = true; 
    }

    function getSummary() public view returns(uint, uint, uint, uint, address) {
        // balance, Requests, contributers, minimum contribution 
        return (
            minimumContribution, 
            this.balance, 
            requests.length,
            contributerCount, 
            manager
        );
    }

    function getRequestCount() public view returns (uint) {
        return requests.length; 
    }
}