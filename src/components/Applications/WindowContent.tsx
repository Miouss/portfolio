import { AppComponent } from "../../apps";

interface Props {
  appName: string;
}

export default function Content({ appName }: Props) {
  return <AppComponent name={appName} />;
}
