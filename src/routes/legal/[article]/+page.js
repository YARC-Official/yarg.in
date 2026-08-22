export const load = async ({ fetch, params }) => {
	let url = `https://raw.githubusercontent.com/YARC-Official/legal-articles/refs/heads/master/${params.article}.md`

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Failed to fetch article: ${response.status}`);
		}
		const data = await response.text();
		return { data };
	} catch (error) {
		console.error(error);
		return { data: null, error: error.message };
	}
};