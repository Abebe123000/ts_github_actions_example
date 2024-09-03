import "./style.css";
import appHtml from "./app.html?raw";

(<HTMLDivElement>document.querySelector("#app")).innerHTML = appHtml;

document.getElementById("submit")?.addEventListener("click", () => {
	console.log("hoge");
});
