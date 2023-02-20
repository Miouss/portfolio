import { ThunkDispatch, AnyAction, Dispatch, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { RunningApp } from "../../redux";

export default function checkResponsiveness(
  currentWidth: number | undefined,
  dispatch: ThunkDispatch<{ apps: RunningApp[]; windowResponsiveFont: number; }, undefined, AnyAction> & Dispatch<AnyAction>,
  setWindowResponsiveFont: ActionCreatorWithPayload<number, "windowResponsiveFont/setWindowResponsiveFont">
) {
  if(currentWidth === undefined) return;
  
  if (currentWidth < 1720 && currentWidth >= 1540) {
    dispatch(setWindowResponsiveFont(12));
    return;
  }

  if (currentWidth < 1540 && currentWidth >= 1280) {
    dispatch(setWindowResponsiveFont(8));
    return;
  }

  if (currentWidth < 1280) {
    dispatch(setWindowResponsiveFont(6));
    return;
  }

  dispatch(setWindowResponsiveFont(16));
}
