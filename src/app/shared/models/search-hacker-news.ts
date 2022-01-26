export interface SearchHackerNews {
  hits: { [key: string]: Object }[];
  author: string;
  comment_text: string;
}
