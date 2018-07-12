/*  
    Javascript interface of Cordova plugin for TalkingData Analytics SDK 
*/

var TalkingData = {

    init:function(appKey, channelId, success, error) {
      var name = document.getElementsByName("title")[0].text;
      var version = "0.0.1";

      var script=document.createElement("script");
      // script.setAttribute("type", "text/javascript");
      script.setAttribute("src", "http://sdk.talkingdata.com/app/h5/v1?appid=" + appKey + "&vn=" + name + "&vc=" + version);
      document.getElementsByTagName("head")[0].appendChild(script);
    },

    // 触发自定义事件
    // eventId   : 自定义事件的 eventId
    onEvent:function(eventId, success, error) {
        // cordova.exec(success, error, "TalkingData", "onEvent", [eventId]);
      if (window['TDAPP']) {
        window['TDAPP'].onEvent(id);
        if (success) success('ok');
      } else {
          if (error) error("not found TDAPP")
      }
    },

    // 触发自定义事件
    // eventId   : 自定义事件的 eventId
    // eventLabel: 自定义事件的事件标签
    onEventWithLabel:function(eventId, eventLabel, success, error) {
      if (window['TDAPP']) {
        window['TDAPP'].onEvent(id, eventLabel);
        if (success) success('ok');
      } else {
        if (error) error("not found TDAPP")
      }
    },

    // 触发自定义事件
    // eventId   : 自定义事件的 eventId
    // eventLabel: 自定义事件的事件标签
    // eventData : 自定义事件的数据，Json 对象格式
    onEventWithParameters:function(eventId, eventLabel, eventData, success, error) {
      if (window['TDAPP']) {
        window['TDAPP'].onEvent(id, eventLabel, eventData);
        if (success) success('ok');
      } else {
        if (error) error("not found TDAPP")
      }
    },

    // 触发页面事件，在页面加载完毕的时候调用，记录页面名称和使用时长，一个页面调用这个接口后就不用再调用 onPageBegin 和 onPageEnd 接口了
    // pageName  : 页面自定义名称
    onPage:function(pageName) {
        this.onEventWithLabel('page', pageName);
    },

    // 触发页面事件，在页面加载完毕的时候调用，用于记录页面名称和使用时长，和 onPageEnd 配合使用
    // pageName  : 页面自定义名称
    onPageBegin:function(pageName) {
      this.onEventWithLabel('page-begin', pageName);
    },

    // 触发页面事件，在页面加载完毕的时候调用，用于记录页面名称和使用时长，和 onPageBegin 配合使用
    // pageName  : 页面自定义名称
    onPageEnd:function(pageName) {
      this.onEventWithLabel('page-end', pageName);
    }
};

module.exports = TalkingData;
