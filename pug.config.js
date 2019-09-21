const url = '/';
const local_url = '/';
const site_name = 'yuriko iwata portfolio';
const og_locale = 'jp_JP';
const og_type = 'website';
const twitter_card = 'summary_large_image';
const twitter_site = '@';
const title = {
	'home': 'TOPページ',
	'about': 'aboutページ',
	'product': 'Productページ',
	'contact': 'Contactページ'
};
const description = {
	'home': 'TOPページ',
	'about': 'aboutページ',
	'product': 'Productページ',
	'contact': 'Contactページ'
};
const ogimg = url+'img/ogp.png';
const favicon = '/img/favicon.ico';

module.exports = {
	"data": [
		{
			"name": 'home',
			"url": url,
			"local_url": local_url,
			"title": title['home'],
			"page_title": 'トップページ',
			"level": 1,
			"description": description['home'],
			"keywords": '',
			"favicon": favicon,
			"og": {
				"title": title['home'],
				"description": description['home'],
				"image": ogimg,
				"type": og_type,
				"locale": og_locale,
				"siteName": site_name,
				"url": url
			},
			"dev_state": 'テストアップ'
		},{
			"name": 'about',
			"url": url + 'about/index.html',
			"local_url": local_url + 'about/index.html',
			"title": title['about'],
			"page_title": 'アバウト',
			"level": 1,
			"description": description['about'],
			"keywords": '',
			"favicon": favicon,
			"og": {
				"title": title['about'],
				"description": description['about'],
				"image": ogimg,
				"type": og_type,
				"locale": og_locale,
				"siteName": site_name,
				"url": url
			},
			"dev_state": 'テストアップ'
		},{
			"name": 'product',
			"url": url + 'product/index.html',
			"local_url": local_url + 'product/index.html',
			"title": title['product'],
			"page_title": 'サイトポリシー',
			"level": 1,
			"description": description['product'],
			"keywords": '',
			"favicon": favicon,
			"og": {
				"title": title['product'],
				"description": description['product'],
				"image": ogimg,
				"type": og_type,
				"locale": og_locale,
				"siteName": site_name,
				"url": url
			},
			"dev_state": 'テストアップ'
		},{
			"name": 'contact',
			"url": url + 'contact/index.html',
			"local_url": local_url + 'contact/index.html',
			"title": title['contact'],
			"page_title": 'プライバシーポリシー',
			"level": 1,
			"description": description['contact'],
			"keywords": '',
			"favicon": favicon,
			"og": {
				"title": title['contact'],
				"description": description['contact'],
				"image": ogimg,
				"type": og_type,
				"locale": og_locale,
				"siteName": site_name,
				"url": url
			},
			"dev_state": 'テストアップ'
		}
	]
}