export default interface ReactionIconImpl {
  onClick(): void;
  reaction: boolean;
  index: number;
  count: number;
  children: React.ReactNode;
}
