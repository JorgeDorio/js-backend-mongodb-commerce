db.produtos.updateOne(
  {
    nome: "Big Mac",
  },
  {
    $set: {
      ultimaModificacao: "",
    },
  },
);
db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $currentDate: { ultimaModificacao: { $type: "date" } },
  },
);

db.produtos.find(
  { ultimaModificacao: { $ne: null } },
  {
    _id: false,
    nome: true,
  },
);
