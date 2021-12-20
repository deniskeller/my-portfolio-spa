import {
  IProjectState,
  ProjectAction,
  ProjectActionTypes,
} from '../projects/actionTypes';

export const initialState: IProjectState = {
  projects: [],
  loading: false,
  error: null,
};

export const projectReducer = (
  state: IProjectState = initialState,
  action: ProjectAction
): IProjectState => {
  switch (action.type) {
    case ProjectActionTypes.FETCH_PROJECTS:
      return {
        loading: true,
        error: null,
        projects: [],
      };
    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
      return {
        loading: false,
        error: null,
        projects: action.payload,
      };
    case ProjectActionTypes.FETCH_PROJECTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        projects: [],
      };
    default:
      return state;
  }
};
