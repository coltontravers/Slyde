import SlideView from "../pages/slide-view/SlideView";

const routes = [
    {
        path: "/",
        component: SlideView
    },
    {
        path: "/test",
        component: SlideView
    },
    {
        path: "/slide-view/:id?",
        component: SlideView
    }
];

export default routes;
