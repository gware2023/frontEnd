import {recoilPersist} from "recoil-persist";
import {atom} from "recoil";


type userType = {
  jwt: string,
  refresh: string,
}


const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const {persistAtom} = recoilPersist({
  key: 'useState',
  storage: sessionStorage,
});

export const userStateAtom = atom<userType>({
  key: 'userStateAtom',
  default: {
    jwt: "",
    refresh: ""
  },
  effects_UNSTABLE: [persistAtom],
});