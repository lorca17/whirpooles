"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{615:function(e,s,i){i.d(s,{Z:function(){return n}});var r=i(5893),a=i(8100);function c(e,s){(null==s||s>e.length)&&(s=e.length);for(var i=0,r=new Array(s);i<s;i++)r[i]=e[i];return r}function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,s){if(!e)return;if("string"===typeof e)return c(e,s);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(e,s)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){var s="https://productos.whirpool.es/api/".concat(e),i=(0,a.ZP)(s,(function(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return fetch.apply(void 0,l(s)).then((function(e){return e.json()}))})),c=i.data;return i.error?(0,r.jsx)("div",{children:"failed to load"}):c?(0,r.jsxs)("div",{className:"index-scope",children:[(0,r.jsx)("h2",{className:"page_heading",children:"Whirpool: Catalogo de "+e}),(0,r.jsx)("div",{className:"product-listing__index",children:(0,r.jsx)("div",{className:"product_listing_main",children:(0,r.jsx)("div",{className:"row my-5 fluid",vocab:"https://schema.org/",typeof:"ItemList",children:c.SearchResult.Items.slice(0,9).map((function(e,s){return(0,r.jsx)("div",{property:"itemListElement",typeof:"Product",className:"product col-sm-4",style:{"margin-bottom":"15px","margin-left":"0px","padding-right":"0px"},children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"product_img",style:{height:"200px"},children:(0,r.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",children:(0,r.jsx)("img",{property:"image",src:e.Images.Primary.Medium.URL,alt:e.ItemInfo.Title.DisplayValue})})}),(0,r.jsxs)("div",{className:"product_info text-center",style:{height:"200px"},children:[(0,r.jsx)("div",{className:"product_name ",children:(0,r.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",property:"name",children:e.ItemInfo.Title.DisplayValue.slice(0,80)})}),(0,r.jsx)("div",{className:"product_desc",children:(0,r.jsx)("p",{children:"by Amazon"})}),(0,r.jsxs)("div",{className:"clearfix text-center",children:[(0,r.jsxs)("span",{className:"product_price text-center",property:"offers",typeof:"Offer",children:["Desde:",(0,r.jsxs)("span",{className:"money",property:"schema:price",children:[" ",e.Offers.Listings[0].Price.DisplayAmount]})]}),(0,r.jsx)("div",{className:"product_links"})]}),(0,r.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",className:"btn btn-cart ",children:"Ver Detalles"})]})]})},s)}))})})})]}):(0,r.jsx)("div",{children:"loading..."})}},1625:function(e,s,i){var r=i(5893),a=i(1664);s.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("footer",{id:"footer",children:[(0,r.jsxs)("div",{className:"container footer_inside",children:[(0,r.jsx)("div",{className:"custom_footer custom_footer1 maxheight",children:(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("p",{children:"Informacion"}),(0,r.jsxs)("ul",{className:"list",children:[(0,r.jsx)("li",{className:"active",children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{title:"Inicio",children:"Home"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{title:"Catalogo",children:"Catalogo"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/aviso-legal/",children:(0,r.jsx)("a",{title:"Politica legal y de cookies",children:"Politica legal y de Cookies"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{title:"",children:"Contacto"})})})]})]})}),(0,r.jsx)("div",{className:"custom_footer custom_footer2 maxheight",children:(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("p",{children:"Servicio"}),(0,r.jsxs)("ul",{className:"list",children:[(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"#",title:"telefono whirpool",children:(0,r.jsx)("a",{children:"Telefono Whirpool"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"#",title:"garantia whirpool",children:(0,r.jsx)("a",{children:"Garantia Whirpool"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"#",title:"servicio tecnico",children:(0,r.jsx)("a",{children:"Servicio Tecnico"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"#",title:"servicio tecnico",children:(0,r.jsx)("a",{children:"Recambios"})})})]})]})}),(0,r.jsx)("div",{className:"custom_footer custom_footer3 maxheight",children:(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("p",{children:"Cuenta Usuarios"}),(0,r.jsxs)("ul",{className:"list",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",title:"",children:"Mi Cuenta"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",title:"",children:"Carrito Compras"})})]})]})}),(0,r.jsx)("div",{className:"custom_footer custom_footer4 maxheight",children:(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("p",{children:"Redes Sociales"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"https://twitter.com/",children:[(0,r.jsx)("i",{className:"fa fa-twitter-square"}),(0,r.jsx)("span",{children:"Twitter"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"https://www.facebook.com/",children:[(0,r.jsx)("i",{className:"fa fa-facebook-square"}),(0,r.jsx)("span",{children:"Facebook"})]})})]})]})}),(0,r.jsx)("div",{className:"custom_footer custom_footer5 maxheight",children:(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("p",{children:"Contact us"}),(0,r.jsx)("div",{children:"Wirpool Spain"}),(0,r.jsx)("div",{children:"Direccion, Calle Palacion de Madrid 23"}),(0,r.jsx)("div",{children:"(034) 919-543-825"}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"mailto:info@info",children:"info@info.org"})})]})})]}),(0,r.jsx)("div",{className:"container"})]})})}},3028:function(e,s,i){var r=i(5893),a=i(1664),c=i(444);s.Z=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{id:"header",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"header_right",children:(0,r.jsxs)("ul",{className:"header_user",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",id:"customer_login_link",children:"Log in"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",id:"customer_register_link",children:"Crear Cuenta"})})]})}),(0,r.jsxs)("div",{className:"header_left",children:[(0,r.jsx)("div",{id:"logo",children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsxs)("b",{children:[(0,r.jsx)("span",{className:"wrap-1",children:c.WB[0]}),(0,r.jsx)("span",{className:"wrap-2",children:c.WB[1]}),(0,r.jsx)("span",{children:c.WB[2]})]})})})}),(0,r.jsx)("div",{className:"header_search",children:(0,r.jsxs)("form",{action:"",method:"get",className:"search-form",role:"search",children:[(0,r.jsx)("input",{id:"search-field",name:"q",type:"text",placeholder:"Buscar aqui...",className:"hint"}),(0,r.jsx)("button",{id:"search-submit",type:"submit",children:(0,r.jsx)("i",{className:"fa fa-search",children:"Buscar"})})]})})]})]})}),(0,r.jsx)("div",{id:"navigation",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("nav",{role:"navigation",children:(0,r.jsxs)("ul",{className:"sf-menu visible-md visible-lg clearfix",children:[(0,r.jsx)("li",{className:" active",children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{children:"Inicio"})})}),(0,r.jsx)("li",{className:"",children:(0,r.jsx)(a.default,{href:"/blog",children:(0,r.jsx)("a",{children:"Blog"})})})]})})})})]})}},384:function(e,s,i){var r=i(5893),a=i(1664);s.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{id:"showcase",children:[(0,r.jsxs)("div",{className:"clearfix",children:[(0,r.jsx)("div",{className:"custom_showcase custom_showcase1",children:(0,r.jsx)(a.default,{href:"/lavavajillas/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{src:"/img/lavavajillas-whirpool.jpg",alt:"lavavajillas whirpool"}),(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("h3",{children:"Lavavajillas"}),(0,r.jsx)("p",{children:"Limpiaplatos eficientes en electricidad"}),(0,r.jsx)("div",{className:"btn",children:"Comprar"})]})]})})}),(0,r.jsx)("div",{className:"custom_showcase custom_showcase2",children:(0,r.jsx)(a.default,{href:"/secadora/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{src:"/img/secadoras-whirpool.jpg",alt:"secadora whirpool"}),(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("h3",{children:"Secadora"}),(0,r.jsx)("p",{children:"Seca tu ropa con delicadeza"}),(0,r.jsx)("div",{className:"btn",children:"Comprar"})]})]})})}),(0,r.jsx)("div",{className:"custom_showcase custom_showcase3",children:(0,r.jsx)(a.default,{href:"/horno/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{src:"/img/hornos-whirpool.jpg",alt:"hornos whirpool"}),(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("h3",{children:"Hornos"}),(0,r.jsx)("p",{children:"Cocina rapido y rico"}),(0,r.jsx)("div",{className:"btn",children:"Comprar"})]})]})})})]}),(0,r.jsxs)("div",{className:"clearfix showcase-border",children:[(0,r.jsx)("div",{className:"custom_showcase custom_showcase4",children:(0,r.jsx)(a.default,{href:"/frigorifico/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{src:"/img/frigorificos-whirpool.jpg",alt:"frigorificos whirpool"}),(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("h3",{children:"Frigorificos"}),(0,r.jsx)("p",{children:"Alimentos siempre en buen estado"}),(0,r.jsx)("div",{className:"btn",children:"Comprar"})]})]})})}),(0,r.jsx)("div",{className:"custom_showcase custom_showcase5",children:(0,r.jsx)(a.default,{href:"/aire-acondicionado/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{src:"/img/aire-acondicionado-whirpool.jpg",alt:"aire acondicionado whirpool"}),(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("h3",{children:"Aire Acondicionado"}),(0,r.jsx)("p",{children:"Temperatura ideal"}),(0,r.jsx)("div",{className:"btn",children:"Comprar"})]})]})})}),(0,r.jsx)("div",{className:"custom_showcase custom_showcase6",children:(0,r.jsx)(a.default,{href:"/microondas/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{src:"/img/microondas-whirpool.jpg",alt:"microondas whirpool"}),(0,r.jsxs)("div",{className:"inside",children:[(0,r.jsx)("h3",{children:"Microondas"}),(0,r.jsx)("p",{children:"Platos deliciosos en pocos minutos"}),(0,r.jsx)("div",{className:"btn",children:"Comprar"})]})]})})})]})]})})}},5444:function(e,s,i){var r=i(5893);s.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"index-scope",children:[(0,r.jsx)("h2",{className:"page_heading",children:"Whirpool Catalogo de Novedades"}),(0,r.jsxs)("div",{className:"product-listing__index",children:[(0,r.jsx)("div",{className:"product_listing_main",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"product col-sm-4",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"product_img",children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("img",{src:"/img/whirpool-pacw212co.jpg",alt:"whirpool pacw212co"})})}),(0,r.jsxs)("div",{className:"product_info",children:[(0,r.jsx)("div",{className:"product_name",children:(0,r.jsx)("a",{href:"#",children:"whirpool pacw212co"})}),(0,r.jsx)("div",{className:"product_desc",children:(0,r.jsx)("p",{children:"Aire acondicionado portatil"})}),(0,r.jsxs)("div",{className:"clearfix",children:[(0,r.jsxs)("span",{className:"product_price",children:["Desde:",(0,r.jsx)("span",{className:"money",children:" 300\u20ac"})]}),(0,r.jsx)("div",{className:"product_links",children:(0,r.jsxs)("form",{method:"post",action:"#",children:[(0,r.jsx)("input",{type:"hidden",name:"id",value:"1524502851"}),(0,r.jsx)("button",{className:"btn btn-cart",type:"submit",children:"Ver Detalles"})]})})]})]})]})}),(0,r.jsx)("div",{className:"product col-sm-4",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"product_img",children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("img",{src:"/img/microondas-grill-whirpool-mwp203sb.jpg",alt:"microondas con grill whirpool mwp203sb"})})}),(0,r.jsxs)("div",{className:"product_info",children:[(0,r.jsx)("div",{className:"product_name",children:(0,r.jsx)("a",{href:"#",children:"microondas con grill whirpool mwp203sb"})}),(0,r.jsx)("div",{className:"product_desc",children:(0,r.jsx)("p",{children:"Microondas con funcion grill"})}),(0,r.jsxs)("div",{className:"clearfix",children:[(0,r.jsx)("span",{className:"product_price",children:(0,r.jsx)("span",{className:"money",children:"190\u20ac"})}),(0,r.jsx)("div",{className:"product_links",children:(0,r.jsxs)("form",{method:"post",action:"",children:[(0,r.jsx)("input",{type:"hidden",name:"id",value:"714777415"}),(0,r.jsx)("button",{className:"btn btn-cart",type:"submit",children:"Ver Detalles"})]})})]})]})]})}),(0,r.jsx)("div",{className:"product col-sm-4",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"product_img",children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("img",{src:"/img/whirpool-amw490-ix.jpg",alt:"whirpool amw490 ix"})})}),(0,r.jsxs)("div",{className:"product_info",children:[(0,r.jsx)("div",{className:"product_name",children:(0,r.jsx)("a",{href:"#",children:"whirpool amw490 ix"})}),(0,r.jsx)("div",{className:"product_desc",children:(0,r.jsx)("p",{children:"Microondas integrable de dise\xf1o elegante"})}),(0,r.jsxs)("div",{className:"clearfix",children:[(0,r.jsx)("span",{className:"product_price",children:(0,r.jsx)("span",{className:"money",children:"150\u20ac"})}),(0,r.jsx)("div",{className:"product_links",children:(0,r.jsxs)("form",{method:"post",action:"#",children:[(0,r.jsx)("input",{type:"hidden",name:"id",value:"714777627"}),(0,r.jsx)("button",{className:"btn btn-cart",type:"submit",children:"Ver Detalles"})]})})]})]})]})})]})}),(0,r.jsx)("div",{className:"product_listing_main",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"product col-sm-4",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"product_img",children:(0,r.jsxs)("a",{href:"#",children:[(0,r.jsx)("img",{src:"/img/whirpool-at325.jpg",alt:"whirpool at325"}),(0,r.jsx)("div",{className:"sale",children:"Ahorra 20%"})]})}),(0,r.jsxs)("div",{className:"product_info",children:[(0,r.jsx)("div",{className:"product_name",children:(0,r.jsx)("a",{href:"#",children:"whirpool at325"})}),(0,r.jsx)("div",{className:"product_desc",children:(0,r.jsx)("p",{children:"Microondas Whirpoll en oferta"})}),(0,r.jsxs)("div",{className:"clearfix",children:[(0,r.jsxs)("span",{className:"product_price",children:[(0,r.jsx)("span",{className:"money",children:"399\u20ac"}),(0,r.jsx)("span",{className:"money compare-at-price",children:"500\u20ac"})]}),(0,r.jsx)("div",{className:"product_links",children:(0,r.jsxs)("form",{method:"post",action:"#",children:[(0,r.jsx)("input",{type:"hidden",name:"id",value:"714777895"}),(0,r.jsx)("button",{className:"btn btn-cart",type:"submit",children:"Ver Detalles"})]})})]})]})]})}),(0,r.jsx)("div",{className:"product col-sm-4",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"product_img",children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("img",{src:"/img/whirpool-awoc-9253.jpg",alt:"whirpool awoc 9253"})})}),(0,r.jsxs)("div",{className:"product_info",children:[(0,r.jsx)("div",{className:"product_name",children:(0,r.jsx)("a",{href:"#",children:"whirpool awoc 9253"})}),(0,r.jsx)("div",{className:"product_desc",children:(0,r.jsx)("p",{children:"Lavadora eficiente y dise\xf1ada para prendas delicadas"})}),(0,r.jsxs)("div",{className:"clearfix",children:[(0,r.jsx)("span",{className:"product_price",children:(0,r.jsx)("span",{className:"money",children:"520\u20ac"})}),(0,r.jsx)("div",{className:"product_links",children:(0,r.jsxs)("form",{method:"post",action:"#",children:[(0,r.jsx)("input",{type:"hidden",name:"id",value:"714778151"}),(0,r.jsx)("button",{className:"btn btn-cart",type:"submit",children:"Ver Detalles"})]})})]})]})]})}),(0,r.jsx)("div",{className:"product col-sm-4",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"product_img",children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("img",{src:"/img/whirpool-mwf-427-sl.jpg",alt:"whirpool mwf 427 sl"})})}),(0,r.jsxs)("div",{className:"product_info",children:[(0,r.jsx)("div",{className:"product_name",children:(0,r.jsx)("a",{href:"#",children:"whirpool mwf 427 sl"})}),(0,r.jsx)("div",{className:"product_desc",children:(0,r.jsx)("p",{children:"Microondas elegante de color negro"})}),(0,r.jsxs)("div",{className:"clearfix",children:[(0,r.jsx)("span",{className:"product_price",children:(0,r.jsx)("span",{className:"money",children:"170\u20ac"})}),(0,r.jsx)("div",{className:"product_links",children:(0,r.jsxs)("form",{method:"post",action:"#",children:[(0,r.jsx)("input",{type:"hidden",name:"id",value:"714778347"}),(0,r.jsx)("button",{className:"btn btn-cart",type:"submit",children:"Ver Detalles"})]})})]})]})]})})]})})]})]})})}},444:function(e){e.exports=JSON.parse('{"WB":["wir","pool",".es"],"Ch":["lavavajillas","secadora","horno","frigorifico","aire acondicionado","nevera","lavadoras","microondas","placa induccion"]}')}}]);