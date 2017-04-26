import $ from 'jquery';
class MobileMenu{
  constructor(){
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".menu-icon");
    this.menuContent = $(".menu-content");
    this.events();
  }
  events(){
    this.menuIcon.click(this.toggleMenu.bind(this));
  }
  toggleMenu(){
    this.menuContent.toggleClass('visible');
    this.siteHeader.toggleClass('expanded');
    this.menuIcon.toggleClass('close-x');
  }
}

export default MobileMenu;