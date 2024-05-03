// core/repository/user.repository.js

// ตัวอย่าง user.repository.js ที่ใช้ Sequelize ORM
const { User } = require('../models'); // import model ของ User

class UserRepository {
    constructor() {
        const db = connection.connect('mysql');
        super(instanceModel(db));
      }
      
  async findAll() {
    return User.findAll(); // ดึงข้อมูลทั้งหมดของผู้ใช้
  }

  async findById(id) {
    return User.findByPk(id); // ค้นหาผู้ใช้โดยใช้ id
  }

  async create(userData) {
    return User.create(userData); // สร้างผู้ใช้ใหม่
  }

  async update(id, userData) {
    const user = await User.findByPk(id); // ค้นหาผู้ใช้ที่ต้องการอัปเดต
    if (!user) {
      throw new Error('User not found');
    }
    return user.update(userData); // อัปเดตข้อมูลผู้ใช้
  }

  async delete(id) {
    const user = await User.findByPk(id); // ค้นหาผู้ใช้ที่ต้องการลบ
    if (!user) {
      throw new Error('User not found');
    }
    return user.destroy(); // ลบผู้ใช้
  }
}

module.exports = UserRepository;
