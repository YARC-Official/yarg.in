import * as matter from 'gray-matter-es';

export const load = async ({ fetch, params }) => {
	let url = `https://raw.githubusercontent.com/YARC-Official/News/refs/heads/master/articles/${params.article}.md`

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Failed to fetch article: ${response.status}`);
		}
		const text = await response.text();
		let data = matter.matter(text);
		return { data };
	} catch (error) {
		console.error(error);
		return { data: null, error: error.message };
	}
};