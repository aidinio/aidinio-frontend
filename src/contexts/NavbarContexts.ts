import { createContext, Dispatch, SetStateAction } from "react";

const LevelContext = createContext<number>(1);

const OpenItemContext = createContext<{
  openItem: string | null;
  setOpenItem: Dispatch<SetStateAction<string | null>> | null;
}>({ openItem: null, setOpenItem: null });

export { LevelContext, OpenItemContext };
