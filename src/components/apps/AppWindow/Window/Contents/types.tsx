interface GridPostion {
  col: number;
  row: number;
}

interface Icon {
  desktop: React.ReactElement;
  window: React.ReactElement;
  task: React.ReactElement;
}

export interface AppList {
  name: string;
  component: React.ReactElement;
  icon: Icon;
  gridPostion: GridPostion;
}

export interface ShortcutList {
  name: string;
  link: string;
  icon: React.ReactElement;
  gridPostion: GridPostion;
}
