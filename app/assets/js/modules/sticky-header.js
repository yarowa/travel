import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class StickyHeader{
  constructor(){
    this.lazyImages = $(".lazyload");
    this.sticky = $(".site-header");
    this.headerTrigger = $("._title");
    this.pageSection = $(".page-section");
    this.headerLinks = $(".top-nav a");
    this.addSmoothScrolling();
    this.headerWaypoint();
    this.createPageSection();
    this.refreshWaypoints();
  }
  refreshWaypoints(){
    this.lazyImages.on("load", function(event) {
      Waypoint.refreshAll();
    });
  }
  
  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  
  headerWaypoint(){
    var that = this;
    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(direction){
        if(direction == "down"){
          that.sticky.addClass('sticky');
        }else{
          that.sticky.removeClass('sticky');
        }
      }
    });
  }

  createPageSection(){
    var thatLinks = this;
    this.pageSection.each(function(){
      var currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: function(direction){
          if(direction == "down"){
            var thatMatchs = currentSection.getAttribute("data-scroll");
            thatLinks.headerLinks.removeClass("current");
            $(thatMatchs).addClass("current");
          }
        },
        offset: "20%"
      });

      new Waypoint({
        element: currentSection,
        handler: function(direction){
          if(direction == "up"){
            var thatMatchs = currentSection.getAttribute("data-scroll");
            thatLinks.headerLinks.removeClass("current");
            $(thatMatchs).addClass("current");
          }
        },
        offset: "-60%"
      });

    });
  }
}
export default StickyHeader;