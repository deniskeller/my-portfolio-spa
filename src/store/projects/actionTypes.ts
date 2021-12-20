export interface IEn {
  en: string;
  ru: string;
}

export interface IRu extends IEn {}

export interface IProjectItem {
  id: number;
  title: string;
  description: IEn;
  scope_of_work: IRu;
  technologies: string[];
  images: string[];
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
