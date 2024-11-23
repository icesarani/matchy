const products = [
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Odisea",
    "precio": 41077,
    "descuento": 10,
    "cuotas": 9,
    "link_foto": "https://acdn.mitiendanube.com/stores/320/628/products/odisea-sale-2095-5435cc40063ad7b6ab17242516732703-1024-1024.webp",
    "link_publicacion": "https://www.odiseaswimwear.com.ar/productos/corpino-renata-texturado-royal/?pf=gs&variant=698882763&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUkAMhiFgMhIyDoba3uzh9vo4BURu7aZp2zjAVEb9p6cMyMhrKDbLk0aAj6wEALw_wcB"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Bikinis rio",
    "precio": 54999,
    "descuento": 10,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/095/030/products/rio-65-5e0f0d7e947e23d00617278200213342-1024-1024.jpg",
    "link_publicacion": "https://shop.bikinisrio.com/productos/top-gina-azul-cobalto-texturado/"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Love Africa",
    "precio": 50000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/002/063/245/products/conjunto-hunter-avatar-loveafrica-bikinis-06-6299543a93786b3ee317211509423001-1024-1024.webp",
    "link_publicacion": "https://www.loveafrica.com.ar/productos/corpino-hunter-avatar-2025/"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Love Africa",
    "precio": 49000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/002/063/245/products/conjunto-hunter-avatar-loveafrica-bikinis-04-a05e914046fd9a405e17315122898441-1024-1024.webp",
    "link_publicacion": "https://www.loveafrica.com.ar/productos/corpino-amber-sea-2025/"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Maiva",
    "precio": 52000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/901/308/products/edit-diana0-51-b34e0a1e523049623417268476574445-1024-1024.webp",
    "link_publicacion": "https://www.masivaoficial.com.ar/productos/corpino-baliazul/?variant=760775294&pf=mc&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUkrwc4Onf-d8LBYd0CnyCdc0PDZkOGTnA4RLW8_aRE5o78N5rQsoU8aAliUEALw_wcB"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Luz de Mar",
    "precio": 77000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://luzdemararg.vtexassets.com/arquivos/ids/183628-1200-auto?v=638615049324630000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.luzdemar.com.ar/triangulo-fijo-sunrise-basics/p?skuId=9503"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Luz de Mar",
    "precio": 78000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://luzdemararg.vtexassets.com/arquivos/ids/184638-1200-auto?v=638615862145200000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.luzdemar.com.ar/triangulo-con-argolla-urban-beachside/p?skuId=9329"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Luz de Mar",
    "precio": 92000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://luzdemararg.vtexassets.com/arquivos/ids/184428-1200-auto?v=638615860847700000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.luzdemar.com.ar/bandeau-con-hebilla-pasante-urban-beachside/p?skuId=9265"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Mumbai",
    "precio": 54999,
    "descuento": 15,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/168/738/products/img_5108-56291d23566de6024d17254745826253-1024-1024.webp",
    "link_publicacion": "https://www.mumbaibikinis.com/productos/hibiscus-corpino/"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Mumbai",
    "precio": 48999,
    "descuento": 15,
    "cuotas": 12,
    "link_foto": "https://acdn.mitiendanube.com/stores/168/738/products/img_4208-84ef558d8066fe8a4817231125693109-1024-1024.webp",
    "link_publicacion": "https://www.mumbaibikinis.com/productos/giovanna-azul-corpino/"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Selu",
    "precio": 47000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://selulen.vtexassets.com/arquivos/ids/184105-1200-auto?v=638618313788630000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.selu.com.ar/triangulo-cosmopolitan-sl10499/p?idsku=12083&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUleETpdePfxAiPcl3X5GcceAki8mIk7lwkpwCwu8oTrK-ddZ2DJrLsaAqPwEALw_wcB"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Sweet Victorian",
    "precio": 64800,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://images.ib2c.com.ar/repository/314/productsList/5083970.jpg?width=1500&height=1500&format=webp&rmode=pad&rcolor=white",
    "link_publicacion": "https://www.sweetvictorian.com.ar/producto/23133/16/myles-bikini"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "AyNotDead",
    "precio": 118000,
    "descuento": null,
    "cuotas": 12,
    "link_foto": "https://aynotdead.com/cdn/shop/files/PORTADA_BIKININEWNETAZUL3121010107_0320.jpg?v=1724441000&width=1750",
    "link_publicacion": "https://aynotdead.com/products/bikini-new-net?variant=50151818395921"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Cipitria",
    "precio": 87000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD1.1050_b9f4b71c-86da-42c0-b27e-3d4e0efdc035.jpg?v=1725565963&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-celluk-galaxia"
  },
  {
    "producto": "Bikini",
    "color": "Azul",
    "marca": "Cipitria",
    "precio": 94000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD2.2025_2cf6cb1e-4473-43a0-a36a-b66054dbb29f.jpg?v=1725568822&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-maya-galaxia"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Odisea",
    "precio": 99000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/320/628/products/copia-de-1-9c1ec813e5320b313017238374976536-1024-1024.webp",
    "link_publicacion": "https://www.odiseaswimwear.com.ar/productos/bikini-mary-black/?pf=gs&variant=996030130&gad_source=1&gclid=EAIaIQobChMI4Lzo8biOiQMVvGBIAB0jEQMmEAQYBiABEgL9AfD_BwE"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Odisea",
    "precio": 56222,
    "descuento": 40,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/320/628/products/odisea-sale-1884-482cf6bf6a3a47409d17248611994824-1024-1024.webp",
    "link_publicacion": "https://www.odiseaswimwear.com.ar/productos/bikini-olivia-new-texturado-black/?pf=gs&variant=1004117868&gad_source=1&gclid=EAIaIQobChMI_N-hlrmOiQMV4iitBh3paxxFEAQYBCABEgJ4q_D_BwE"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Sol Foyatier",
    "precio": 75460,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/520/943/products/489c8865-0854-4721-8f24-c406ca301768-51d315637380fde98e169816322218171-f6404c3533f1a9f94016981632728517-1024-1024.webp",
    "link_publicacion": "https://solfoyatierbikinis.com/productos/bikini-herradura-negra/"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Anastasia monaco",
    "precio": 110000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/133/344/products/anas-22-71171-69fe8ac7fec5acb26f17283231024935-1024-1024.webp",
    "link_publicacion": "https://www.anastasiamonaco.com.ar/productos/bikini-no-drama-negra1/"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "47 street",
    "precio": 69999,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://street47.vtexassets.com/arquivos/ids/224921-1200-auto?v=638617492974530000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.47street.com.ar/37n1472250-bikini-sandy/p?srsltid=AfmBOoofhXeCuayL6NDkKCtp2YfgXPdYbvK_VfDN6fYdUQTtXba3chyn"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Atelier Munay",
    "precio": 100000,
    "descuento": 15,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/853/692/products/1769b3a6-efa7-42dc-bd1b-45fedd4f03071-a449cad8d3766ba4b716718928908462-1024-1024.webp",
    "link_publicacion": "https://www.ateliermunay.com.ar/productos/bikini-leo-negra/"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Cibeles",
    "precio": 110000,
    "descuento": null,
    "cuotas": 12,
    "link_foto": "https://acdn.mitiendanube.com/stores/120/037/products/au2a3576-93ee55bc08210e425e17297994553276-1024-1024.jpg",
    "link_publicacion": "https://www.cibelesonline.com.ar/productos/bikini-niagara-swim1/"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Pupas",
    "precio": 48000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/398/052/products/img_7072-02f99d60a75bdaec9017026501526262-1024-1024.webp",
    "link_publicacion": "https://www.pupas.com.ar/productos/bikini-negra-tiro-alto/"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Eumis",
    "precio": 40000,
    "descuento": 50,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/390/615/products/sin-titulo-2021-c90ba8b3bb3b194c0816690541193850-1024-1024.webp",
    "link_publicacion": "https://www.eumis.com.ar/productos/bikini-electra-negra1/"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Lindah",
    "precio": 42000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/003/415/501/products/img_5161-f98eb4e3e55fccc7d417286117077695-1024-1024.webp",
    "link_publicacion": "https://indahok.mitiendanube.com/productos/bikini-lali-negra/"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Sweet Victorian",
    "precio": 68400,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://images.ib2c.com.ar/repository/314/productsList/5084065.jpg?width=1500&height=1500&format=webp&rmode=pad&rcolor=white",
    "link_publicacion": "https://www.sweetvictorian.com.ar/producto/23141/3/hera-bikini"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Sweet Victorian",
    "precio": 64800,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://images.ib2c.com.ar/repository/314/productsList/5083836.jpg?width=1500&height=1500&format=webp&rmode=pad&rcolor=white",
    "link_publicacion": "https://www.sweetvictorian.com.ar/producto/23125/3/minerva-bikini"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Ginebra",
    "precio": 176000,
    "descuento": null,
    "cuotas": 12,
    "link_foto": "https://ginebra.vtexassets.com/arquivos/ids/175201-1200-auto?width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.ginebrabsas.com/bikini-team-negro/p"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Sail",
    "precio": 36300,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://sail.com.ar/cdn/shop/files/34700401BIKINIDELFINANEGRO01.jpg?v=1704465660&width=1100",
    "link_publicacion": "https://sail.com.ar/products/bikini-negra-delfina-sail?srsltid=AfmBOorjH41S0jNNwPlwI_Hf4hzuE84NqIARro071vqhUkbe_WAAgum8"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "ebbikinis",
    "precio": 32000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/491/263/products/9ea95ee3-98d8-4caf-bbf2-4e133b7b0067-d68e648bf50f7a778417197869979396-640-0.webp",
    "link_publicacion": "https://ebbikinis.mitiendanube.com/productos/carmela-blanconegro/"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Luz de Mar",
    "precio": 77000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://luzdemararg.vtexassets.com/arquivos/ids/183652-1200-auto?v=638615049634170000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.luzdemar.com.ar/triangulo-fijo-sunrise-basics/p?skuId=9499"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Sweet Victorian",
    "precio": 64800,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://images.ib2c.com.ar/repository/314/productsList/5083836.jpg?width=1500&height=1500&format=webp&rmode=pad&rcolor=white",
    "link_publicacion": "https://www.sweetvictorian.com.ar/producto/23125/3/minerva-bikini"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Cipitria",
    "precio": 94000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD1.1135_1c9f67b2-7151-49f5-b249-b999aeede8f1.jpg?v=1725568787&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-maya-negro-1"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Cipitria",
    "precio": 94000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD1.528_2b430af1-61d1-481a-88d1-edfc585c2a1e.jpg?v=1725567543&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-puglia-negro"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Cipitria",
    "precio": "94000",
    "descuento": "",
    "cuotas": "3",
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD1.528_2b430af1-61d1-481a-88d1-edfc585c2a1e.jpg?v=1725567543&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-puglia-negro"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Cipitria",
    "precio": 94000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD1.528_2b430af1-61d1-481a-88d1-edfc585c2a1e.jpg?v=1725567543&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-puglia-negro"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Cipitria",
    "precio": 91000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD1.151_d108bd5d-6628-431f-84cf-b6d0b91db86d.jpg?v=1725564908&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-filipinas-liso-negro"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Cipitria",
    "precio": 74000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD2.1997_0511b348-0c3f-401d-8b99-f72bb91fbd22.jpg?v=1725558107&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-similan-negro"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Cipitria",
    "precio": 104000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD1.1320_56c80993-7b3f-4316-a2e4-95ca57d1939f.jpg?v=1725568966&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-lumkei-shine-negro"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Zara",
    "precio": 59990,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://static.zara.net/assets/public/4fed/55d8/eb8e4ab7be29/ca2162a68345/00167037800-p/00167037800-p.jpg?ts=1713361818080&w=850&f=auto",
    "link_publicacion": "https://www.zara.com/ar/es/braguita-bikini-p00167037.html?v1=368785638&v2=2131535"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Coghlan godds",
    "precio": 27480,
    "descuento": 24,
    "cuotas": 3,
    "link_foto": "https://dcdn.mitiendanube.com/stores/005/116/328/products/b5-e3463daa77d8e1b31a17266952375086-1024-1024.webp",
    "link_publicacion": "https://coghlangoods.shop/productos/bikini-traje-de-bano-con-nudos-vedetina-negro/"
  },
  {
    "producto": "Bikini",
    "color": "Negro",
    "marca": "Kosaruk",
    "precio": 56000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/423/853/products/img_6631-ce525237f4b2849e6517214889798462-1024-1024.webp",
    "link_publicacion": "https://www.kosaruk.com/productos/bikini-yes-negra/"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Complot",
    "precio": 49990,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://complot.com.ar/media/catalog/product/cache/479c9cdc016090c3dba85230b5b617b2/c/o/complot_67042902_blanco_2.jpg",
    "link_publicacion": "https://complot.com.ar/bikini-hiedra.html"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Odisea",
    "precio": 31392,
    "descuento": 40,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/320/628/products/img_3387-4881fb69ea2a6d01dd17218400886116-1024-1024.webp",
    "link_publicacion": "https://www.odiseaswimwear.com.ar/productos/bikini-vintage-lara-saint-martin-perola/?pf=gs&variant=979151505&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUlEY5am_HE5OpKHcS2fzphsa6PjnhIPC8h1T8J3OLV9ibmaXb3yRL0aAiXvEALw_wcB"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Selu",
    "precio": 57000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://selulen.vtexassets.com/arquivos/ids/184118-1200-auto?v=638618321140200000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.selu.com.ar/triangulo-daisy-sl10505/p?skuId=12093"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Luli",
    "precio": 49990,
    "descuento": 17,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/921/173/products/708070c0-951d-470b-ae2a-0363b32a1ee91-f5902f91cbbabf41e516046942104803-1024-1024.webp",
    "link_publicacion": "https://www.lulibikinis.com/productos/bikini-bahamas-blanca1/"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Eloisa",
    "precio": 16000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/345/154/products/sol-blanca1-d943ece80060a4294915467001488498-1024-1024.webp",
    "link_publicacion": "https://www.eloisabikinis.com/productos/bikini-sol-blanca/"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Woka",
    "precio": 34942.5,
    "descuento": 25,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/775/666/products/kenya-blanca-1-deb62b9f85f3b60b0e16989247825668-640-0.webp",
    "link_publicacion": "https://www.wokabeachwear.com.ar/productos/bikini-kenya-blanca/"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Ita Bikinis",
    "precio": 117000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/139/932/products/0l7a0878-1-b2e70c224bb92934b717298004679434-640-0.webp",
    "link_publicacion": "https://www.itabikinis.com.ar/productos/bikini-cali-textura-offwhite1/"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Ita Bikinis",
    "precio": 117000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/139/932/products/copia-de-0l7a1348-47226943462cd6e83217250213850108-1024-1024.webp",
    "link_publicacion": "https://www.itabikinis.com.ar/productos/bikini-cupido-morley-blanco/"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Ita Bikinis",
    "precio": 135000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/139/932/products/ita-bkns-220-48ac854e439bc5e41517305627790518-640-0.webp",
    "link_publicacion": "https://www.itabikinis.com.ar/productos/bikini-alanis-textura-offwhite/"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Odisea",
    "precio": 31392,
    "descuento": 40,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/320/628/products/img_8655-1140f3dcca288e14ca17220245939490-1024-1024.webp",
    "link_publicacion": "https://www.odiseaswimwear.com.ar/productos/bikini-vintage-valu-cannes-perola/?pf=gs&variant=980764440&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUnzEsFdibXWz5ZfSY9OeKd3Ycv0d3xc9Gnr_Ned1yMifXPMWtV496AaAtoEEALw_wcB"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Masiva",
    "precio": 54000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/901/308/products/bajo-peso-66-638d0745a3e9d629e517268491562550-1024-1024.webp",
    "link_publicacion": "https://www.masivaoficial.com.ar/productos/corpino-honolulublanco/?variant=760776039&pf=mc&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUmeG2TbJeB5XCbQq0uaP2GYJbAdstd0TSqUKnA-FZgcRsRLffhahe4aAhqVEALw_wcB"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Salitrada",
    "precio": 120000,
    "descuento": null,
    "cuotas": 12,
    "link_foto": "https://www.salitrada.com/wp-content/uploads/2024/09/DSC02206-1-286x400.jpg",
    "link_publicacion": "https://www.salitrada.com/product/conjunto-bikini-bruna-gris-shine/?utm_source=Google%20Shopping&utm_campaign=shopping&utm_medium=cpc&utm_term=127485&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUkWSVC9JmELAuA10o1QBa1EEVRiHXxxuNLq0eifKEO7dmYnGSVZvSMaAr2TEALw_wcB"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Ora",
    "precio": 60000,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://acdn.mitiendanube.com/stores/796/395/products/19092024093148_img_1561-812f17d2186514cc6f17267492217035-1024-1024.webp",
    "link_publicacion": "https://www.ora-active.com.ar/productos/bikini-cromo-off-white/?gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUmCuX-1uKru2fXFdTIYBVGz1_VLiHc5sjnnwOaIlHg_9wUeKtgmfg8aAhmREALw_wcB"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Woka",
    "precio": 34942.5,
    "descuento": 25,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/775/666/products/mandy-blanca1-3e4b45a225b9a2a3f916957270679316-640-0.webp",
    "link_publicacion": "https://www.wokabeachwear.com.ar/productos/bikini-mandy-blanca/"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Woka",
    "precio": 30283.5,
    "descuento": 35,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/775/666/products/a11-bd898f349d96c4cab416611803423727-640-0.webp",
    "link_publicacion": "https://www.wokabeachwear.com.ar/productos/bikini-monaco-crema/"
  },
  {
    "producto": "Bikini",
    "color": "Blanco",
    "marca": "Odisea",
    "precio": 139000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/320/628/products/fujifilm-1186-aa4bc7836c538e9ffc17284004225587-640-0.webp",
    "link_publicacion": "https://www.odiseaswimwear.com.ar/productos/bikini-agus-pipa-off-white/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Odisea",
    "precio": 139000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/320/628/products/1-18-95a2359df98d9f79bc17267577131456-1024-1024.webp",
    "link_publicacion": "https://www.odiseaswimwear.com.ar/productos/bikini-luna-lurex-licor/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Ita Bikinis",
    "precio": 120000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/139/932/products/ita-27-8_716-rojo-2dca19bf17b592ff7517260140359072-1024-1024.webp",
    "link_publicacion": "https://www.itabikinis.com.ar/productos/bikini-naxos-VELVET-ROJO"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Odisea",
    "precio": 139000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/320/628/products/fujifilm-3413-1-f9da7203752edf118217267637708255-1024-1024.webp",
    "link_publicacion": "https://www.odiseaswimwear.com.ar/productos/bikini-berni-pipa-beijo/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Ita Bikinis",
    "precio": 135000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/139/932/products/copia-de-0l7a0213-2-e4d6006d67ae7a3f9b17249403035919-1024-1024.webp",
    "link_publicacion": "https://www.itabikinis.com.ar/productos/bikini-betty-textura-rojo/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Ita Bikinis",
    "precio": 106000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/139/932/products/frame-93-579f825060728c49be17252081162731-1024-1024.webp",
    "link_publicacion": "https://www.itabikinis.com.ar/productos/bikini-cupido-rojo/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Ita Bikinis",
    "precio": 117000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/139/932/products/frame-24-3d128576e4bdfcb0a117251307773948-1024-1024.webp",
    "link_publicacion": "https://www.itabikinis.com.ar/productos/bikini-sirena-textura-rojo/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Ita Bikinis",
    "precio": 117000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/139/932/products/0l7a4352-1-f8cd85510cd61540bb17251245063203-1024-1024.webp",
    "link_publicacion": "https://www.itabikinis.com.ar/productos/bikini-palma-rojo-metalizado/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Ita Bikinis",
    "precio": 106000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/139/932/products/ita-bkn-8-05_0234-e34fbd583cc640695917176985417855-1024-1024.webp",
    "link_publicacion": "https://www.itabikinis.com.ar/productos/bikini-uganda-rojo/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Anastasia monaco",
    "precio": 100000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/133/344/products/bikini-foto-producto-ecommerce-1-ab2801898bfd3b143a17289334480850-1024-1024.webp",
    "link_publicacion": "https://www.anastasiamonaco.com.ar/productos/bikini-margarita-Rojo/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Anastasia monaco",
    "precio": 100000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/133/344/products/foto-producto-ecommerce-4-6154b9e87cada95a6917290054203780-1024-1024.webp",
    "link_publicacion": "https://www.anastasiamonaco.com.ar/productos/bikini-affair-Rojo/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Rio",
    "precio": 54999,
    "descuento": 10,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/095/030/products/bikinisrio-464-56fbbb9e6a73bcd5ad17270104387910-1024-1024.jpg",
    "link_publicacion": "https://shop.bikinisrio.com/productos/top-tulum-morley-rojo/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Ciao Bella",
    "precio": 60000,
    "descuento": 10,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/212/301/products/14-0a57c80eb328ab623a17254030189240-1024-1024.webp",
    "link_publicacion": "https://www.ciao-bella-shop.com/productos/bikini-lewis/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Ciao Bella",
    "precio": 65000,
    "descuento": 10,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/212/301/products/23-b9fcdb658d10c4d90817248751002810-1024-1024.webp",
    "link_publicacion": "https://www.ciao-bella-shop.com/productos/bikini-carme/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Ciao Bella",
    "precio": 56000,
    "descuento": 10,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/212/301/products/34-bc74413d794757776217255473952682-1024-1024.webp",
    "link_publicacion": "https://www.ciao-bella-shop.com/productos/bikini-teddy/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Caro cuore",
    "precio": 59000,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://www.carocuore.com/media/catalog/product/0/1/01_untitled_capture4129.jpg?quality=100&fit=bounds&height=1500&width=1000",
    "link_publicacion": "https://www.carocuore.com/981bnj-triangulito-movible-clear.html"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Caro cuore",
    "precio": 69000,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://www.carocuore.com/media/catalog/product/0/1/01_untitled_capture3165.jpg?quality=100&fit=bounds&height=1500&width=1000",
    "link_publicacion": "https://www.carocuore.com/125c70-marilyn-bela.html"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Caro cuore",
    "precio": 49000,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://www.carocuore.com/media/catalog/product/0/1/01_untitled_capture3137.jpg?quality=100&fit=bounds&height=1500&width=1000",
    "link_publicacion": "https://www.carocuore.com/126c70-vedetina-cola-chica-bela.html"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Cassia",
    "precio": 39000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/566/189/products/782f600f-91ee-46be-8dd4-174fc3b90e611-edda9ecb0e70bcf7ce16388889335077-1024-1024.webp",
    "link_publicacion": "https://www.cassia.com.ar/productos/hayman/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Cassia",
    "precio": 39000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/566/189/products/3t7a02641-075b0196b7bfc784af16078216258310-1024-1024.webp",
    "link_publicacion": "https://www.cassia.com.ar/productos/naxos/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Cassia",
    "precio": 39000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/566/189/products/1a41-9726ce1510b32c807f16055812776629-1024-1024.webp",
    "link_publicacion": "https://www.cassia.com.ar/productos/mallorca/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "VM",
    "precio": 85000,
    "descuento": 10,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/376/745/products/file-9f9ed857123c80163017267819852712-1024-1024.webp",
    "link_publicacion": "https://www.vmbikinis.com.ar/productos/carmin-triangulo-base-vedettina-less/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Praga",
    "precio": 45000,
    "descuento": 10,
    "cuotas": 12,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/000/725/products/img_8417-5023da6598545f8c0b17224635185383-1024-1024.webp",
    "link_publicacion": "https://pragabikinis.com.ar/productos/bikini-lali-Rojo-textura-gruesa/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Praga",
    "precio": 45000,
    "descuento": 10,
    "cuotas": 12,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/000/725/products/img_2024_07_26-12_29_01_6800_8e60fb91-14d5f859bc69e4b85417224621268394-1024-1024.webp",
    "link_publicacion": ""
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Praga",
    "precio": 45000,
    "descuento": 10,
    "cuotas": 12,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/000/725/products/img_8344-903341de3580486dfb17224669744589-1024-1024.webp",
    "link_publicacion": "https://pragabikinis.com.ar/productos/bikini-malta-Rojo/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Praga",
    "precio": 45000,
    "descuento": 10,
    "cuotas": 12,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/000/725/products/1b37f9f0-1ed1-488c-91c1-1fe60e01a576-4b6584f323572ed99a17264075510723-1024-1024.webp",
    "link_publicacion": "https://pragabikinis.com.ar/productos/bikini-justina-Rojo-textura-morley/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Valentina",
    "precio": 46999,
    "descuento": 10,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/899/552/products/img_0223-cdc7e509deabdb383817146715708382-1024-1024.webp",
    "link_publicacion": "https://www.valentinabsas.com.ar/productos/bikini-glit-glow-lurex-black/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Valentina",
    "precio": 46999,
    "descuento": 10,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/899/552/products/img_4548-5a9a0c329e915e45f817146727910662-1024-1024.webp",
    "link_publicacion": "https://www.valentinabsas.com.ar/productos/bikini-francia-glow-lurex-red/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Otidi",
    "precio": 70000,
    "descuento": 30,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/385/930/products/otidi-84-c98098d501993d221216976758824389-1024-1024.webp",
    "link_publicacion": "https://otidi.com.ar/productos/dila-coral-brillante/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Zara",
    "precio": 65990,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://static.zara.net/assets/public/b686/f0de/1b6f47a2a5bc/e53cfeae4498/02856050600-p/02856050600-p.jpg?ts=1713361822203&w=850&f=auto",
    "link_publicacion": "https://www.zara.com/ar/es/top-bikini-tirantes-dobles-p02856050.html?v1=364217374&v2=2131535"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Otidi",
    "precio": 70000,
    "descuento": 30,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/385/930/products/76478a20-10c1-4f7a-974b-2007e0da25f0-8ca041dca7664d393e16639551436423-1024-1024.webp",
    "link_publicacion": "https://otidi.com.ar/productos/dilared/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Otidi",
    "precio": 72000,
    "descuento": 30,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/385/930/products/baja-18-5e533ee32adcf8e6f516986360914824-1024-1024.webp",
    "link_publicacion": "https://otidi.com.ar/productos/fefi-coral-brillante/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Sweet",
    "precio": 40390,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/002/007/704/products/sweetlookbook24463-1859454762e5b8f38c17095580953867-1024-1024.webp",
    "link_publicacion": "https://tiendasweet.com.ar/productos/bikini-top-con-almohadillas-y-vedetina-513-21-bestival-sweet-victorian/"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Cipitria",
    "precio": 94000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD1.1284_fc6055d8-805f-4d1c-8f7a-ac663c9bf277.jpg?v=1725570039&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-puglia-glam-magenta"
  },
  {
    "producto": "Bikini",
    "color": "Rojo",
    "marca": "Petrushka",
    "precio": 79990,
    "descuento": 10,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/065/447/products/bkn-polaroid-shine-red2-f5c4de205a59bb105117278369135745-1024-1024.webp",
    "link_publicacion": "https://www.petrushka.com.ar/productos/bikini-polaroid-shine-in-red/"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Ita Bikinis",
    "precio": 120000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/139/932/products/army-copia-152fa7e4ef37d6fb2717260808016441-640-0.webp",
    "link_publicacion": "https://www.itabikinis.com.ar/productos/bikini-naxos-VELVET-ARMY"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Complot",
    "precio": 49990,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://complot.com.ar/media/catalog/product/cache/479c9cdc016090c3dba85230b5b617b2/c/o/complot_67062902_verde_1_p.jpg",
    "link_publicacion": "https://complot.com.ar/bikini-bella.html"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Bikinis rio",
    "precio": 54999,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/095/030/products/rio-46-e6246f52773cf019bf17270097836453-1024-1024.jpg",
    "link_publicacion": "https://shop.bikinisrio.com/productos/triangulo-tokio-morley-verde/"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Love Africa",
    "precio": 49000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/002/063/245/products/conjunto-forever-gen-z-loveafrica-bikinis-1-f3fb578102e9c1967517259903632557-1024-1024.webp",
    "link_publicacion": "https://www.loveafrica.com.ar/productos/corpino-fijo-gen-z-2025/"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Love Africa",
    "precio": 50000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/002/063/245/products/conjunto-millenial-brasil-loveafrica-bikinis6-322675bc150dc2578517259695078429-1024-1024.webp",
    "link_publicacion": "https://www.loveafrica.com.ar/productos/corpino-millenial-brasil-2025/"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Frida Store",
    "precio": 8900,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/066/457/products/722a2443-6986-41b8-b79c-18f1a35ac31b1-9b4fbf357ba94dacd716686914232532-1024-1024.webp",
    "link_publicacion": "https://fridastore.com.ar/productos/bikini-fiji-art-8030/"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Frida Store",
    "precio": 8500,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/066/457/products/img_4979-caf7cbb06815c7d43c17284165519894-1024-1024.webp",
    "link_publicacion": "https://fridastore.com.ar/productos/art-5075/"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Masiva",
    "precio": 52000,
    "descuento": 15,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/901/308/products/bajo-peso-42-ff2e7c16cf57fb3bad17268465169664-1024-1024.webp",
    "link_publicacion": "https://www.masivaoficial.com.ar/productos/corpino-bora-boragalapago/?variant=760780243&pf=mc&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUmNaKr_3RTMvQNbkOJdEU3mCnEwMyntvQR3eN43XUoU7q_9FjOBjl8aAh5xEALw_wcB"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Selu",
    "precio": 57000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://selulen.vtexassets.com/arquivos/ids/184122-1200-auto?v=638618322923200000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.selu.com.ar/triangulo-daisy-sl10505/p?idsku=12097&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUkmhTO4mohhQ5n4LbFWSEgcTLnEt4LgyNMAPsH5SW0rZPiT_GmYVygaAmDGEALw_wcB"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Class Life",
    "precio": 63900,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/448/561/products/231-12eaf54fa3469865bd16935957597105-640-0.webp",
    "link_publicacion": "https://www.class-life.com/productos/bikini-folk/?variant=705527187"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Luz de Mar",
    "precio": 78000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://luzdemararg.vtexassets.com/arquivos/ids/184698-1200-auto?v=638615862445970000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.luzdemar.com.ar/triangulo-con-argolla-urban-beachside/p?skuId=9337"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Luz de Mar",
    "precio": 92000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://luzdemararg.vtexassets.com/arquivos/ids/184468-1200-auto?v=638615861140330000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.luzdemar.com.ar/bandeau-con-hebilla-pasante-urban-beachside/p?skuId=9257"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Mumbai",
    "precio": 48999,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://acdn.mitiendanube.com/stores/168/738/products/img_1681-c2fe7cac1233575d0f17225150186150-1024-1024.webp",
    "link_publicacion": "https://www.mumbaibikinis.com/productos/giovanna-corpino/"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Sweet Victorian",
    "precio": 87300,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://images.ib2c.com.ar/repository/314/productsList/5089725.jpg?width=1500&height=1500&format=webp&rmode=pad&rcolor=white",
    "link_publicacion": "https://www.sweetvictorian.com.ar/producto/23041/18/lutz-bikini"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Sweet Victorian",
    "precio": 64800,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://images.ib2c.com.ar/repository/314/productsList/5083842.jpg?width=1500&height=1500&format=webp&rmode=pad&rcolor=white",
    "link_publicacion": "https://www.sweetvictorian.com.ar/producto/23125/18/minerva-bikini"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Zara",
    "precio": 59990,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://static.zara.net/assets/public/3a1a/3c7c/671646238f06/15f19461cfc6/4000.jpg?ts=1695132540189&w=911&f=auto",
    "link_publicacion": "https://www.zara.com/ar/es/top-bikini-aros-p02856052.html?v1=364221948&v2=2131535"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Cipitria",
    "precio": 104000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cipitria.com.ar/cdn/shop/files/SH.CIPITRIAECOMD1.1119_c9622105-418d-44fd-bb64-a7798d519599.jpg?v=1725568989&width=1000",
    "link_publicacion": "https://cipitria.com.ar/products/conjunto-lumkei-glam"
  },
  {
    "producto": "Bikini",
    "color": "Verde",
    "marca": "Juvia",
    "precio": 11999,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/235/896/products/juvia_2057-c8a7a9549d63ece06317036894511785-640-0.webp",
    "link_publicacion": "https://www.juvia.com.ar/productos/bikini-doly/"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Penguin",
    "precio": 115500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48763/0LNHM454974-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm454974_-_surf-elastic-volley?locale=es-AR&variant_id=22213&main_property_id=144"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Penguin",
    "precio": 115500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48748/0LNHM404485-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm404485_-_diamond-elastic-volley?locale=es-AR&variant_id=22136&main_property_id=364"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Underwave",
    "precio": 65999,
    "descuento": 20,
    "cuotas": null,
    "link_foto": "https://underwavebrand.com/wp-content/uploads/2023/11/s-194-1-2-1-710x1065.jpeg",
    "link_publicacion": "https://underwavebrand.com/product/boardshort-deep-rib-war/"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Garzon Garcia",
    "precio": 77990,
    "descuento": 40,
    "cuotas": 12,
    "link_foto": "https://eadn-wc02-11639291.nxedge.io/cdn/media/catalog/product/cache/22d758b50fea9312a2573656263947f1/m/a/malla_anclas_1_1.jpg",
    "link_publicacion": "https://www.garzongarcia.com.ar/v24g621pr01.html"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Penguin",
    "precio": 115500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48730/0LNHM130826-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm130826_-_horizontal-elastic-volley?locale=es-AR&variant_id=21717&main_property_id=412"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Chiara Mia",
    "precio": 28099,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://http2.mlstatic.com/D_NQ_NP_873461-MLA51788438224_102022-O.webp",
    "link_publicacion": "https://www.chiaramia.com.ar/MLA-1182482176-short-de-bano-hombre-estampado-con-bolsillo-y-suspensor-xy-_JM#polycard_client=search-nordic&position=4&search_layout=stack&type=item&tracking_id=431d604a-7ba1-4441-8f71-96751a84e6d3"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Burgues",
    "precio": 89900,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://burgues.com/media/catalog/product/cache/cdf67f21997b07d06fcedd738b8962eb/b/0/b0076ind30-1_1_.jpg",
    "link_publicacion": "https://burgues.com/b0076ind30"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Bleemar",
    "precio": 23997,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://http2.mlstatic.com/D_NQ_NP_2X_601423-MLA73386207613_122023-F.webp",
    "link_publicacion": "https://www.tienda-bleemar.com/MLA-1329317340-short-de-bano-malla-para-hombre-estampado-secado-rapido-_JM?variation=181026198185"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Upgrade",
    "precio": 63599,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://http2.mlstatic.com/D_NQ_NP_2X_852749-MLA77985111725_072024-F.webp",
    "link_publicacion": "https://www.upgradearg.com/MLA-1119990485-short-malla-hombre-estampado-largo-playa-mare-moda-20gg29-_JM"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Topper",
    "precio": 39999,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://topperarg.vtexassets.com/arquivos/ids/290399-1200-1200?width=1200&height=1200&aspect=true",
    "link_publicacion": "https://www.topper.com.ar/165308-short-de-bano-super-slim/p?idsku=36214"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Elepants",
    "precio": 55900,
    "descuento": 10,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/852/152/products/4-c2dd04af84c38d3b4f17262020042814-1024-1024.jpg",
    "link_publicacion": "https://elepants.com.ar/productos/traje-de-bano-estampado-adulto-negro/"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Penguin",
    "precio": 115500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48679/0LNHM011679-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm011679_-_re-pete-elastic-volley?locale=es-AR&variant_id=22080&main_property_id=470"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Manki",
    "precio": 29400,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/71d64e8d-fc51-4dc1-8b8f-87c93f6eb3b2-5dd22c4ff8250a6efc17245168998287-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-garabato-black/"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Manki",
    "precio": 29400,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/4fd79f51-c0cb-4273-b1cf-a430c235f059-1c9ec7de09d8c33e5a17245185877684-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-jero-grey/"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Garzon Garcia",
    "precio": 77990,
    "descuento": 40,
    "cuotas": 12,
    "link_foto": "https://eadn-wc02-11639291.nxedge.io/cdn/media/catalog/product/cache/136ab0bd7f4a77ffce89a0d46a1a8de5/m/a/malla_reposera_8_1.jpg",
    "link_publicacion": "https://www.garzongarcia.com.ar/v24g621pr92.html"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Penguin",
    "precio": 105500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48685/0LNHM034413-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm034413_-_color-wide-stripes-box?locale=es-AR&variant_id=21604&main_property_id=304"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Penguin",
    "precio": 115500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/49675/0LNHM011413-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm011413_-_re-pete-elastic-volley?locale=es-AR&variant_id=21598&main_property_id=304"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Garzon Garcia",
    "precio": 77990,
    "descuento": 40,
    "cuotas": 12,
    "link_foto": "https://eadn-wc02-11639291.nxedge.io/cdn/media/catalog/product/cache/136ab0bd7f4a77ffce89a0d46a1a8de5/m/a/malla_camo_1_1.jpg",
    "link_publicacion": "https://www.garzongarcia.com.ar/v24g621pr15.html"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Garzon Garcia",
    "precio": 77990,
    "descuento": 40,
    "cuotas": 12,
    "link_foto": "https://eadn-wc02-11639291.nxedge.io/cdn/media/catalog/product/cache/136ab0bd7f4a77ffce89a0d46a1a8de5/m/a/malla_autos_10_1.jpg",
    "link_publicacion": "https://www.garzongarcia.com.ar/v24g621pr07.html"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Penguin",
    "precio": 99500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/50276/0JNHM080413-2.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0jnhm080413_-_paradise-flower-elastic-volley?locale=es-AR&variant_id=18924&main_property_id=304"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Manki",
    "precio": 29400,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/d520c8b1-3d4b-45de-811d-2dd42878d2a0-b793f7a7a9e60f5bec17245061246357-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-rayado-verde/"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Manki",
    "precio": 29400,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/d0c5374a-7201-4cde-b7f5-dae6c9769757-bef6b36df9f6fd166417245072743682-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/traje-de-bano-tetris-marine/"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Kevingston",
    "precio": 45000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.kvnstatic.com/foto-prod/008F0913/xg/008f0913_1-short-de-ba%C3%B1o-tag-estampado-kevingston.webp",
    "link_publicacion": "https://www.kevingston.com/producto/008F0913_short-de-bano-tag-classic-fit"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Kevingston",
    "precio": 45000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.kvnstatic.com/foto-prod/008F0902/xg/008f0902_1-short-de-ba%C3%B1o-tag-rayado-kevingston-hombres.webp",
    "link_publicacion": "https://www.kevingston.com/producto/008F0902_short-de-bano-tag-classic-fit"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Penguin",
    "precio": 105500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48743/0LNHM401361-2.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm401361_-_stripe-diamond-elastic-box?locale=es-AR&variant_id=20929&main_property_id=324"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Penguin",
    "precio": 115500,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48697/0LNHM052252-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm052252_-_wide-stripes-elastic-volley?locale=es-AR&variant_id=21021&main_property_id=443"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Manki",
    "precio": 29400,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/e06d4f0b-2103-41b7-b1dd-586c3d931225-7e392939ceb25c798217245078252390-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-trip-black/"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Manki",
    "precio": 29400,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/37a7dd3b-aa02-401d-80fa-3e35c2b2af6e-1006ea8aac32da045b17245060904388-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-rayado-azul/"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Manki",
    "precio": 29400,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/290105da-61c6-47d4-8838-4e077f52afd2-d8b6c89809cfaeca1e17245060479908-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-rayado-negro/"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Kevingston",
    "precio": 45000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.kvnstatic.com/foto-prod/008E9922/xg/008e9922_1-short-de-ba%C3%B1o-board-estampado-kevingston-hombres.webp",
    "link_publicacion": "https://www.kevingston.com/producto/008E9922_short-de-bano-board-classic-fit"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Kevingston",
    "precio": 45000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.kvnstatic.com/foto-prod/008F0932/xg/008F0932_1.webp",
    "link_publicacion": "https://www.kevingston.com/producto/008F0932_short-de-bano-tag-classic-fit"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Kevingston",
    "precio": 45000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.kvnstatic.com/foto-prod/008E9927/xg/008E9927_1-short-de-ba%C3%B1o-board-estampado-kevingston-hombre.webp",
    "link_publicacion": "https://www.kevingston.com/producto/008E9927_short-de-bano-board-classic-fit"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Chiara Mia",
    "precio": 30999,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://http2.mlstatic.com/D_NQ_NP_966950-MLA79811212943_102024-O.webp",
    "link_publicacion": "https://www.chiaramia.com.ar/MLA-897137760-short-de-bano-hombre-estampado-camuflado-bolsillos-malla-xy-_JM#polycard_client=search-nordic&position=1&search_layout=stack&type=item&tracking_id=c039d096-49ba-4b17-b275-f72dc0ecc92a"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Chiara Mia",
    "precio": 28099,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://http2.mlstatic.com/D_NQ_NP_657256-MLA71968792694_092023-O.webp",
    "link_publicacion": "https://www.chiaramia.com.ar/MLA-1524322592-malla-short-de-bano-hombre-estampado-con-bolsillos-xy-_JM#polycard_client=search-nordic&position=2&search_layout=stack&type=item&tracking_id=9bb95ccd-1f74-4927-9ab4-c3ace30f5c6e"
  },
  {
    "producto": "Malla",
    "color": "Estampado",
    "marca": "Chiara Mia",
    "precio": 28099,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://http2.mlstatic.com/D_NQ_NP_617684-MLA51788535132_102022-O.webp",
    "link_publicacion": "https://www.chiaramia.com.ar/MLA-1182146517-xy-short-de-bano-hombre-estampado-con-bolsillo-y-suspensor-_JM#polycard_client=search-nordic&position=3&search_layout=stack&type=item&tracking_id=2fe271a8-d6e4-42dd-bffb-7d84b7f20933"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Penguin",
    "precio": 89500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48725/0LNHM122974-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm122974_-_solid-elastic-volley?locale=es-AR&variant_id=22207&main_property_id=144"
  },
  {
    "producto": "Malla",
    "color": "Celeste",
    "marca": "",
    "precio": 89500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48709/0LNHM122330-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm122330_-_solid-elastic-volley?locale=es-AR&variant_id=22175&main_property_id=324"
  },
  {
    "producto": "Malla",
    "color": "Naranja",
    "marca": "",
    "precio": 89500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48719/0LNHM122826-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm122826_-_solid-elastic-volley?locale=es-AR&variant_id=21711&main_property_id=412"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Penguin",
    "precio": 89500,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.penguinargentina.com/uploads/picture/image/48674/0LNHM001625-1.jpg",
    "link_publicacion": "https://www.penguinargentina.com/productos/trajes-de-bano/0lnhm001625_-_piping-solid-elastic-volley?locale=es-AR&variant_id=22092&main_property_id=349"
  },
  {
    "producto": "Malla",
    "color": "Blanco",
    "marca": "Garzon Garcia",
    "precio": 77990,
    "descuento": null,
    "cuotas": 12,
    "link_foto": "https://eadn-wc02-11639291.nxedge.io/cdn/media/catalog/product/cache/136ab0bd7f4a77ffce89a0d46a1a8de5/t/r/traje_de_ba_o_braku_7.jpg",
    "link_publicacion": "https://www.garzongarcia.com.ar/v25g621pzoc.html"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Garzon Garcia",
    "precio": 77990,
    "descuento": null,
    "cuotas": 12,
    "link_foto": "https://eadn-wc02-11639291.nxedge.io/cdn/media/catalog/product/cache/136ab0bd7f4a77ffce89a0d46a1a8de5/t/r/traje_de_ba_o_braku_19.jpg",
    "link_publicacion": "https://www.garzongarcia.com.ar/v25g621pz19.html"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Garzon Garcia",
    "precio": 77990,
    "descuento": null,
    "cuotas": 12,
    "link_foto": "https://eadn-wc02-11639291.nxedge.io/cdn/media/catalog/product/cache/136ab0bd7f4a77ffce89a0d46a1a8de5/t/r/traje_de_ba_o_braku_32.jpg",
    "link_publicacion": "https://www.garzongarcia.com.ar/v25g621pz34.html"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Manki",
    "precio": 46600,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/d53a653a-f247-476b-b798-a2e5fc0518d2-61afef0f3764e95c8517245220458292-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-morro-verde/"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Manki",
    "precio": 46600,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/67c69504-8552-4bd1-bf7d-5c8c0e8df819-1cd80a77e60935927f17245245478879-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-lagos-bordo/"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Manki",
    "precio": 46600,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/gony241ua-4a785128bf8391b2d216978213367689-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-gony-bordo/"
  },
  {
    "producto": "Malla",
    "color": "Blanco",
    "marca": "Manki",
    "precio": 29400,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/0536b056-993d-4630-b92c-18d06fb09100-c9553702ff377b1b8917245196847168-640-0.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-koko-light-pink/"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Kevingston",
    "precio": 45000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.kvnstatic.com/foto-prod/008E7111/xg/008e7111_1-short-de-ba%C3%B1o-hash-azul-kevingston-hombres.webp",
    "link_publicacion": "https://www.kevingston.com/producto/008E7111_short-de-bano-hash-classic-fit"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Kevingston",
    "precio": 45000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.kvnstatic.com/foto-prod/008E7042/xg/008e7042_1-short-de-ba%C3%B1o-hash-rojo-kevingston-hombre.webp",
    "link_publicacion": "https://www.kevingston.com/producto/008E7042_short-de-bano-hash-classic-fit"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Kvn",
    "precio": 45000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.kvnstatic.com/foto-prod/008E7330/xg/008E7330_1.webp",
    "link_publicacion": "https://www.kevingston.com/producto/008E7330_short-de-bano-hash-classic-fit"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Kevingston",
    "precio": 45000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.kvnstatic.com/foto-prod/008E7013/xg/008E7013_1.webp",
    "link_publicacion": "https://www.kevingston.com/producto/008E7013_short-de-bano-hash-classic-fit"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Burgues",
    "precio": 89900,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://burgues.com/media/catalog/product/cache/cdf67f21997b07d06fcedd738b8962eb/b/0/b0076mai21-1_1_.jpg",
    "link_publicacion": "https://burgues.com/b0076mai21"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Burgues",
    "precio": 89900,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://burgues.com/media/catalog/product/cache/cdf67f21997b07d06fcedd738b8962eb/b/0/b0076mai36-1_1_.jpg",
    "link_publicacion": "https://burgues.com/b0076mai36"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "VCP",
    "precio": 59990,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://vcp.com.ar/cdn/shop/files/AcidCeleste1.jpg?v=1695403510&width=1300",
    "link_publicacion": "https://vcp.com.ar/products/traje-de-bano-acid-celeste"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Topper",
    "precio": 20999,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://topperarg.vtexassets.com/arquivos/ids/311992-1200-1200?width=1200&height=1200&aspect=true",
    "link_publicacion": "https://www.topper.com.ar/short-de-bano-hombre-slim-166540/p"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Topper",
    "precio": 27999,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://topperarg.vtexassets.com/arquivos/ids/311987-1200-1200?width=1200&height=1200&aspect=true",
    "link_publicacion": "https://www.topper.com.ar/short-de-bano-hombre-slim-166539/p"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Elepants",
    "precio": 49900,
    "descuento": 10,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/852/152/products/copia-de-elepants_1038-b05fe41d7c7debe26517262337153599-1024-1024.jpg",
    "link_publicacion": "https://elepants.com.ar/productos/traje-bano-celeste-liso-hombre/"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Legacy",
    "precio": 45990,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://legacy.vteximg.com.br/arquivos/ids/189961-85-115/1051620010_R100.jpg?v=638043727490000000",
    "link_publicacion": "https://www.legacy.com.ar/short-liso-legacy-ibiza-1051620010r100/p"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Adidas",
    "precio": 35999,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f18926ae836432e989aaf110111c739_9366/Shorts_de_Natacion_Cortos_de_Color_Solido_Rojo_HT2160_01_laydown.jpg",
    "link_publicacion": "https://www.adidas.com.ar/shorts-de-natacion-cortos-de-color-solido/HT2160.html"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Adidas",
    "precio": 37799,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97b9a286eaa24d108aaeafc901251918_9366/Shorts_de_natacion_CLX_Largo_Clasico_Solid_Verde_IL4004_25_model.jpg",
    "link_publicacion": "https://www.adidas.com.ar/shorts-de-natacion-clx-largo-clasico-solid/IL4004.html"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Dexter",
    "precio": 19919,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5e81591b/products/TO165316/TO165316-1.JPG",
    "link_publicacion": "https://www.dexter.com.ar/traje-de-bano-topper-slim/TO165316.html"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "No-Brand",
    "precio": 17500,
    "descuento": 20,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/938/261/products/49a13548-6e1b-4c31-b273-4464b6525675-24a21c1b49e7edce3317025092460922-1024-1024.webp",
    "link_publicacion": "https://www.no-brand.com.ar/productos/traje-de-bano-nb1/"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Brooksfield",
    "precio": 50990,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://www.brooksfieldstore.com/42576-large_default/short-new-delbert.jpg",
    "link_publicacion": "https://www.brooksfieldstore.com/shorts-de-bano/6406-50803-short-new-delbert.html#/40-talle-m/42-color-francia"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Devre",
    "precio": 29990,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://www.devre.la/media/catalog/product/d/e/devre-short-de-bano_07d000038-001_001.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=1350&width=900&canvas=900:1350",
    "link_publicacion": "https://www.devre.la/07d000038001-traje-de-bano-liso-azul-marino.html"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Macowens",
    "precio": 25990,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://www.macowens.com.ar/media/catalog/product/m/a/macowens-short-de-bano_7790-020_003.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=1350&width=900&canvas=900:1350",
    "link_publicacion": "https://www.macowens.com.ar/079207790020-short-clasico-rojo.html"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Bravo",
    "precio": 38490,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/218/661/products/27081-09-4-38e65ff65875dacef017014427979305-1024-1024.webp",
    "link_publicacion": "https://www.bravojeans.com.ar/productos/short-de-bano-liso-c-spandex-rojo/"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Reef",
    "precio": 49990,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/180/816/products/blend-strech-volley-rojo-11-da232d5ac63858df8b16957596924245-1024-1024.jpg",
    "link_publicacion": "https://www.reef.com.ar/productos/blend-strech-volley-rojo/"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Quiksilver",
    "precio": 74999,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://www.quiksilver.com.ar/pub/media/catalog/product/cache/58de367b3bfe9e60ffd377a75f209f56/2/2/2241101057-40_1.jpg",
    "link_publicacion": "https://www.quiksilver.com.ar/traje-de-ba-o-highline-hawaii-17-roj-quiksilver"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Eyelit",
    "precio": 35500,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://eyelit.com.ar/cdn/shop/products/0803P0W.07.1.jpg?v=1661535811&width=600",
    "link_publicacion": "https://eyelit.com.ar/products/short-de-bano-basico-con-bolsillo-de-microfibra?variant=32242162827377"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Eyelit",
    "precio": 35500,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://eyelit.com.ar/cdn/shop/products/0803P0W.09.1.jpg?v=1610653255&width=600",
    "link_publicacion": "https://eyelit.com.ar/products/short-de-bano-basico-con-bolsillo-de-microfibra?variant=32242163155057"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Open Sports",
    "precio": 29400,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/L/T/LTN0222173_0.jpg",
    "link_publicacion": "https://www.opensports.com.ar/short-de-ba-o-le-coq-sportif-ltn0222173.html"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Prototype",
    "precio": 53980,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://acdn.mitiendanube.com/stores/004/246/044/products/42f28474-eb10-4dc5-8546-6aa8a29ca82a-b9375540bff145eb5617180023393359-1024-1024.webp",
    "link_publicacion": "https://prototype.com.ar/productos/short-de-bano-block/"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Prototype",
    "precio": 53980,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://acdn.mitiendanube.com/stores/004/246/044/products/783c77e6-14ea-43a4-b110-36d6d8c112df-a4443b8507467ce6d217180023114477-1024-1024.webp",
    "link_publicacion": "https://prototype.com.ar/productos/short-de-bano-block/"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Scandinavia",
    "precio": 56106,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://scandinavianar.vtexassets.com/arquivos/ids/171536-150-auto?v=637907261587070000&width=150&height=auto&aspect=true",
    "link_publicacion": "https://www.scandinavian.com.ar/short-dakine-beach-boy-hombre-cardinal/p?idsku=6422"
  },
  {
    "producto": "Malla",
    "color": "Rojo",
    "marca": "Macowens",
    "precio": 25990,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://www.macowens.com.ar/media/catalog/product/m/a/macowens-short-de-bano_7790-020_003.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=1350&width=900&canvas=900:1350",
    "link_publicacion": "https://www.macowens.com.ar/079207790020-short-clasico-rojo.html"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Dreadlife",
    "precio": 44999,
    "descuento": 10,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/852/253/products/432667-dread_srl-0014529l-347503368790b71a2317290318499674-640-0.webp",
    "link_publicacion": "https://dreadlife.ar/productos/short-de-bano-stage-dread/"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Dexter",
    "precio": 29999,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf0cdf851/products/TO166543/TO166543-1.JPG",
    "link_publicacion": "https://www.dexter.com.ar/traje-de-bano-natacion-basico-hombre/TO166543_M_1.html"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "StockCenter",
    "precio": 19199,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7084d8ee/products/FL_S23TULVE/FL_S23TULVE-1.JPG",
    "link_publicacion": "https://www.stockcenter.com.ar/traje-de-bano-flash-army-tulum/FLS23TULVE_XL_1.html"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Cero26",
    "precio": 38999,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://newsport.vtexassets.com/arquivos/ids/17442739-1200-auto?v=638344750698870000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.cero26.com.ar/malla-quiksilver-everyday-deluxe-volley-15-hombre-2241101019/p?idsku=230767"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Reef",
    "precio": 49990,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/180/816/products/blend-strech-volley-verde-militar-11-8b63e25b0d4fc6112316957594671630-1024-1024.jpg",
    "link_publicacion": "https://www.reef.com.ar/productos/blend-strech-volley-verde-militar/"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Fly-Half",
    "precio": 62900,
    "descuento": 10,
    "cuotas": null,
    "link_foto": "https://acdn.mitiendanube.com/stores/018/676/products/fotos-web-4-8c537ea03d0f9c18ff17278980880025-1024-1024.webp",
    "link_publicacion": "https://www.fly-halfrugby.com.ar/productos/traje-de-bano-canterbury-waikato-verde-militar/"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Burgues",
    "precio": 45000,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://burgues.com/media/catalog/product/cache/cdf67f21997b07d06fcedd738b8962eb/v/2/v2376dai30-2.jpg",
    "link_publicacion": "https://burgues.com/v2376dai30"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Bodacious",
    "precio": 27000,
    "descuento": 15,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/100/240/products/b4055110-d5ac-481e-b09a-f4d94d9cca16-54857ae66bc8e185ce17280453764376-1024-1024.webp",
    "link_publicacion": "https://www.bodaciousclothing.com/productos/traje-de-bano-colour/"
  },
  {
    "producto": "Malla",
    "color": "Verde",
    "marca": "Open Sports",
    "precio": 24999,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/B/S/BSH1351FOL_0.jpg",
    "link_publicacion": "https://www.opensports.com.ar/short-de-ba-o-hang-loose-voley-bsh1351fol.html"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Wayfare",
    "precio": 59990,
    "descuento": null,
    "cuotas": 9,
    "link_foto": "https://acdn.mitiendanube.com/stores/639/736/products/161d2294-2f7e-4cb0-a26b-08cbcafa0e27-80e807620d505a891417162030855165-1024-1024.webp",
    "link_publicacion": "https://www.wayfarerarg.com/productos/traje-de-bano-second-azul-marino/"
  },
  {
    "producto": "Malla",
    "color": "Azul",
    "marca": "Fly-Half",
    "precio": 62900,
    "descuento": 10,
    "cuotas": null,
    "link_foto": "https://acdn.mitiendanube.com/stores/018/676/products/nuevas-fotos-4-55-7d22b8af914836a89217274444944031-1024-1024.png",
    "link_publicacion": "https://www.fly-halfrugby.com.ar/productos/traje-de-bano-canterbury-waikato-azul-marino/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Palmera",
    "precio": 60000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/345/426/products/ram00232-0e197db94545a25c6017247969714824-1024-1024.webp",
    "link_publicacion": "https://www.palmera.com.ar/productos/traje-de-bano-surfero-negro/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Sportline",
    "precio": 26459,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://sportline.vtexassets.com/arquivos/ids/885370-1200-auto?v=638103978593300000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.sportline.com.ar/liso-negro-064510283000027/p"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "JJ deportes",
    "precio": 8999,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://celadasa.vtexassets.com/arquivos/ids/219134-1200-auto?v=638028185893570000&width=1200&height=auto&aspect=true",
    "link_publicacion": "https://www.jjdeportes.com.ar/short-de-ba%C3%B1o-hifel-liso-negro-natacion-hombre-ha0065/p?srsltid=AfmBOorRGwS5XJTLd2uO--slhrYlc-HJIz9tBll_JTdZsOFpWlNZP2Iz"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Wacky",
    "precio": 6000,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/003/191/551/products/d_930610-mla52647786367_112022-o-aceaaa9ca7cd47df3316854681126981-640-0.webp",
    "link_publicacion": "https://www.wacky.com.ar/productos/short-de-bano-hombre-prince-liso-talle-12-al-46-negro/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Sportotal",
    "precio": 6199,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://sportotalar.vtexassets.com/arquivos/ids/318377-150-auto?v=637807190987970000&width=150&height=auto&aspect=true",
    "link_publicacion": "https://www.sportotal.com.ar/malla-spt-hombre-lisa-negro1000-n-22130-negro/p?srsltid=AfmBOoq7I0aPYOtHtVrrx4DRhqKsttcg7UQ0nSQkMC-Eq3qw1K2REySM"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Trouzer",
    "precio": 17490,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://http2.mlstatic.com/D_NQ_NP_2X_825976-MLA73503308496_122023-F.webp",
    "link_publicacion": "https://www.trouzer.com.ar/MLA-1399995505-short-de-bano-hombre-liso-traje-malla-suspensor-bolsillos-_JM"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Bleemar",
    "precio": 16997,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://http2.mlstatic.com/D_Q_NP_2X_667672-MLA53545420352_012023-R.webp",
    "link_publicacion": "https://www.tienda-bleemar.com/MLA-1329381427-short-de-bano-hombre-liso-malla-traje-secado-rapido-_JM"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Wellington Polo",
    "precio": 29999,
    "descuento": 10,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/306/659/products/wp-2641-76f62238828f030c0916663742381026-1024-1024.webp",
    "link_publicacion": "https://www.wellingtonpoloclub.com.ar/productos/short-de-bano-modelo-golfo-negro/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Langosta",
    "precio": 29039,
    "descuento": 10,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/339/706/products/short-de-bano_web_021-5b291fca975492f2e516946096088716-1024-1024.webp",
    "link_publicacion": "https://langosta.ar/productos/pack-x-2-shorts-de-bano-negro-amarillo/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Cardon",
    "precio": 77600,
    "descuento": null,
    "cuotas": 3,
    "link_foto": "https://cardon.com.ar/wp-content/uploads/2024/08/121066055BT_42-1293-copia.jpg",
    "link_publicacion": "https://cardon.com.ar/shop/hombre/verano-hombre/short-de-bano-atlantida-negro-corte-clasico/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Rochas",
    "precio": 79990,
    "descuento": null,
    "cuotas": 12,
    "link_foto": "https://rochasshop.com.ar/wp-content/uploads/2023/11/PR_708011NEG_0206.jpg",
    "link_publicacion": "https://rochasshop.com.ar/shop/prev_seasons/traje-de-bano-liso-black/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Virtual",
    "precio": 39990,
    "descuento": 10,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/089/162/products/1698245001-c97d6a311c6d02a7e016982453632743-1024-1024.webp",
    "link_publicacion": "https://www.tiendapatopampa.com/productos/shorts-bano-liso-roma-negro/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "O'neill",
    "precio": 59990,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://www.oneillargentina.com/cdn/shop/files/OMK1TB04-NEGRO-01_59d38bea-2b9d-4105-ae79-8e72cb3adcb0_1200x_crop_center.jpg?v=1728307414",
    "link_publicacion": "https://www.oneillargentina.com/products/traje-de-bano-vert-negro-men-oneill"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Nopal",
    "precio": 30870,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://acdn.mitiendanube.com/stores/184/874/products/short-de-bano-adulto-negro1-9751f1fe1401eca0d216959228141310-640-0.webp",
    "link_publicacion": "https://www.nopal.com.ar/productos/short-traje-de-bano-adulto-unisex-negro/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Varo varo",
    "precio": 11147,
    "descuento": 10,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/001/958/075/products/img_80531-17fbb9e0c4db89029916617959151230-1024-1024.webp",
    "link_publicacion": "https://www.varovaro.com.ar/productos/short-de-bano-a4900/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Manki",
    "precio": 46600,
    "descuento": 15,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/252/220/products/821df2df-4d49-43b6-b9ef-f0789a15e7ac-6230a13efaab1e7c3817245180630876-1024-1024.webp",
    "link_publicacion": "https://www.mankioficial.com/productos/tdb-hawai-negra/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Discobolo",
    "precio": 30000,
    "descuento": 20,
    "cuotas": 3,
    "link_foto": "https://acdn.mitiendanube.com/stores/238/782/products/25-07-discobolo-ecom54451-ac3ad63cbe221a362a16940948888828-1024-1024.webp",
    "link_publicacion": "https://www.discobolojeans.com/productos/traje-de-bano-basic/?variant=498440579"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Vinson",
    "precio": 21180,
    "descuento": null,
    "cuotas": 6,
    "link_foto": "https://acdn.mitiendanube.com/stores/627/888/products/splash-negro-fr1-faea954a507f0f28af16914332608566-640-0.webp",
    "link_publicacion": "https://vinsonindumentaria.com.ar/productos/short-de-bano-splash-negro/"
  },
  {
    "producto": "Malla",
    "color": "Negro",
    "marca": "Etiqueta Negra",
    "precio": 66000,
    "descuento": null,
    "cuotas": null,
    "link_foto": "https://www.etiquetanegra.us/media/catalog/product/e/t/etnh_ecom_6_-_v24_-_0766.jpg?quality=100&fit=bounds&height=&width=",
    "link_publicacion": "https://www.etiquetanegra.us/03811680102.html"
  }
];

function displayProducts(productArray) {
  console.log('displayProducts');
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  productArray.forEach(product => {
      const productCard = `
          <div class="product-card">
              <img src="${product.link_foto}" alt="${product.producto}">
              <h3>${product.producto}</h3>
              <p class="marca">${product.marca}</p>
              <p class="price">$ ${product.precio.toLocaleString()}</p>
              <p class="cuotas">${product.cuotas == null ? 'No tiene' : product.cuotas } cuotas sin interes</p>
              ${product.descuento ? `<p class="discount">$ ${Math.round(product.precio / ((100 - product.descuento) / 100)).toLocaleString()}</p>` : ''}
              <p><a href="${product.link_publicacion}" target="_blank">Ver producto</a></p>
          </div>
      `;
      productList.innerHTML += productCard;
  });
}

function searchProduct() {
  console.log('searchProduct');
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredProducts = products.filter(product => product.producto.toLowerCase().includes(searchInput));
  displayProducts(filteredProducts);
}

function applyFilters() {
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;
  const colorFilter = document.getElementById('colorFilter').value;
  const genderFilter = document.getElementById('genderFilter').value;
  const cuotasFilter = document.getElementById('cuotasFilter').value;
  let filteredProducts = products;

  if (minPrice) {
      filteredProducts = filteredProducts.filter(product => product.precio >= minPrice);
  }

  if (maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.precio <= maxPrice);
  }

  if (colorFilter) {
      filteredProducts = filteredProducts.filter(product => product.color === colorFilter);
  }

  if(genderFilter){
    filteredProducts = filteredProducts.filter(product => product.producto == genderFilter);
  }

  if(cuotasFilter){

    if(cuotasFilter == "null"){
      filteredProducts = filteredProducts.filter(product => product.cuotas == null);
    }

    if(cuotasFilter != "" && cuotasFilter != "null"){
      filteredProducts = filteredProducts.filter(product => Math.trunc(product.cuotas) == Math.trunc(cuotasFilter));
    }
  }

  displayProducts(filteredProducts);
}

// Inicializa la página con todos los productos
displayProducts(products);
