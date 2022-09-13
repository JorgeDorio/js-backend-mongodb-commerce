db.produtos.find(
  { vendidos: { $ne: 50 } },
  { _id: false, nome: true, vendidos: true },
);
