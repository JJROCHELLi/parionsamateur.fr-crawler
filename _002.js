/*_hs_*/;var sas = sas || {};
if(sas && sas.events && sas.events.fire && typeof sas.events.fire === "function" )
        sas.events.fire("ad", { tagId: "sas_18317", formatId: 18317 }, "sas_18317");;/*_hs_*/var sas=sas||{};sas.utils=sas.utils||{},sas.events=sas.events||{},sas.rev=sas.rev||20110214,function(){sas.utils.cdns?(sas.utils.cdns["http:"]&&0!=sas.utils.cdns["http:"].length||(sas.utils.cdns["http:"]="http://ak-ns.sascdn.com"),sas.utils.cdns["https:"]&&0!=sas.utils.cdns["https:"].length||(sas.utils.cdns["https:"]="https://ec-ns.sascdn.com")):sas.utils.cdns={"http:":"http://ak-ns.sascdn.com","https:":"https://ec-ns.sascdn.com"};var t=function(){};sas.utils.getIEVersion=function(){var t=navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);return t?parseInt(t[1]):void 0},sas.events.addEvent=function(t,s,a){if(t&&s&&a)return t.attachEvent?t.attachEvent("on"+s,a):t.addEventListener&&t.addEventListener(s,a,!1),{removeEvent:function(){t.detachEvent?t.detachEvent("on"+s,a):t.removeEventListener&&t.removeEventListener(s,a,!1)}}},sas.events.addLoadEvent=function(t,s){if(t&&s){var a="load",n=function(){return!0};(sas.utils.getIEVersion()<11||t==document)&&(a="readystatechange",n=function(){if(!t.readyState||"complete"==t.readyState||"loaded"==t.readyState||4==t.readyState)return!0});var e=sas.events.addEvent(t,a,function(){n()&&(e.removeEvent(),s.apply(this,arguments))})}},sas.utils.Latch=function(t){for(var s=[],a={},n=t=t||[],e=!1,i=0;i<n.length;i++)a[t[i]]={};var l=function(){if(!e){for(var t in a)if(!a[t].status)return;e=!0;for(var n=c(),i=0;i<s.length;i++)s[i].apply(this,n)}},c=function(){for(var t=[],s=0;s<n.length;s++)t.push(a[n[s]].result);return t};this.notify=function(t,s){a[t]&&(a[t].status=!0,a[t].result=s,l())},this.addListener=function(t){null!=t&&(e?t():s.push(t))},l()},sas.utils._libs=sas.utils._libs||{};var s=function(t){"string"==typeof t&&(t=[t]);for(var s,a,n="https:"==document.location.protocol||"about:"==document.location.protocol?sas.utils.cdns["https:"]:sas.utils.cdns[document.location.protocol]||sas.utils.cdns["http:"],e=0;e<t.length;e++)t[e]=(s=n,a=t[e],"/"==s.charAt(s.length-1)&&(s=s.slice(0,-1)),"/"==a.charAt(0)&&(a=a.slice(1)),s+"/"+a);return t};sas.utils.loadLinkCdn=function(t){t=s(t);for(var a=0;a<t.length;a++)e(t[a],!0)},sas.utils.loadScriptCdn=function(t,a){t=s(t),sas.utils.loadScript(t,a)};var a=Math.floor(1e6*Math.random()),n=1;sas.utils._callbacks=sas.utils._callbacks||{};var e=function(t,s,e,i){var l,c=(s?"link":"script")+"-"+a+"-"+n++,r=document.createElement(s?"link":"script");r.id=c,r.setAttribute("type",s?"text/css":"text/javascript"),r.setAttribute(s?"href":"src",t),s&&r.setAttribute("rel","stylesheet"),!s&&e&&r.setAttribute("async","true"),sas.utils._libs[t]={loaded:!1,callbacks:[]},null!=i&&sas.utils._libs[t].callbacks.push(i),sas.utils._callbacks[c]=(l=t,function(){sas.utils._libs[l].loaded=!0;for(var t=0;t<sas.utils._libs[l].callbacks.length;t++)sas.utils._libs[l].callbacks[t]()}),s||e?(document.getElementsByTagName("head")[0].appendChild(r),sas.events.addLoadEvent(document.getElementById(c),sas.utils._callbacks[c])):(document.write(r.outerHTML),document.write("<script type='text/javascript'>(function() { sas.utils._callbacks['"+c+"'](); })();<\/script>"))};sas.utils.loadScript=function(s,a){(a=a||{}).async=null==a.async||a.async;var n=a.onLoad||t;"string"==typeof s&&(s=[s]);var i=new sas.utils.Latch(s);i.addListener(n);for(var l=0;l<s.length;l++){var c=s[l],r=function(t){return function(){i.notify(t)}}(c);sas.utils._libs[c]?sas.utils._libs[c].loaded?i.notify(c):sas.utils._libs[c].callbacks.push(r):e(c,!1,a.async,r)}}}();

(function () {
    var config = {
        insertionId: Number(8811270),
        pageId: "312149",
        sessionId: new Date().getTime(),
        baseUrl: String("https://ww691.smartadserver.com"),
        formatId: Number(18317),
        tagId: String("sas_18317"),
        oba: Number(0),
        isAsync: window.sas_ajax || false,
        customScript: String(''),
        creative: {
            id: Number(23997502),
            url: String('https://a.f1g.fr/a/FFF/FFF901_APP_JOUEURS_Display_FFF_300x600.jpg'),
            type: Number(1),
            width: Number(('300' === '100%') ? 0 : '300'),
            height: Number(('600' === '100%') ? 0 : '600'),
            alt: String(''),
            clickUrl: String('https://ww691.smartadserver.com/click?imgid=23997502&insid=8811270&pgid=312149&ckid=0&uii=305503504850583154&acd=1574022209032&pubid=10&tmstp=3723661925&tgt=%24dt%3d1t&systgt=%24qc%3d1313276323%3b%24ql%3dMedium%3b%24qpc%3d31000%3b%24qt%3d184_1684_1717t%3b%24dma%3d0%3b%24b%3d12700%3b%24o%3d99999&envtype=0&imptype=0&pgDomain=https%3a%2f%2fwww.fff.fr%2f&go=https%3a%2f%2fwww.fff.fr%2factualites%2f184709-une-appli-pour-tous-les-joueurs%3fthemePath%3dle-foot-amateur%252F%26utm_source%3demail%26utm_campaign%3ddisplayfff'),
            clickUrlArray: ["https://ww691.smartadserver.com/click?imgid=23997502&insid=8811270&pgid=312149&ckid=0&uii=305503504850583154&acd=1574022209032&pubid=10&tmstp=3723661925&tgt=%24dt%3d1t&systgt=%24qc%3d1313276323%3b%24ql%3dMedium%3b%24qpc%3d31000%3b%24qt%3d184_1684_1717t%3b%24dma%3d0%3b%24b%3d12700%3b%24o%3d99999&envtype=0&imptype=0&pgDomain=https%3a%2f%2fwww.fff.fr%2f&go=https%3a%2f%2fwww.fff.fr%2factualites%2f184709-une-appli-pour-tous-les-joueurs%3fthemePath%3dle-foot-amateur%252F%26utm_source%3demail%26utm_campaign%3ddisplayfff"],
            oryginalClickUrl: String('https://www.fff.fr/actualites/184709-une-appli-pour-tous-les-joueurs?themePath=le-foot-amateur%2F&utm_source=email&utm_campaign=displayfff'),
            clickTarget: String('_blank'),
            agencyCode: String('<img src="https://beacon.krxd.net/event.gif?event_id=Jd2KR6xV&event_type=rtg&ann_lib_id=160749&camp_lib_id=440457&ins_lib_id=8811270" width=0 height=0 style="display:none;"/>'),
            creativeCountPixelUrl: String('https://ww691.smartadserver.com/h/aip?tmstp=3723661925&ckid=0&pubid=10&systgt=%24qc%3d1313276323%3b%24ql%3dMedium%3b%24qpc%3d31000%3b%24qt%3d184_1684_1717t%3b%24dma%3d0%3b%24b%3d12700%3b%24o%3d99999&uii=305503504850583154&acd=1574022209032&envtype=0&visit=S&statid=7&tgt=%24dt%3d1t&imptype=0&pgDomain=https%3a%2f%2fwww.fff.fr%2f&capp=0&mcrdbt=0&insid=8811270&siteid=45710&imgid=23997502&pgid=312149&fmtid=18317'),
            creativeClickCountPixelUrl: (23997502 ? 'https://ww691.smartadserver.com/h/cp?imgid=23997502&insid=8811270&pgid=312149&ckid=0&uii=305503504850583154&acd=1574022209032&pubid=10&tmstp=3723661925&tgt=%24dt%3d1t&systgt=%24qc%3d1313276323%3b%24ql%3dMedium%3b%24qpc%3d31000%3b%24qt%3d184_1684_1717t%3b%24dma%3d0%3b%24b%3d12700%3b%24o%3d99999&envtype=0&imptype=0&pgDomain=https%3a%2f%2fwww.fff.fr%2f' : 'https://ww691.smartadserver.com/h/micp?imgid=0&insid=8811270&pgid=312149&ckid=0&uii=305503504850583154&acd=1574022209032&pubid=10&tmstp=3723661925&tgt=%24dt%3d1t&systgt=%24qc%3d1313276323%3b%24ql%3dMedium%3b%24qpc%3d31000%3b%24qt%3d184_1684_1717t%3b%24dma%3d0%3b%24b%3d12700%3b%24o%3d99999&envtype=0&imptype=0&pgDomain=https%3a%2f%2fwww.fff.fr%2f') + '&rtb=1&rtbbid=&rtbet=&rtblt=&rtbnid=&rtbh=',
        },
        statisticTracking: {
            rtbbid: String(''),
            rtbet: String(''),
            rtblt: String(''),
            rtbnid: String(''),
            rtbh: String('')
        }
    };

    if (!document.getElementById("sas_18317")) {
        document.write('<div id="sas_18317"><div style="display:none"></div></div>');
    } else {
        var el = document.createElement('div');
        el.style.display = 'none';
        document.getElementById('sas_18317').appendChild(el);
    }

    var sas = window.sas;
    sas.utils.cdns["http:"] = "http://ced-ns.sascdn.com";
    sas.utils.cdns["https:"] = "https://ced-ns.sascdn.com";
    //sas.utils.cdns["http:"] = "http://demo.smartadserver.com";

    sas.utils.loadScriptCdn("/diff/templates/ts/dist/banner/sas-banner-1.2.js", {
        async: config.isAsync, onLoad: function () {
            newObj8811270 = new Banner(config);
            newObj8811270.init();
        }
    });
})();