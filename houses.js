function Houses(name,address,forSale,price,zestimate,deal,mortgage){
	this.name = name;
	this.address = address;
	this.forSale = forSale;
	this.price = price;
	this.zestimate = zestimate;
	this.deal = deal;
	this.mortgage = mortgage;
};

var houses = [];

houses.push(new Houses('The Villa','http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg','4747 Northside Dr, <br />Atlanta, GA 30327','For Sale','$2,999,000','Zestimate®: $4,031,664','A good deal!! (25% off!)','Estimated Mortgage: $11,179/mo'));


var houses = [
	{
		name: 'The Villa',
		photo: 'http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg',
		address: '4747 Northside Dr, <br />Atlanta, GA 30327',
		forSale: 'For Sale',
		price: '$2,999,000',
		zestimate: 'Zestimate®: $4,031,664',
		deal: 'A good deal!! (25% off!)',
		mortgage: 'Estimated Mortgage: $11,179/mo'
	},
	{
		name: 'The Pool House',
		photo: 'http://photos2.zillowstatic.com/p_h/IS1n6j1pnfqv2b1000000000.jpg',
		address: '4747 Northside Dr, <br />Atlanta, GA 30327',
		forSale: 'For Sale',
		price: '$2,399,000',
		zestimate: 'Zestimate®: $2,684,662',
		deal: 'Average Deal',
		mortgage: 'Estimated Mortgage: $8,943/mo'
	},
	{
		name: 'The Awesome',
		photo: 'http://ak.t1.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a=03200231131-48125-20-101&g=4510',
		address: '914 Davis Dr, <br />Atlanta, GA 30327',
		forSale: 'NOT for Sale',
		price: '$2,999,000',
		zestimate: 'Zestimate®: $2,134,055',
		deal: 'A good deal!! (25% off!)',
		mortgage: 'Estimated Mortgage: -'
	},
	{
		name: 'Versailles',
		photo: 'http://photos3.zillowstatic.com/p_h/ISx35uo0fixyhb0000000000.jpg',
		address: '5115 Northside Dr,<br />Atlanta, GA 30327',
		forSale: 'For Sale',
		price: '$8,000,000',
		zestimate: 'Zestimate®: $12,360,014',
		deal: 'A crazy deal!! (30% off!)',
		mortgage: '$29,821/mo'
	}
];

