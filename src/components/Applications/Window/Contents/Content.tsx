import { AppComponent } from "./list";

interface Props {
  appName: string;
}

export default function Content({ appName }: Props) {
  return <AppComponent name={appName} />;
}
