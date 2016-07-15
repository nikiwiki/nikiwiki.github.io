window._pa = window._pa || {};
_pa.segments = [{"name":"All visitors","id":2450161,"regex":".*"},{"name":"Have Viewed Signup","id":2451058,"regex":"/a/signup/?([?#].*)*$"},{"name":"Customers","id":2450193,"regex":"/d/dashboard/?([?#].*)*$"}];
_pa.conversions = [{"name":"Sign Up","id":"491960","regex":"/a/signup\\-success/?([?#].*)*$"}];
_pa.conversionEvents = [{"name":"ckSignedUp","id":"492212"}];
_pa.segmentEvents = [{"name":"collabedit","id":2451015},{"name":"inInterview","id":2450196},{"name":"ce_OTHER","id":2452960},{"name":"ce_BEING_INTERVIEWED","id":2452961},{"name":"ce_WORKING_ON_CODE","id":2452964},{"name":"ce_CONDUCTING_INTERVIEW","id":2452957}];
_pa.thirdPartyTags = [];
_pa.thirdPartyTagEvents = [];
_pa.allVisitorsSegmentId = 2450161;
_pa.clickThroughWindow = 30;
_pa.viewThroughWindow = 30;
_pa.rtbId = '36880';
_pa.siteId = '54b8030ac7f8b76c31000106';
_pa.crossDevice = true;
!function(){function e(e,a,t){if(null==t||isNaN(t))var n=_pa.pixelHost+"seg?t=2&add="+e;else var n=_pa.pixelHost+"seg?t=2&add="+e+":"+t;_pa.createImageTag("segments",e,n,a)}function a(e){var a=_pa.paRtbHost+"seg/?add="+e;return a+="&source=js_tag",_pa.rtbId&&(a+="&a_id="+_pa.rtbId),_pa.obscureIP&&(a+="&obscure_ip=1"),a}function t(e,t){var n=a(e);g?_pa.createImageTag("paRtbSegments",e,n,t):v.push({id:e,name:t})}function n(){if(g=!0,0!==v.length){for(var e=[],t=[],n=0;n<v.length;n++){var r=v[n],p=r.id,o=r.name;e.push(p),t.push(o)}var p=e.join(","),o=t.join(","),i=a(p);_pa.createImageTag("paRtbSegments",p,i,o)}}function r(e,a,t){a=a||_pa.orderId,t=t||_pa.revenue;var n=e.id,r=e.name,p=_pa.rtbId;if(o(n,r,a,t,p),e.cofires)for(var i=0;i<e.cofires.length;i++){var c=e.cofires[i];o(c.appnexus_id,c.name,a,t,c.rtb_id)}}function p(e,a,t){var n=_pa.paRtbHost+"px/?id="+e+t;return n+="&source=js_tag",a&&(n+="&a_id="+a),_pa.obscureIP&&(n+="&obscure_ip=1"),"number"==typeof _pa.clickThroughWindow&&(n+="&click_through_window="+_pa.clickThroughWindow),"number"==typeof _pa.viewThroughWindow&&(n+="&view_through_window="+_pa.viewThroughWindow),n}function o(e,a,t,n,r){var o="";t&&""!==t&&(t=t.toString().replace(/@.*/,"@"),o+="&order_id="+encodeURIComponent(t)),n&&""!==n&&(o+="&value="+encodeURIComponent(n)),o+="&other="+function(){for(var e="",a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t=0;16>t;t++){var n=Math.floor(Math.random()*a.length);e+=a.charAt(n)}return e}();var i=_pa.pixelHost+"px?t=2&id="+e+o,c=p(e,r,o);_pa.createImageTag("conversions",e,i,a),_pa.createImageTag("paRtbConversions",e,c,a)}function i(e){switch(e.type){case"image_tag":_pa.createImageTag("thirdPartyTag",void 0,e.content,e.name);break;case"script_tag":f(e.content);break;case"script_text":l(e.content)}}function c(e){for(var a=e.shift(),t=a.split("."),n=_pa,r=0;r<t.length;r++)n=n[t[r]];var p=n.apply(_pa,e);return s(a,e),p}function s(e,a){var t=_pa.callbacks[e];if("undefined"!=typeof t)for(var n=0;n<t.length;n++)t[n].apply(_pa,a)}function d(){for(var e,a=Array.prototype.slice.call(arguments,0),t=a.shift(),n=t.split("."),r=_pa,p=0;p<n.length;p++)r=r[n[p]],e=n[p];r.apply(_pa,a),s(e,a)}function _(){var e=window.navigator.userAgent;(/MSIE 7/.test(e)||/(iPod|iPhone|iPad)/.test(e)&&/AppleWebKit/.test(e))&&(_pa.skip=!0)}function u(){var e=("https:"==document.location.protocol?"https:":"http:")+"//pixel-geo.prfct.co/tagjs",a=[];_pa.rtbId&&a.push("a_id="+_pa.rtbId),_pa.obscureIP&&a.push("obscure_ip=1"),a.push("source=js_tag"),a.length>0&&(e+="?"+a.join("&")),f(e)}function f(e){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,_pa.head.appendChild(a)}function l(e){var a=document.createElement("script");a.type="text/javascript";var t=document.createTextNode(e);a.appendChild(t),_pa.head.appendChild(a)}_pa.head=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];var g=!1,v=[];_pa.ready={looper:!1,onload:!1};var h=["conversions","paRtbConversions"];_pa.fired={segments:[],conversions:[]},_pa.url=document.location.href,_pa.pixelHost=("https:"===document.location.protocol?"https://secure":"http://ib")+".adnxs.com/",_pa.paRtbHost=("https:"===document.location.protocol?"https://":"http://")+"pixel-geo.prfct.co/",_pa.callbacks={},_(),_pa.init=function(){u(),_pa.detect(),_pa.initQ(),n()},_pa.addFired=function(e,a){"undefined"==typeof _pa.fired[e]&&(_pa.fired[e]=[]),_pa.fired[e].push(a)},_pa.detect=function(){for(var e=0;e<_pa.segments.length;e++){var a=_pa.segments[e];_pa.url.match(new RegExp(a.regex,"i"))&&d("fireSegment",a)}for(var e=0;e<_pa.conversions.length;e++){var t=_pa.conversions[e];_pa.url.match(new RegExp(t.regex,"i"))&&r(t)}for(var e=0;e<_pa.thirdPartyTags.length;e++){var n=_pa.thirdPartyTags[e];_pa.url.match(new RegExp(n.regex,"i"))&&i(n)}_pa.productId&&_pa.trackProduct(_pa.productId)},_pa.track=function(e,a){a="undefined"!=typeof a?a:{};var t=_pa.trackSegments(e,a),n=_pa.trackConversions(e,a),r=_pa.trackThirdPartyTags(e);return t||n||r},_pa.trackSegments=function(e,a){for(var t=!1,n=0;n<_pa.segmentEvents.length;n++){var r=_pa.segmentEvents[n];r.name===e&&(t=!0,d("fireSegment",r,a.segment_value))}return t},_pa.trackConversions=function(e,a){for(var t=!1,n=0;n<_pa.conversionEvents.length;n++){var p=_pa.conversionEvents[n];p.name===e&&(t=!0,r(p,a.orderId,a.revenue))}return t},_pa.trackThirdPartyTags=function(e){for(var a=!1,t=0;t<_pa.thirdPartyTagEvents.length;t++){var n=_pa.thirdPartyTagEvents[t];n.event===e&&(a=!0,i(n))}return a},_pa.trackProduct=function(e){if(e&&0!==encodeURIComponent(e).length&&(_pa.productId=e,_pa.allVisitorsSegmentId)){var t=_pa.allVisitorsSegmentId+":"+encodeURIComponent(_pa.productId),n=a(t);_pa.createImageTag("paRtbSegments",_pa.allVisitorsSegmentId,n,"product track")}},_pa.fireLoadEvents=function(){if("undefined"!=typeof _pa.onLoadEvent)if("function"==typeof _pa.onLoadEvent)_pa.onLoadEvent();else if("string"==typeof _pa.onLoadEvent)for(var e=_pa.onLoadEvent.split(","),a=0;a<e.length;a++){var t=e[a];_pa.track(t)}},_pa.createImageTag=function(e,a,t,n){if(!_pa.skip){for(var r=!1,p=0;p<h.length;p++)e===h[p]&&(r=!0);_pa.pixelPlacer.place(t,r),_pa.addFired(e,{id:a,name:n})}},_pa.looperReady=function(){_pa.ready.looper=!0,_pa.fireWhenReady()},_pa.fireWhenReady=function(){_pa.ready.looper&&_pa.ready.onload&&(_pa.fireLoadEvents(),_pa.pixelPlacer.activate())},_pa.fireSegment=function(a,n){e(a.id,a.name,n),t(a.id,a.name)},_pa.initQ=function(){if("undefined"!=typeof window._pq)for(var e=0;e<_pq.length;e++){var a=_pq[e];c(a)}window._pq={push:function(e){return c(e)}}},_pa.addListener=function(e,a){"undefined"==typeof _pa.callbacks[e]&&(_pa.callbacks[e]=[]),_pa.callbacks[e].push(a)},_pa.removeListener=function(e,a){for(var t=_pa.callbacks[e],n=t.length;n--;)t[n]===a&&t.splice(n,1)},_pa.pixelPlacer=function(){function e(){r=!0,t()}function a(e,a){r||a?n(e):p.push(e)}function t(){for(var e;e=p.pop();)n(e)}function n(e){var a=document.createElement("img");a.src=e,a.width=1,a.height=1,a.border=0,_pa.head.appendChild(a)}var r=!1,p=[];return{activate:e,place:a}}();var m={cd:function(){return _pa.crossDevice}};_pa.setPartners=function(e){var a,t,n=0;for(var r in e){if(a=e[r],t=!0,"object"==typeof a)for(var p;p<a.length;p++){var o=a[p];criteriaFunction=m[o],t=t&&criteriaFunction()}t&&("undefined"==typeof _pa.partnerLimit||n<_pa.partnerLimit)&&(_pa.pixelPlacer.place(_pa.paRtbHost+"cs/?partnerId="+r),n++)}}}();(function(){
	_pa.init();
	if (_pa.initAfterLoad) {
		if (window.document && window.document.readyState === "complete") {
			_pa.ready.onload = true;
			_pa.fireWhenReady();
		} else {
			function hookLoad(handler) {
				if(window.addEventListener) {
					window.addEventListener("load", handler, false);
				} else if(window.attachEvent) {
					window.attachEvent("onload", handler);
				}
			}
			hookLoad(function() {
				_pa.ready.onload = true;
				_pa.fireWhenReady();
			});
		}
	} else {
		_pa.ready.onload = true;
		_pa.fireWhenReady();
	}
})();
