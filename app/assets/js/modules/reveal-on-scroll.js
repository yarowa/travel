import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll{
  constructor(els, offset){
    this.itemsToReveal = els;
    this.offsets = offset;
    this.hideInitially();
    this.createWaypoint();
  }
  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }
  createWaypoint(){
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass('is-visible');
        },
        offset: that.offsets
      });
    });
  }
}
export default RevealOnScroll;