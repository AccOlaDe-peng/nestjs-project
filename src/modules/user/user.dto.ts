export type roleType = 1 | 2 | 3; //1 管理员、 2：普通用户、 3：访客
export interface CreateUserDto {
  username: string;
  password: string;
  role: roleType;
}
