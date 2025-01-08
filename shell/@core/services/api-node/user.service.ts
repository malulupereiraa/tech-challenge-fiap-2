/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { endpoints } from "@/@core/config/endpoint";
import { bindUrlService } from "@/@core/utils/bind-url-paths";

class UserService {
  updateUser(hookHandler: any, criteria: any, path: any) {
    const fullEndPoint = bindUrlService.BindUrlPaths(endpoints.users.put, path);
    return hookHandler.put(fullEndPoint, criteria);
  }
}

export default new UserService();
