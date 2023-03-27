export interface Article {
  title: string;
  short_desc: string;
  slug: string;
  body: string;
  img: string;
  category: "AR" | "PR";
  created_at: Date;
  updated_at: Date;
  from_value: string;
  to_value: string;
}
export type Articles = Array<Article>;
