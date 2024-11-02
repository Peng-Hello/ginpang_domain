import type { PostHideElements } from '~/content/config';

export const Site = 'https://astro-blog-zozo.pages.dev';
export const SiteLanguage = 'zh';
export const SiteTitle = 'GinPang Domain';
export const SiteDescription = '未来,过去交叉在一起，而现在我遇见了你我的朋友';
export const FooterDescription = '无限进步';
export const AdminName = 'GinPang';
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	mail: { url: 'mailto:1936478563@qq.com' },
	github: { url: 'https://github.com/Peng-Hello' },
	youtube: { url: 'https://www.youtube.com/channel/UCGjc9_I5zeybN-H-bWrd2lg' },
	bilibili: { url: 'https://space.bilibili.com/630085607?spm_id_from=333.1007.0.0' },
	rss: { url: '/rss.xml' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'ladit/astro-blog-zozo',
	'data-repo-id': 'R_kgDOLgobXQ',
	'data-category': 'Announcements',
	'data-category-id': 'DIC_kwDOLgobXc4Cd_N6',
	'data-mapping': 'pathname',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'top',
	'data-lang': 'zh-CN',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];
