(function() {
	var ct = window.ct = {};
	var jp = window.jp = {};
	var adData;
	var ck;

	ct.showAd = function(div, slotId) {
		var iframe = document.createElement('iframe');
		iframe.src = 'http://download.cloudmobi.net/adsource/ad.html?slot_id=' + slotId;
		iframe.width = '100%';
		iframe.height = '100%';
		iframe.frameBorder = '0';
		iframe.scrolling = 'none';
		iframe.setAttribute('allowtransparency', 'true');
		document.getElementById(div).appendChild(iframe);
	};

	ct.getAds = function(slotId,callback,num) {
		var platform = getPlatform();
		ck = getCookie('ck');
		if (!ck) {
			ck = createCookie();
			setCookie('ck', ck, 15);
		} 
		// jp.addScriptTag('http://api.cloudmobi.net:20001/api/v1/jstag_native/get?callback=jp.getadsData&slot=' + slotId + '&adnum=' + num + "&ck=" + ck + "&platform=" + platform);
		jp.addScriptTag('http://54.254.170.35:20001/api/v1/jstag_native/get?callback=jp.getadsData&slot=' + slotId + '&adnum=' + num + "&ck=" + ck + "&platform=" + platform);
		document.getElementById('adData').onload = function() {
			callback(adData);
		}
	}

	jp.getadsData = function(data) {
		var ads = [],
			impEleCon = document.createElement('div');

		impEleCon.style.display = 'none';
		document.body.appendChild(impEleCon);
		if (data.err_no === 0) {
			var ad_list = data.ad_list;
			for (var i = 0; i < ad_list.length; i++) {
				ads[i] = {};
				ads[i].icon = ad_list[i].native_adobj.icon;
				ads[i].title = ad_list[i].native_adobj.title;
				ads[i].image = ad_list[i].native_adobj.image;
				ads[i].desc = ad_list[i].native_adobj.desc;
				ads[i].button = ad_list[i].native_adobj.button;
				ads[i].rank = ad_list[i].native_adobj.star;
				ads[i].button = ad_list[i].native_adobj.button;
				ads[i].clkUrl = ad_list[i].clk_url;
				
				var impEle = document.createElement('div');
				for(var j = 0; j < ad_list[i].imp_tk_url.length; j++) {
					if(ad_list[i].imp_tk_url[j]) {
						var impm = document.createElement('img');
						impm.style.cssText = 'width: 1px; height: 1px; border: 0;';
						impm.src = ad_list[i].imp_tk_url[j];
						impEle.appendChild(impm);
					}
				}
				impEleCon.appendChild(impEle);
			}
			adData = ads;
		}	
	}

	jp.addScriptTag = function(src) {
		var script = document.createElement('script');
	    script.setAttribute("type","text/javascript");
	    script.src = src;
	    script.id = 'adData';
	    document.body.appendChild(script);
	} 

	function getPlatform() {
		var ua = navigator.userAgent;
		if (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) { 
			return 'Android';
		} 
		if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) { 
			return 'iOS';
		}
	} 
		
	function setCookie(sName,value,iDay){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie = sName+'='+value+';expires='+oDate;	
	}
	
	function getCookie(sName){	
		var arr = document.cookie.split('; ');
		for(var i=0; i<arr.length; i++){
			var arr2 = arr[i].split('=');
			if(arr2[0] == sName){
				return arr2[1];
			}	
		}
		return '';
	}

	function createCookie() {
		var newdate = new Date();
		return newdate.getTime() + '-' + Math.ceil(Math.random()*1000) + '-' + Math.ceil(Math.random()*1000) + '-' + Math.ceil(Math.random()*1000);
	}
})();

