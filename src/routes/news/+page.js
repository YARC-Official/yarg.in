export const load = async ({ fetch }) => {
	let url = `https://raw.githubusercontent.com/YARC-Official/News/refs/heads/master/index.json`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Failed to fetch article: ${response.status}`);
		}
		const data = await response.json();
		return { data };
	} catch (error) {
		console.error(error);
		return { data: null, error: error.message };
	}
};