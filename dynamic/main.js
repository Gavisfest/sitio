/*
	Copyright © 2021 Belcar Santiago Cuentas-Zavala Infante */

import messages from "./messages.js";

const header = document.querySelector("header");

function newMessage() {
	let out;
	out = document.createElement("blockquote");
	out.innerText = "Hello, World!";
	return out;
}

header.append(newMessage());
