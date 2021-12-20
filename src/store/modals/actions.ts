import { Dispatch } from 'redux';
import { ModalAction, ModalActionTypes } from './actionTypes';

export const isPopup = (is_popup: boolean): ModalAction => {
  return {
    type: ModalActionTypes.IS_POPUP,
    payload: is_popup,
  };
};
