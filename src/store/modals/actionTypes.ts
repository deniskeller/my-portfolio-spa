export interface IModalState {
  isPopup: boolean;
  projects: object[];
}

export enum ModalActionTypes {
  IS_POPUP = 'IS_POPUP',
}

interface IIsPopup {
  type: ModalActionTypes.IS_POPUP;
  payload: Boolean;
}

export type ModalAction = IIsPopup;
