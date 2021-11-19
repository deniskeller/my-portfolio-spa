export interface IModalState {
  isPopup: boolean;
  setPopupName: null | string;
}

export enum ModalActionTypes {
  IS_POPUP = 'IS_POPUP',
  SET_POPUP_NAME = 'SET_POPUP_NAME',
}

interface IIsPopup {
  type: ModalActionTypes.IS_POPUP;
  payload: Boolean;
}

interface ISetPopupName {
  type: ModalActionTypes.SET_POPUP_NAME;
  payload: null | string;
}

export type ModalAction = IIsPopup | ISetPopupName;
