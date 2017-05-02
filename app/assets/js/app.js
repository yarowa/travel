import $ from 'jquery';
import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/reveal-on-scroll';
import StickyHeader from './modules/sticky-header';

var menu = new MobileMenu();
new RevealOnScroll($(".features-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var sticky = new StickyHeader();