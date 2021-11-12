export interface IModalState {
  isPopup: boolean;
  setPopupName: null | string;
}

export enum ModalActionTypes {
  IS_POPUP = 'IS_POPUP',
  SET_POPUP_NAME = 'SET_POPUP_NAME',
}

interface IFetchProductsAction {
  type: ProductActionTypes.FETCH_PRODUCTS;
}

interface IFetchProductsSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: IItems[];
}

export type ProductAction = IFetchProductsAction | IFetchProductsSuccessAction;
