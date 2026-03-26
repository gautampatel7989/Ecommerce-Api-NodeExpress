import { RolePermission } from "../models/rolePermission.model.js";
import { ApiError } from "../utils/appError.js";

export const authorize = (permissionName) => {
  return async (req, res, next) => {
    const roleId = req.user.role;
    console.log("roleID::", roleId);
    const hasPermission = await RolePermission.findOne()
      .populate("permission")
      .where("role")
      .equals(roleId)
      .where("permission.name")
      .equals(permissionName);

    if (!hasPermission) {
      return next(new ApiError("Forbidden", 403));
    }
    next();
  };
};
