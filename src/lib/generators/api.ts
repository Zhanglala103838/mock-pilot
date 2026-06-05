import { Random } from "../random";
import { clamp } from "../random";
import { randomDate } from "../datetime";

export type ApiStatusKey = "success" | "empty" | "validation" | "unauthorized" | "server";
export type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiStatusConfig {
  httpStatus: number;
  code: number;
  message: string;
}

export const API_STATUS_CONFIG: Record<ApiStatusKey, ApiStatusConfig> = {
  success: { httpStatus: 200, code: 0, message: "success" },
  empty: { httpStatus: 200, code: 0, message: "success" },
  validation: { httpStatus: 400, code: 40001, message: "invalid parameters" },
  unauthorized: { httpStatus: 401, code: 40100, message: "unauthorized" },
  server: { httpStatus: 500, code: 50000, message: "internal server error" },
};

export const API_STATUS_LABELS: Record<ApiStatusKey, string> = {
  success: "成功（含分页列表）",
  empty: "空列表",
  validation: "参数校验错误 400",
  unauthorized: "未授权 401",
  server: "服务异常 500",
};

export interface ApiRequestInput {
  method: ApiMethod;
  status: ApiStatusKey;
  endpoint: string;
  pageSize: number;
}

export function normalizeEndpoint(value: string): string {
  const trimmed = value.trim() || "/api/mock/items";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function errorDetail(status: ApiStatusKey): string {
  const details: Partial<Record<ApiStatusKey, string>> = {
    validation: "字段 pageSize 必须是 0 到 100 之间的整数",
    unauthorized: "缺少 Authorization 请求头或 Token 已过期",
    server: "上游服务超时，请稍后重试",
  };
  return details[status] ?? "请求处理失败";
}

export function createApiResponse(rnd: Random, input: ApiRequestInput): Record<string, unknown> {
  const config = API_STATUS_CONFIG[input.status] ?? API_STATUS_CONFIG.success;
  const endpoint = normalizeEndpoint(input.endpoint);
  const pageSize = clamp(input.pageSize || 0, 0, 100);
  const method = input.method;

  const data =
    input.status === "empty"
      ? []
      : Array.from({ length: input.status === "success" ? pageSize : 0 }, (_, index) => ({
          id: `item_${rnd.slug(8)}`,
          name: `Mock Item ${index + 1}`,
          status: rnd.pick(["active", "pending", "archived"]),
          createdAt: randomDate(rnd, new Date(2024, 0, 1), new Date()).toISOString(),
        }));

  if (config.httpStatus < 400) {
    return {
      code: config.code,
      message: config.message,
      request: { method, endpoint },
      data,
      pagination: {
        page: 1,
        pageSize,
        total: input.status === "empty" ? 0 : pageSize + rnd.int(20, 240),
      },
    };
  }
  return {
    code: config.code,
    message: config.message,
    request: { method, endpoint },
    data: null,
    error: { traceId: `trace_${rnd.hex(16)}`, detail: errorDetail(input.status) },
  };
}
