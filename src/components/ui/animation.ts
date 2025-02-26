import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export const flightAnimation = () => {
gsap.fromTo(".flight-svg",{x:100},{y:300, duration: 1})
}