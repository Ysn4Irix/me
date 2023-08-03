/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ fetch }) => {
	try {
		const res = await fetch('https://gh-pinned-repos.egoist.dev/?username=Ysn4Irix')

		if (!res.ok) return new Error(`Could not load url`)

		return {
			status: res.status,
			pinnedRepos: await res.json()
		}
	} catch (error) {
		return new Error(`Could not load url`)
	}
}
