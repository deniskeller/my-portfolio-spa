import {
  IProductState,
  ProductAction,
  ProductActionTypes,
} from '../products/actionTypes';

export const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
  isPopup: false,
  setPopupName: null,
};

export const modalReducer = (
  state: IProductState = initialState,
  action: ProductAction
): IProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return {
        loading: true,
        error: null,
        products: [],
      };

    default:
      return state;
  }
};
