const CONTRIBUTORS_SOURCE = "https://raw.githubusercontent.com/YARC-Official/Contributors/refs/heads/master/contributors.json";

export async function getContributors() {
	const response = await fetch(CONTRIBUTORS_SOURCE).then((res) => res.json());
	return response;
}