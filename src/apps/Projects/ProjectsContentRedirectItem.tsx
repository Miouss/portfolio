import { ReactNode } from "react";
import { Item } from "../../styles";

interface Props {
  redirect: string;
  Icon: ReactNode;
  fsresp: number;
}

export default function RedirectItem({ redirect, Icon, fsresp }: Props) {
  return (
    <Item
      fsresp={fsresp}
      onClick={() => window.open(redirect, "_blank")}
      formTarget="_blank"
    >
      {Icon}
    </Item>
  );
}
