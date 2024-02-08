import PublicationDetails from "src/pages/publications/publications.vue";
import PersonDetails from "src/pages/person/person.vue";
import ProjectInfo from "src/pages/projects-description/ProjectInfo.vue";
const routes = [
  {
    path: "/",
    component: () => import("pages/Index.vue"),
    children: [],
  },
  {
    path: "/publications",
    component: PublicationDetails,
    name: "publications",
    children: [],
  },
  {
    path: "/people/:name",
    component: PersonDetails,
    name: "people",
    children: [],
  },
  {
    path: "/project/:name",
    component: ProjectInfo,
    name: "project",
    children: [],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
