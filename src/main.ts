import "./style.css";
import appHtml from "./app.html?raw";
import { isValidPassword, isValidUserName } from "./validation";

(<HTMLDivElement>document.querySelector("#app")).innerHTML = appHtml;

document.getElementById("submit")?.addEventListener("click", () => {
	const userName = (<HTMLInputElement>document.getElementById("userName"))
		.value;
	const password = (<HTMLInputElement>document.getElementById("password"))
		.value;
	if (!isValidUserName(userName)) {
		alert("ユーザー名は半角英数字1~64文字で入力してください");
		return;
	}
	if (!isValidPassword(password)) {
		alert(
			"パスワードは大文字、小文字、数字を含む半角英数字8~64文字で入力してください。",
		);
		return;
	}
	console.log({ userName, password });
	alert("登録完了!");
});
