import Home from './components/main/Home'
import WhyMissignoClones from './components/main/WhyMissignoClones'
import WhyMissignoExists from './components/main/WhyMissignoExists'
import AboutMe from './components/main/AboutMe'

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/about-me', component: AboutMe, name: 'about-me'},
    {path: '/why-missingno-clones-sixth-item', component: WhyMissignoClones, name: 'clone-sixth-item'},
    {path: '/why-missingno-exists', component: WhyMissignoExists, name: 'why-missigno-exists'},
];
