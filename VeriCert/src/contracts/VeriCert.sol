pragma solidity ^0.5.0;

contract VeriCert {
	string public name;
	uint public certCount = 0;

	mapping(uint => Cert) public certs;	



	struct Cert{
		uint id;
		string ic;
		string name;
		string course;
		string result;
		string issueDate;
		address author;
	}



	event CertCreated(
		uint id,
		string ic,
		string name,
		string course,
		string result,
		string issueDate,
		address author

	);

	constructor() public{
		name = "Cert Verification";
	}



	function createCert(string memory  _ic, string memory _name, string memory _course, string memory _result, string memory _issueDate  ) public {
		require(bytes(_ic).length > 0);
		require(bytes(_name).length > 0);
		require(bytes(_course).length > 0);
		require(bytes(_result).length > 0);
		require(bytes(_issueDate).length > 0);


		//increment cert counter
		certCount++;
		//create cert
		certs[certCount]= Cert(certCount, _ic, _name, _course, _result, _issueDate, msg.sender);

		//trigger event


		emit CertCreated(certCount, _ic, _name, _course, _result, _issueDate, msg.sender);
	}

}