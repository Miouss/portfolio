interface GridPosition {
  col: number;
  row: number;
}

interface Icon {
  application?: React.ReactElement;
  desktop?: React.ReactElement;
  window?: React.ReactElement;
  task?: React.ReactElement;
  notif?: React.ReactElement;
}
interface Action {
  fr?: string;
  eng?: string;
}
interface App {
  name: string;
  component: React.ReactElement;
  icon: Icon;
  gridPosition: GridPosition;
  action: Action;
  isSecret?: boolean;
}
export interface AppList {
  [key: string]: App;
}

interface Shortcut {
  name: string;
  link: string;
  icon: React.ReactElement;
  gridPosition: GridPosition;
  action: Action;
}

export interface ShortcutList {
  [key: string]: Shortcut;
}
