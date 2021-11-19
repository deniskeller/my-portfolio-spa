import {
  IModalState,
  ModalAction,
  ModalActionTypes,
} from '../modals/actionTypes';

export const initialState: IModalState = {
  isPopup: false,
  setPopupName: null,
};

export const modalReducer = (
  state: IModalState = initialState,
  action: ModalAction
): IModalState => {
  switch (action.type) {
    case ModalActionTypes.IS_POPUP:
      return {
        isPopup: true,
        setPopupName: null,
      };

    case ModalActionTypes.SET_POPUP_NAME:
      return {
        isPopup: true,
        setPopupName: action.payload,
      };

    default:
      return state;
  }
};
