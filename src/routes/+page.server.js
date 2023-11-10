/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ fetch }) => {
	try {
		const res = await fetch('https://gh-pinned-repos-api.ysnirix.xyz/api/get?username=Ysn4Irix')

		if (!res.ok) return new Error(`Could not load url`)

		const { response } = await res.json()

		return {
			status: res.status,
			pinnedRepos: response
		}
	} catch (error) {
		return new Error(`Could not load url`)
	}
}
