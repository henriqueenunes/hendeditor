import { MercadoPagoConfig, Order } from "mercadopago";

const client = new MercadoPagoConfig({
	accessToken: "TEST-7624942598600769-102117-f12ddd2823d28d8cea941247ee855886-185579030",
	options: { timeout: 5000, idempotencyKey: "<IDEMPOTENCY_KEY>" },
});

const order = new Order(client);

const body = {
	type: "online",
	processing_mode: "automatic",
	total_amount: "1000.00",
	external_reference: "ext_ref_1234",
	payer: {
		email: "<PAYER_EMAIL>",
	},
	transactions: {
		payments: [
			{
				amount: "1000.00",
				payment_method: {
					id: "master",
					type: "credit_card",
					token: "<CARD_TOKEN>",
					installments: 1,
					statement_descriptor: "Store name",
				},
			},
		],
	},
};

order.create({ body }).then(console.log).catch(console.error);