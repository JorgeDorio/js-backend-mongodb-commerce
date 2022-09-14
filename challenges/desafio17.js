db.createCollection("resumoProdutos");

db.resumoProdutos.insert({
  franquia: "McDonalds",
  totalProdutos: db.produtos.count(),
});

db.resumoProdutos.find(
  { franquia: "McDonalds" },
  { _id: 0, franquia: 1, totalProdutos: 1 },
);
