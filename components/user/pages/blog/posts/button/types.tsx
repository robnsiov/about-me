export default interface ButtonImpl {
  name: string;
  color: string;
  isSelected: boolean;
  setState: (active: string) => void;
}
