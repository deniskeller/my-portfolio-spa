import { portfolioWorks } from '@constants/portfolio/portfolio';
import {
  IModalState,
  ModalAction,
  ModalActionTypes,
} from '../modals/actionTypes';

export const initialState: IModalState = {
  isPopup: false,
  projects: portfolioWorks,
};

export const modalReducer = (
  state: IModalState = initialState,
  action: ModalAction
): IModalState => {
  switch (action.type) {
    case ModalActionTypes.IS_POPUP:
      return {
        isPopup: true,
        projects: [],
      };

    default:
      return state;
  }
};
