import "./style.css";
import appHtml from "./app.html?raw";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = appHtml;

document.getElementById("submit")?.addEventListener("click", () => {
	console.log("hoge");
});
