/**
 * ユーザー名
 * 半角英数字 1~64 字
 * @returns true が OK
 */
export const isValidUserName = (str: string): boolean => {
	return /^[A-Za-z0-9]{1,64}$/.test(str);
};

/**
 * パスワード
 * 半角英数字 8~64 字
 * 大文字、小文字、数字をそれぞれ1つ以上含む
 * @returns true が OK
 */
export const isValidPassword = (str: string): boolean => {
	if (!/^[A-Za-z0-9]{8,64}$/.test(str)) {
		return false;
	}
	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(str);
};
