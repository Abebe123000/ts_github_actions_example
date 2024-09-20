import { expect, test } from "vitest";
import { isValidPassword, isValidUserName } from "./validation";

test("isValidUserName", () => {
	// 文字列の長さ 1~64 文字
	expect(isValidUserName("")).toBe(false);
	expect(isValidUserName("1")).toBe(false);
	expect(isValidUserName("1234567")).toBe(false);
	expect(isValidUserName("12345678")).toBe(true);
	expect(
		isValidUserName(
			"1234567891123456789212345678931234567894123456789512345678961234",
		),
	).toBe(true);
	expect(
		isValidUserName(
			"12345678911234567892123456789312345678941234567895123456789612345",
		),
	).toBe(false);

	// 半角英数字のみ
	expect(isValidUserName("1234567890")).toBe(true);
	expect(isValidUserName("abcdefghihklmnopqrstuvwxyz")).toBe(true);
	expect(isValidUserName("ABCDEFGHIHKLMNOPQRSTUVWXYZ")).toBe(true);
	expect(isValidUserName("!")).toBe(false);
	expect(isValidUserName("@")).toBe(false);
	expect(isValidUserName("#")).toBe(false);
	expect(isValidUserName("$")).toBe(false);
	expect(isValidUserName("%")).toBe(false);
	expect(isValidUserName("(")).toBe(false);
	expect(isValidUserName(")")).toBe(false);
	expect(isValidUserName("\\")).toBe(false);
	expect(isValidUserName('"')).toBe(false);
	expect(isValidUserName("'")).toBe(false);
	expect(isValidUserName("`")).toBe(false);
	expect(isValidUserName("無")).toBe(false);
});

test("isValidPassword", () => {
	// 文字列の長さ 8~64 文字
	expect(isValidPassword("Aa34567")).toBe(false);
	expect(isValidPassword("Aa345678")).toBe(true);
	expect(
		isValidPassword(
			"Aa34567891123456789212345678931234567894123456789512345678961234",
		),
	).toBe(true);
	expect(
		isValidPassword(
			"Aa345678911234567892123456789312345678941234567895123456789612345",
		),
	).toBe(false);

	// 半角英数字のみ
	expect(isValidPassword("!")).toBe(false);
	expect(isValidPassword("@")).toBe(false);
	expect(isValidPassword("#")).toBe(false);
	expect(isValidPassword("$")).toBe(false);
	expect(isValidPassword("%")).toBe(false);
	expect(isValidPassword("(")).toBe(false);
	expect(isValidPassword(")")).toBe(false);
	expect(isValidPassword("\\")).toBe(false);
	expect(isValidPassword('"')).toBe(false);
	expect(isValidPassword("'")).toBe(false);
	expect(isValidPassword("`")).toBe(false);
	expect(isValidPassword("理")).toBe(false);

	// 大文字、小文字、数字を含む
	expect(isValidPassword("12345678")).toBe(false);
	expect(isValidPassword("ABCDEFGH")).toBe(false);
	expect(isValidPassword("abcdefgh")).toBe(false);
	expect(isValidPassword("12345abc")).toBe(false);
	expect(isValidPassword("12345ABC")).toBe(false);
	expect(isValidPassword("ABCDabcd")).toBe(false);
	expect(isValidPassword("ABCabc12")).toBe(true);
});
