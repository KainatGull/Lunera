export const products = [
  { id:"aleo-tube", name:"Dew Concentrate", category:"Face", price:48, description:"A brightening botanical serum for thirsty skin.", image:"/assets/aleo tube.jfif", rating:4.9, reviews:86, size:"30 ml", stock:18, tags:["serum","brightening","vegan"] },
  { id:"renew-serum", name:"Field Cleanser", category:"Face", price:32, description:"A milky rinse for the first ritual of the day.", image:"/assets/renew serum.jfif", rating:4.8, reviews:112, size:"120 ml", stock:26, tags:["cleanser","sensitive","oat"] },
  { id:"cucumber-soap", name:"Cucumber Soap", category:"Face", price:44, description:"A gentle cucumber soap made for a soft and refreshing daily cleanse.", image:"/assets/cucumber soap.jfif", rating:4.7, reviews:64, size:"50 g", stock:9, tags:["soap","cucumber","gentle"] },
  { id:"almond-soap", name:"Almond Soap", category:"Body", price:38, description:"A nourishing almond soap with a soft, comforting lather for everyday use.", image:"/assets/almond soap.jfif", rating:4.9, reviews:47, size:"100 g", stock:21, tags:["soap","almond","body"] },
  { id:"gel", name:"Soft Hands", category:"Body", price:22, description:"A rich hand balm made to keep hands feeling soft and comfortable throughout the day.", image:"/assets/gel.png", rating:4.6, reviews:39, size:"45 g", stock:34, tags:["hands","balm","care"] },
  { id:"lavender-soap", name:"The Evening Lavender", category:"Ritual Sets", price:84, description:"A calming lavender ritual designed for a slower, softer evening routine.", image:"/assets/lavender soap.jfif", rating:5, reviews:31, size:"3 pieces", stock:7, tags:["lavender","ritual","evening"] },
  { id:"peach", name:"Peach Scrub", category:"Ritual Sets", price:58, description:"A gentle peach scrub for a fresh, smooth and softly polished feel.", image:"/assets/peach.jfif", rating:4.8, reviews:25, size:"100 g", stock:15, tags:["peach","scrub","ritual"] },
  { id:"rose-soap", name:"Rose Soap", category:"Body", price:18, description:"A gentle rose soap with a soft lather for everyday hands and body care.", image:"/assets/rose soap.jfif", rating:4.5, reviews:28, size:"110 g", stock:42, tags:["rose","soap","body"] },
];

export const getProduct = id => products.find(p => p.id === id);
