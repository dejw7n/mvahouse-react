import React, { useEffect } from "react";

export default function CloudflareManager() {
	let data = null;
	useEffect(() => {
		// POST request using fetch inside useEffect React hook
		const requestOptions = {
			method: "POST",
			headers: { Authorization: "Bearer J6HR0AWTR915V8I1ttYjKoA5ABgFJQs8Sh7VLU-0", "Content-Type": "application/json" },
			body: JSON.stringify({ title: "React Hooks POST Request Example" }),
		};
		fetch("https://api.cloudflare.com/client/v4/user/tokens/verify", requestOptions)
			.then((response) => response.json())
			.then((data) => console.log(data));

		// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, []);
	return data;
}
