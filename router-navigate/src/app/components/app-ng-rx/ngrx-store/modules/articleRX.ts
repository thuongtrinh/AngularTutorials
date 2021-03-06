
export interface ArticleRX {
  id: number;
  title: string;
  category: string;
}

export const JAVA_ARTICLES_RX: ArticleRX[] = [
  {id: 1, title: 'Java Article 1', category: 'Java'},
  {id: 2, title: 'Java Article 2', category: 'Java'},
];

export const ANGULAR_ARTICLES_RX: ArticleRX[] = [
  {id: 1, title: 'Angular Article 1', category: 'Angular'},
  {id: 2, title: 'Angular Article 2', category: 'Angular'},
];

export const FAVORITE_ARTICLES_RX: ArticleRX[] = [
  {id: 1, title: 'Java Article 1', category: 'Java'},
  {id: 2, title: 'Angular Article 2', category: 'Angular'}
];
