import Home from './components/main/Home'
import WhyMissigno from './components/main/WhyMissigno'
import AboutMe from './components/main/AboutMe'

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/about-me', component: AboutMe, name: 'about-me' },
    { path: '/why-missigno-clones-sixth-item', component: WhyMissigno, name: 'missigno-sixth-item' },
];
