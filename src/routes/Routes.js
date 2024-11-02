import Home from "../pages/Home";
import ResumeMaker from "../pages/ResumeMaker";

export const routes = [
    {
        path: '',
        component: Home,
      },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/resume-maker',
      component: ResumeMaker,
    },
  ];
  