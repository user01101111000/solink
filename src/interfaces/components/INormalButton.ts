interface INormalButton<T> {
  label: string;
  fn: (e?: T) => void;
}

export default INormalButton;
