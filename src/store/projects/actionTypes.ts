export interface ITranslation {
  en: string;
  ru: string;
}

export interface IView {
  website: string;
  github: string;
}

export interface IProjectItem {
  id: number;
  title: string;
  description: ITranslation;
  scope_of_work: ITranslation;
  technologies: string[];
  images: string[];
  view: IView;
}

export interface IProjectState {
  projects: IProjectItem[];
  loading: boolean;
  error: null | string;
}

export enum ProjectActionTypes {
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS',
  FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_ERROR',
}

interface IFetchProjectAction {
  type: ProjectActionTypes.FETCH_PROJECTS;
}

interface IFetchProjectSuccessAction {
  type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS;
  payload: IProjectItem[];
}

interface IFetchProjectErrorAction {
  type: ProjectActionTypes.FETCH_PROJECTS_ERROR;
  payload: string;
}

export type ProjectAction =
  | IFetchProjectAction
  | IFetchProjectSuccessAction
  | IFetchProjectErrorAction;
