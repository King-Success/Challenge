const sources = [
  {
    code: '',
    name: 'Source',
  },
  {
    code: 'abc-news',
    name: 'ABC News',
  },
  {
    code: 'abc-news-au',
    name: 'ABC News (AU)',
  },
  {
    code: 'aftenposten',
    name: 'Aftenposten',
  },
  {
    code: 'al-jazeera-english',
    name: 'Al Jazeera English',
  },
  {
    code: 'ansa',
    name: 'ANSA.it',
  },
  {
    code: 'argaam',
    name: 'Argaam',
  },
  {
    code: 'ars-technica',
    name: 'Ars Technica',
  },
  {
    code: 'ary-news',
    name: 'Ary News',
  },
  {
    code: 'associated-press',
    name: 'Associated Press',
  },
  {
    code: 'australian-financial-review',
    name: 'Australian Financial Review',
  },
  {
    code: 'axios',
    name: 'Axios',
  },
  {
    code: 'bbc-news',
    name: 'BBC News',
  },
  {
    code: 'bbc-sport',
    name: 'BBC Sport',
  },
  {
    code: 'bild',
    name: 'Bild',
  },
  {
    code: 'blasting-news-br',
    name: 'Blasting News (BR)',
  },
  {
    code: 'bleacher-report',
    name: 'Bleacher Report',
  },
  {
    code: 'bloomberg',
    name: 'Bloomberg',
  },
  {
    code: 'breitbart-news',
    name: 'Breitbart News',
  },
  {
    code: 'business-insider',
    name: 'Business Insider',
  },
  {
    code: 'business-insider-uk',
    name: 'Business Insider (UK)',
  },
  {
    code: 'buzzfeed',
    name: 'Buzzfeed',
  },
  {
    code: 'cbc-news',
    name: 'CBC News',
  },
  {
    code: 'cbs-news',
    name: 'CBS News',
  },
  {
    code: 'cnbc',
    name: 'CNBC',
  },
  {
    code: 'cnn',
    name: 'CNN',
  },
  {
    code: 'cnn-es',
    name: 'CNN Spanish',
  },
  {
    code: 'crypto-coins-news',
    name: 'Crypto Coins News',
  },
  {
    code: 'daily-mail',
    name: 'Daily Mail',
  },
  {
    code: 'der-tagesspiegel',
    name: 'Der Tagesspiegel',
  },
  {
    code: 'die-zeit',
    name: 'Die Zeit',
  },
  {
    code: 'el-mundo',
    name: 'El Mundo',
  },
  {
    code: 'engadget',
    name: 'Engadget',
  },
  {
    code: 'entertainment-weekly',
    name: 'Entertainment Weekly',
  },
  {
    code: 'espn',
    name: 'ESPN',
  },
  {
    code: 'espn-cric-info',
    name: 'ESPN Cric Info',
  },
  {
    code: 'financial-post',
    name: 'Financial Post',
  },
  {
    code: 'focus',
    name: 'Focus',
  },
  {
    code: 'football-italia',
    name: 'Football Italia',
  },
  {
    code: 'fortune',
    name: 'Fortune',
  },
  {
    code: 'four-four-two',
    name: 'FourFourTwo',
  },
  {
    code: 'fox-news',
    name: 'Fox News',
  },
  {
    code: 'fox-sports',
    name: 'Fox Sports',
  },
  {
    code: 'globo',
    name: 'Globo',
  },
  {
    code: 'google-news',
    name: 'Google News',
  },
  {
    code: 'google-news-ar',
    name: 'Google News (Argentina)',
  },
  {
    code: 'google-news-au',
    name: 'Google News (Australia)',
  },
  {
    code: 'google-news-br',
    name: 'Google News (Brasil)',
  },
  {
    code: 'google-news-ca',
    name: 'Google News (Canada)',
  },
  {
    code: 'google-news-fr',
    name: 'Google News (France)',
  },
  {
    code: 'google-news-in',
    name: 'Google News (India)',
  },
  {
    code: 'google-news-is',
    name: 'Google News (Israel)',
  },
  {
    code: 'google-news-it',
    name: 'Google News (Italy)',
  },
  {
    code: 'google-news-ru',
    name: 'Google News (Russia)',
  },
  {
    code: 'google-news-sa',
    name: 'Google News (Saudi Arabia)',
  },
  {
    code: 'google-news-uk',
    name: 'Google News (UK)',
  },
  {
    code: 'goteborgs-posten',
    name: 'Göteborgs-Posten',
  },
  {
    code: 'gruenderszene',
    name: 'Gruenderszene',
  },
  {
    code: 'hacker-news',
    name: 'Hacker News',
  },
  {
    code: 'handelsblatt',
    name: 'Handelsblatt',
  },
  {
    code: 'ign',
    name: 'IGN',
  },
  {
    code: 'il-sole-24-ore',
    name: 'Il Sole 24 Ore',
  },
  {
    code: 'independent',
    name: 'Independent',
  },
  {
    code: 'infobae',
    name: 'Infobae',
  },
  {
    code: 'info-money',
    name: 'InfoMoney',
  },
  {
    code: 'la-gaceta',
    name: 'La Gaceta',
  },
  {
    code: 'la-nacion',
    name: 'La Nacion',
  },
  {
    code: 'la-repubblica',
    name: 'La Repubblica',
  },
  {
    code: 'le-monde',
    name: 'Le Monde',
  },
  {
    code: 'lenta',
    name: 'Lenta',
  },
  {
    code: 'lequipe',
    name: 'Lequipe',
  },
  {
    code: 'les-echos',
    name: 'Les Echos',
  },
  {
    code: 'liberation',
    name: 'Libération',
  },
  {
    code: 'marca',
    name: 'Marca',
  },
  {
    code: 'mashable',
    name: 'Mashable',
  },
  {
    code: 'medical-news-today',
    name: 'Medical News Today',
  },
  {
    code: 'metro',
    name: 'Metro',
  },
  {
    code: 'mirror',
    name: 'Mirror',
  },
  {
    code: 'msnbc',
    name: 'MSNBC',
  },
  {
    code: 'mtv-news',
    name: 'MTV News',
  },
  {
    code: 'mtv-news-uk',
    name: 'MTV News (UK)',
  },
  {
    code: 'national-geographic',
    name: 'National Geographic',
  },
  {
    code: 'national-review',
    name: 'National Review',
  },
  {
    code: 'nbc-news',
    name: 'NBC News',
  },
  {
    code: 'news24',
    name: 'News24',
  },
  {
    code: 'new-scientist',
    name: 'New Scientist',
  },
  {
    code: 'news-com-au',
    name: 'News.com.au',
  },
  {
    code: 'newsweek',
    name: 'Newsweek',
  },
  {
    code: 'new-york-magazine',
    name: 'New York Magazine',
  },
  {
    code: 'next-big-future',
    name: 'Next Big Future',
  },
  {
    code: 'nfl-news',
    name: 'NFL News',
  },
  {
    code: 'nhl-news',
    name: 'NHL News',
  },
  {
    code: 'nrk',
    name: 'NRK',
  },
  {
    code: 'politico',
    name: 'Politico',
  },
  {
    code: 'polygon',
    name: 'Polygon',
  },
  {
    code: 'rbc',
    name: 'RBC',
  },
  {
    code: 'recode',
    name: 'Recode',
  },
  {
    code: 'reddit-r-all',
    name: 'Reddit /r/all',
  },
  {
    code: 'reuters',
    name: 'Reuters',
  },
  {
    code: 'rt',
    name: 'RT',
  },
  {
    code: 'rte',
    name: 'RTE',
  },
  {
    code: 'rtl-nieuws',
    name: 'RTL Nieuws',
  },
  {
    code: 'sabq',
    name: 'SABQ',
  },
  {
    code: 'spiegel-online',
    name: 'Spiegel Online',
  },
  {
    code: 'svenska-dagbladet',
    name: 'Svenska Dagbladet',
  },
  {
    code: 't3n',
    name: 'T3n',
  },
  {
    code: 'talksport',
    name: 'TalkSport',
  },
  {
    code: 'techcrunch',
    name: 'TechCrunch',
  },
  {
    code: 'techcrunch-cn',
    name: 'TechCrunch (CN)',
  },
  {
    code: 'techradar',
    name: 'TechRadar',
  },
  {
    code: 'the-american-conservative',
    name: 'The American Conservative',
  },
  {
    code: 'the-globe-and-mail',
    name: 'The Globe And Mail',
  },
  {
    code: 'the-hill',
    name: 'The Hill',
  },
  {
    code: 'the-hindu',
    name: 'The Hindu',
  },
  {
    code: 'the-huffington-post',
    name: 'The Huffington Post',
  },
  {
    code: 'the-irish-times',
    name: 'The Irish Times',
  },
  {
    code: 'the-jerusalem-post',
    name: 'The Jerusalem Post',
  },
  {
    code: 'the-lad-bible',
    name: 'The Lad Bible',
  },
  {
    code: 'the-new-york-times',
    name: 'The New York Times',
  },
  {
    code: 'the-next-web',
    name: 'The Next Web',
  },
  {
    code: 'the-sport-bible',
    name: 'The Sport Bible',
  },
  {
    code: 'the-telegraph',
    name: 'The Telegraph',
  },
  {
    code: 'the-times-of-india',
    name: 'The Times of India',
  },
  {
    code: 'the-verge',
    name: 'The Verge',
  },
  {
    code: 'the-wall-street-journal',
    name: 'The Wall Street Journal',
  },
  {
    code: 'the-washington-post',
    name: 'The Washington Post',
  },
  {
    code: 'the-washington-times',
    name: 'The Washington Times',
  },
  {
    code: 'time',
    name: 'Time',
  },
  {
    code: 'usa-today',
    name: 'USA Today',
  },
  {
    code: 'vice-news',
    name: 'Vice News',
  },
  {
    code: 'wired',
    name: 'Wired',
  },
  {
    code: 'wired-de',
    name: 'Wired.de',
  },
  {
    code: 'wirtschafts-woche',
    name: 'Wirtschafts Woche',
  },
  {
    code: 'xinhua-net',
    name: 'Xinhua Net',
  },
  {
    code: 'ynet',
    name: 'Ynet',
  },
];

export default sources;
