interface IAuthBox {
  label: string;
  fn: (values: { email: string; password: string }) => Promise<void>;
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export default IAuthBox;
