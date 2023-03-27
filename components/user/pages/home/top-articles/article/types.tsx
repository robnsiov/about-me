export default interface ArticleImpl {
  title: string;
  href: string;
  date: Date;
  src: string;
  from: string;
  to: string;
  lastChild?: boolean;
}
