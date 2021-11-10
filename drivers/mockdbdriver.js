import { ObjectId } from "mongodb"

const usersData = [
  { address: "Somewhere", firstName: "Patrik", lastName: "Nygren" },
  { address: "Krokslätt", lastName: "Mohammedsson", firstName: "Petter" },
  { address: "Mölndal", lastName: "Andreasson", firstName: "Pontus" },
  { address: "Majorna", lastName: "Olofsson", firstName: "Per" },
]

const productsData = [
  { name: "Köttbullar", amount: 5, cost: 10 },
  { name: "Potatis", amount: 10, cost: 3 },
  { name: "Gurka", amount: 5, cost: 5 },
]

const ordersData = [
  { productId: 222, userId: 222, date: new Date() },
  { productId: 555, userId: 444, date: new Date() },
]

class MockCRUD {
  constructor(data) {
    this.data = data.map((data) => ({ _id: new ObjectId(), ...data }))
    this.deleted = 0
  }

  async getAll() {
    return this.data
  }

  async getOne(id) {
    return this.data.find((item) => item._id.toString() === id._id.toString())
  }

  async createOne(data) {
    try {
      return this.data.push({ _id: new ObjectId(), ...data })
    } catch (err) {
      throw err
    }
  }

  async deleteOne(id) {
    this.data = this.data.filter((item) => {
      return item._id.toString() !== id._id.toString()
    })
    return (this.deleted += 1)
  }
}

const createMockDb = () => {
  const users = new MockCRUD(usersData)
  const products = new MockCRUD(productsData)
  const orders = new MockCRUD(ordersData)
  return { users, products, orders }
}

const mockdbDriver = () => {
  return createMockDb()
}

export { mockdbDriver }
