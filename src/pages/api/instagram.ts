// Instagram API endpoint example
// To use this, you'll need to set up Instagram Basic Display API
// 
// Steps:
// 1. Create a Facebook App at https://developers.facebook.com/
// 2. Add Instagram Basic Display product
// 3. Get Access Token
// 4. Set INSTAGRAM_ACCESS_TOKEN in your environment variables

export async function GET() {
	const INSTAGRAM_ACCESS_TOKEN = import.meta.env.INSTAGRAM_ACCESS_TOKEN;
	const INSTAGRAM_USER_ID = import.meta.env.INSTAGRAM_USER_ID || 'me';

	if (!INSTAGRAM_ACCESS_TOKEN) {
		// Return empty array if no token is configured
		return new Response(JSON.stringify([]), {
			headers: { 'Content-Type': 'application/json' },
		});
	}

	try {
		const response = await fetch(
			`https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_url,permalink,caption,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=5`
		);

		if (!response.ok) {
			throw new Error('Failed to fetch Instagram posts');
		}

		const data = await response.json();
		return new Response(JSON.stringify(data.data || []), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Instagram API Error:', error);
		return new Response(JSON.stringify([]), {
			headers: { 'Content-Type': 'application/json' },
			status: 500,
		});
	}
}
