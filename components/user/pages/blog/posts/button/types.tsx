export default interface ButtonImpl {
  name: string;
  label: string;
  color: string;
  isSelected: boolean;
  setState: (active: string) => void;
}
