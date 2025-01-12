import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
	  adapter: adapter({
		runtime: 'nodejs20.x',  // specify a supported runtime version (e.g., nodejs18.x, nodejs20.x)
	  })
	}
  };