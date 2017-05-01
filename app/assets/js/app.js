import $ from 'jquery';
import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/reveal-on-scroll';

var menu = new MobileMenu();
//var scroll = new RevealOnScroll();
new RevealOnScroll($(".features-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");