/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
	interface ProcessEnv {
		readonly SSR_API_URL: string;
		readonly NODE_ENV: 'development' | 'production' | 'test';
		readonly NEXT_PUBLIC_CLIENT_ID: string;
		readonly NEXT_PUBLIC_BASE_WEB_URL: string;
		readonly NEXT_PUBLIC_BASE_API_URL: string;
		readonly NEXT_PUBLIC_WS_URL: string;
	}
}

declare module '*.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}
