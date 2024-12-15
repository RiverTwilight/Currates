import { extractAmount } from "../helpers.js";

describe("extractAmount", () => {
	// Basic currency symbols
	test("handles basic currency symbols", () => {
		expect(extractAmount("24 euros")).toEqual({
			currency: "EUR",
			amount: 24,
		});
		expect(extractAmount("$100")).toEqual({ currency: "USD", amount: 100 });
		expect(extractAmount("€4")).toEqual({ currency: "EUR", amount: 4 });
		expect(extractAmount("¥5,000")).toEqual({
			currency: "JPY",
			amount: 5000,
		});
		expect(extractAmount("£29.99")).toEqual({
			currency: "GBP",
			amount: 29.99,
		});
	});

	// Special currency formats
	test("handles special currency formats", () => {
		expect(extractAmount("A$59.99")).toEqual({
			currency: "AUD",
			amount: 59.99,
		});
		expect(extractAmount("CA$149.99")).toEqual({
			currency: "CAD",
			amount: 149.99,
		});
		expect(extractAmount("CHF 100.50")).toEqual({
			currency: "CHF",
			amount: 100.5,
		});
	});

	// Large numbers and different separators
	test("handles large numbers and different separators", () => {
		expect(extractAmount("€1.234.567,89")).toEqual({
			currency: "EUR",
			amount: 1234567.89,
		});
		expect(extractAmount("£1'234'567.89")).toEqual({
			currency: "GBP",
			amount: 1234567.89,
		});
		expect(extractAmount("$1,234,567.89")).toEqual({
			currency: "USD",
			amount: 1234567.89,
		});
	});

	// Currency codes
	test("handles currency codes", () => {
		expect(extractAmount("USD 500")).toEqual({
			currency: "USD",
			amount: 500,
		});
		expect(extractAmount("EUR 1500")).toEqual({
			currency: "EUR",
			amount: 1500,
		});
		expect(extractAmount("GBP 750")).toEqual({
			currency: "GBP",
			amount: 750,
		});
	});

	// Numbers with suffixes
	test("handles numbers with k/m/b suffixes", () => {
		expect(extractAmount("$5M-$10M")).toEqual({
			currency: "USD",
			amount: 5000000,
		});
		expect(extractAmount("20 billion euro")).toEqual({
			currency: "EUR",
			amount: 20000000000,
		});
	});

	// Decimal places
	test("handles various decimal places", () => {
		expect(extractAmount("$1,234,567.89123")).toEqual({
			currency: "USD",
			amount: 1234567.89123,
		});
		expect(extractAmount("€0.001")).toEqual({
			currency: "EUR",
			amount: 0.001,
		});
	});

	// Chinese currency
	test("handles Chinese currency formats", () => {
		expect(extractAmount("¥19.9")).toEqual({
			currency: "JPY",
			amount: 19.9,
		});
		expect(extractAmount("5元")).toEqual({ currency: "CNY", amount: 5 });
	});

	// Invalid inputs
	test("handles invalid inputs", () => {
		expect(extractAmount("")).toBeNull();
		expect(extractAmount("invalid")).toBeNull();
		expect(extractAmount("123")).toBeNull();
	});
});
