const request = require('request')
const options = {
  method: 'POST',
  url: 'http://localhost:5000/api/v1/no-auth/PartnerP2P/CreateOrder',
  headers: {
    'Content-Type': 'application/json',
    'x-partner-id': 'pxxxx',
    'x-merchant-secret': 'xxx-xxx-xxx',
    Authorization: 'Bearer pk_partner_xxxxxxxx'
  },
  body: {
    partner_order_id: 'my-server-order-id',
    amount_to_collect: '100',
    timestamp: 1693285902419,
    order_expiration: 1693285902419,
    currency: 'GHS', // GHS | KHS | NGN | UGX | ZAR
    partner_callback_url: 'https://xxx...',
    partner_redirect_url: 'https://example.com?status=success&order=my-server-order-id',
    signature: 'fe04ee69d4f9a93c71f3d1bbf37d49d541e5c4fb159c4a75924f398262e2af146d0e2e33b1379a9b57c641d822c410158e03b64faab34dc98d528bfa234f9dd3'
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
