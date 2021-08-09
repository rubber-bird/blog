

module.exports = {
  author: async (parent) => {
    let res = authors.filter(a => a.id === parent.author)
    console.log(res)
    return res[0]
  }
}