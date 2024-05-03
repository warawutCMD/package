const { productModel } = require('./models');
const { connection } = require('./database');
const { BaseCRUD } = require('./crud');

class ProductRepository extends BaseCRUD {
  constructor() {
    const db = connection.connect('mysql');
    super(productModel(db));
  }

  // ฟังก์ชันสำหรับสร้าง Product
  async create(productData) {
    try {
      // สร้าง Product ในฐานข้อมูล
      const product = await this.model.create(productData); // ใช้ this.model แทน Product
      return product;
    } catch (error) {
      throw new Error('Error creating product');
    }
  }

  // ฟังก์ชันอื่น ๆ ตามต้องการ เช่น update, delete, findById
  // ที่ใช้วิธีเดียวกับ create ในการใช้งาน model

  async update(productId, newData) {
    try {
      // ค้นหา Product จาก ID และอัพเดทข้อมูล
      const product = await this.model.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.update(newData);
      return product;
    } catch (error) {
      throw new Error('Error updating product');
    }
  }

  async delete(productId) {
    try {
      // ค้นหาและลบ Product จาก ID
      const product = await this.model.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.destroy();
    } catch (error) {
      throw new Error('Error deleting product');
    }
  }

  async findById(productId) {
    try {
      // ค้นหา Product จาก ID
      const product = await this.model.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Error finding product');
    }
  }

  // ฟังก์ชันสำหรับค้นหาทุก Products
  async findAll() {
    try {
      // ค้นหาทุก Product ในฐานข้อมูล
      const products = await this.model.findAll();
      return products;
    } catch (error) {
      throw new Error('Error finding all products');
    }
  }

}

module.exports = ProductRepository;


