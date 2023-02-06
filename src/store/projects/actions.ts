// import axios from "axios";
import { portfolioWorks } from '@constants/portfolio/portfolio';
import { Dispatch } from 'redux';
import { ProjectAction, ProjectActionTypes, IProjectItem } from './actionTypes';

export const fetchProjects = () => {
  return async (dispatch: Dispatch<ProjectAction>) => {
    try {
      dispatch(fetchProjectsAction());
      // const response = await axios.get("/");
      // const data: IProjectItem[] = response.data;
      const data: IProjectItem[] = portfolioWorks;
      dispatch(fetchProjectsSuccessAction(data));
    } catch (error) {
      dispatch(fetchProjectsErrorAction('Что-то пошло не так...'));
    }
  };
};

export const fetchProjectsAction = (): ProjectAction => {
  return {
    type: ProjectActionTypes.FETCH_PROJECTS,
  };
};

export const fetchProjectsSuccessAction = (
  data: IProjectItem[]
): ProjectAction => {
  return {
    type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: data,
  };
};

export const fetchProjectsErrorAction = (error: string): ProjectAction => {
  return {
    type: ProjectActionTypes.FETCH_PROJECTS_ERROR,
    payload: error,
  };
};
