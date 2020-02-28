const VeriCert = artifacts.require("VeriCert");


require('chai')
	.use(require('chai-as-promised'))
	.should()




contract('VeriCert', (accounts) => {
	let veriCert

	before(async () => {
		 veriCert = await VeriCert.deployed()
	})

	describe('deployement',async () => {
		it('deploys successfully',async  () =>{
			const address = await veriCert.address
			assert.notEqual(address,0x0)
			assert.notEqual(address,'')
			assert.notEqual(address,null)
			assert.notEqual(address,undefined)


		})	


		it('has a name', async () => {
			const name = await veriCert.name()
			assert.equal(name, 'Cert Verification')
		})
	})


	describe('certs', async () =>{
		let result,certCount

		before(async () => {
			result = await veriCert.createCert('980507015153', 'Wong Zi Chin', 'CompSci', '100', '2/2/2020',{from: accounts[0]} )
			certCount = await veriCert.certCount()

		})

		it('creates certs', async ()=> {
			
			//success
			assert.equal(certCount, 1)
			const event = result.logs[0].args
			assert.equal(event.id.toNumber(), certCount.toNumber(),'id is correct')
			assert.equal(event.ic, '980507015153','ic is correct')
			assert.equal(event.name, 'Wong Zi Chin','name is correct')
			assert.equal(event.course, 'CompSci','course is correct')
			assert.equal(event.result, '100','result is correct')
			assert.equal(event.issueDate, '2/2/2020','date is correct')

			//failure: post must have content
			await veriCert.createCert('', {from: accounts[0]}).should.be.rejected;



		})


		it('list certs', async() => {
			const cert = await veriCert.certs(certCount)
			const event = result.logs[0].args
			assert.equal(event.id.toNumber(), certCount.toNumber(),'id is correct')
			assert.equal(event.ic, '980507015153','ic is correct')
			assert.equal(event.name, 'Wong Zi Chin','name is correct')
			assert.equal(event.course, 'CompSci','course is correct')
			assert.equal(event.result, '100','result is correct')
			assert.equal(event.issueDate, '2/2/2020','date is correct')

		})




	})
})
