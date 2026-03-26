import { Role } from "../models/role.model.js";
import { Permission } from "../models/permission.model.js";
import { RolePermission } from "../models/rolePermission.model.js";
import { connectDB } from "../config/db.js";

const seedRBAC = async () => {
  try {
    await connectDB(); // 🔥 IMPORTANT

    // clear old data (optional but recommended)
    await Role.deleteMany();
    await Permission.deleteMany();
    await RolePermission.deleteMany();

    const adminRole = await Role.create({ name: "admin" });
    const userRole = await Role.create({ name: "user" });

    const createProduct = await Permission.create({
      name: "create_product",
    });

    const deleteProduct = await Permission.create({
      name: "delete_product",
    });

    await RolePermission.create([
      { role: adminRole._id, permission: createProduct._id },
      { role: adminRole._id, permission: deleteProduct._id },
    ]);

    console.log("✅ RBAC Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedRBAC();
