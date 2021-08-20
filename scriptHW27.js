const allThings =
  "кусок дерева, Ненужная скромность, Очки Элвиса,  ненужные сомнения, Цветное стекло, Амулет от артрита, Лошадиные скачки,  Книга, Ненужное мороженое, Ваза, ненужный желудь, бейсбольная карточка"
const needfulThings = allThings
  .split(", ")
  .filter((item) => {
    if (item.startsWith(" ")) {
      return !item.startsWith("енуж", 2)
    } else {
      return !item.startsWith("енуж", 1)
    }
  })
  .join(", ")
console.log(needfulThings)
