[rewrite_local]

^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))(product/info|/mobile-user/v2/homePage|/vip/v1/recommand/ts|mobile-playpage/playpage/tabs|/mobile-album/album/page/ts|mobile/v1/album/track/ts|product/promotion/v./whole/album/\d+/price/dynamic/ts|business-vip-presale-mobile-web/page/ts).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/ximalaya.js
