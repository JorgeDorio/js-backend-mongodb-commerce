db.produtos.find(
  {
    $and: [{ vendidos: { $ne: 50 } }, { tags: { $exists: false } }],
  },
  { _id: 0, nome: true, vendidos: true },
);
