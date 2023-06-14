interface setTokenProps {
  key: string;
  value: any;
}

const setToken = ({ key, value }: setTokenProps) => {
  if (!value) return;

  localStorage.setItem(key, JSON.stringify(value));
};

export default setToken;
