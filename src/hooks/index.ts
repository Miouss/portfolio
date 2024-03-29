// Applications
export { default as useFocusEffect } from "./Applications/useFocusEffect";
export { default as useFullscreenEffect } from "./Applications/useFullscreenEffect";
export { default as useMinimizedEffect } from "./Applications/useMinimizedEffect";
export { default as useWindowMovingEffect } from "./Applications/useWindowMovingEffect";
export * from "./Applications/useWindowResizing";
export * from "./Applications/useResponsiveness";
export * from "./Applications/useDynamicStyle";

// Apps
export * from "./Apps/useQuitOnAnyKey";
export { default as useAudioFile } from "./Apps/useAudioFile";
export { default as useAutoScrollOnOverflow } from "./Apps/useAutoScrollOnOverflow";
export { default as useSpecialKeyHandler } from "./Apps/useSpecialKeyHandler";
export { default as useTerminalCommands } from "./Apps/useTerminalCommands";
export * from "./Apps/useRerun";

// Desktop
export { default as useContextMenuActions } from "./Desktop/useContextMenuActions";
export { default as useGridCells } from "./Desktop/useGridCells";

// MouseEvents
export { default as useCloseOnClick } from "./MouseEvents/useCloseOnClick";
export { default as useCloseOnClickAway } from "./MouseEvents/useCloseOnClickAway";
export { default as useCloseOnPointerDown } from "./MouseEvents/useCloseOnPointerDown";
export { default as useOpenContextMenuOnRightClick } from "./MouseEvents/useOpenContextMenuOnRightClick";
export { default as useOpenOnLeftClick } from "./MouseEvents/useOpenOnLeftClick";

// Store
export { default as useAddApplicationsInStore } from "./Store/useAddApplicationsInStore";
export { default as useAppStatus } from "./Store/useAppStatus";
export { default as useRunningApps } from "./Store/useRunningApps";
export { default as useRunningAppsComponents } from "./Store/useRunningAppsComponents";
export { default as useRunningAppsNonNotif } from "./Store/useRunningAppsNonNotif";
export { default as useRunningAppsNotif } from "./Store/useRunningAppsNotif";

// Misc
export { default as useDynamicComponents } from "./Misc/useDynamicComponents";
export { default as useUpdatedDate } from "./Misc/useUpdatedDate";
export { default as useSignInWall } from "./Misc/useSignInWall";

// Contexts
export { default as useIsLoggedContext } from "./Contexts/useIsLoggedContext";
export * from "./Contexts/useIsLoggedContext";
export { default as useLangContext } from "./Contexts/useLangContext";
export * from "./Contexts/useLangContext";
export { default as useLoginSessionSelectedContext } from "./Contexts/useLoginSessionSelectedContext";
export * from "./Contexts/useLoginSessionSelectedContext";
