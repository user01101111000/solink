interface IAuthBox {
  label: string;
  fn: (values: { email: string; password: string }) => Promise<void>;
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
  isRegister: boolean;
}

export default IAuthBox;
