import { Random } from "../random";
import { ROLE_DEFINITIONS, EMAIL_DOMAINS, type RoleDefinition } from "../constants";
import { generateName } from "./personal";

export type AccountRoleMode = "random" | "admin" | "operator" | "viewer" | "service";

export const ACCOUNT_ROLE_LABELS: Record<AccountRoleMode, string> = {
  random: "随机角色",
  admin: "管理员",
  operator: "运营",
  viewer: "只读",
  service: "服务账号",
};

export interface AccountRecord {
  index: number;
  username: string;
  displayName: string;
  email: string;
  password: string;
  role: string;
  permission: string;
  apiKey: string;
  token: string;
  avatarText: string;
  avatarColor: string;
}

function resolveRole(rnd: Random, mode: AccountRoleMode): RoleDefinition {
  if (mode !== "random") {
    return ROLE_DEFINITIONS.find((r) => r.key === mode) ?? ROLE_DEFINITIONS[0];
  }
  return rnd.pick(ROLE_DEFINITIONS);
}

export function createAccountRecord(rnd: Random, mode: AccountRoleMode, index: number): AccountRecord {
  const role = resolveRole(rnd, mode);
  const displayName = generateName(rnd, rnd.pick(["男", "女"]));
  const username = `mock_${rnd.slug(8)}`;
  return {
    index,
    username,
    displayName,
    email: `${username}@${rnd.pick(EMAIL_DOMAINS)}`,
    password: `Mp!${rnd.alphaNumeric(8)}${rnd.int(10, 99)}`,
    role: role.label,
    permission: rnd.pick(role.permissions),
    apiKey: `mk_${rnd.hex(24)}`,
    token: `tok_${rnd.hex(32)}`,
    avatarText: Array.from(displayName).slice(0, 1).join(""),
    avatarColor: rnd.hexColor(),
  };
}

export function createAccountRecords(rnd: Random, count: number, mode: AccountRoleMode): AccountRecord[] {
  return Array.from({ length: count }, (_, i) => createAccountRecord(rnd, mode, i + 1));
}
