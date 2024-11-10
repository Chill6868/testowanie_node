async function fetchData(url: string) {
	const res = await fetch(url);

	if (!res.ok) {
		return undefined;
	} else {
		return res.json();
	}
}

export default fetchData;
