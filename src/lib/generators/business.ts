import { Random } from "../random";
import {
  PRODUCT_NAMES, TASK_TITLES, ORDER_STATUSES, PAYMENT_CHANNELS,
  PAYMENT_STATUSES, PRIORITIES,
} from "../constants";
import { generateName } from "./personal";
import { formatDate, randomDate } from "../datetime";

export type BusinessDomain = "all" | "order" | "product" | "task";

export const BUSINESS_DOMAIN_LABELS: Record<BusinessDomain, string> = {
  all: "综合业务",
  order: "订单支付",
  product: "商品库存",
  task: "工单任务",
};

export type BusinessRecord = Record<string, string | number>;

function todayCompact(): string {
  return formatDate(new Date()).replaceAll("-", "");
}

export function createOrderRecord(rnd: Random, index: number): BusinessRecord {
  const price = Number((rnd.float() * 999 + 20).toFixed(2));
  const quantity = rnd.int(1, 5);
  return {
    index,
    orderId: `MO${todayCompact()}${rnd.digits(8)}`,
    productName: rnd.pick(PRODUCT_NAMES),
    sku: `SKU-${rnd.slug(4).toUpperCase()}-${rnd.int(100, 999)}`,
    price,
    amount: Number((price * quantity).toFixed(2)),
    orderStatus: rnd.pick(ORDER_STATUSES),
    paymentNo: `PAY${rnd.digits(14)}`,
    paymentChannel: rnd.pick(PAYMENT_CHANNELS),
    paymentStatus: rnd.pick(PAYMENT_STATUSES),
  };
}

export function createProductRecord(rnd: Random, index: number): BusinessRecord {
  return {
    index,
    productName: rnd.pick(PRODUCT_NAMES),
    sku: `SKU-${rnd.slug(4).toUpperCase()}-${rnd.int(100, 999)}`,
    price: Number((rnd.float() * 999 + 20).toFixed(2)),
    inventory: rnd.int(0, 999),
  };
}

export function createTaskRecord(rnd: Random, index: number): BusinessRecord {
  return {
    index,
    taskId: `TASK-${rnd.digits(6)}`,
    taskTitle: rnd.pick(TASK_TITLES),
    priority: rnd.pick(PRIORITIES),
    assignee: generateName(rnd, rnd.pick(["男", "女"])),
    dueDate: formatDate(randomDate(rnd, new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 45))),
  };
}

export function createBusinessRecord(rnd: Random, domain: BusinessDomain, index: number): BusinessRecord {
  if (domain === "order") return createOrderRecord(rnd, index);
  if (domain === "product") return createProductRecord(rnd, index);
  if (domain === "task") return createTaskRecord(rnd, index);
  return {
    ...createOrderRecord(rnd, index),
    inventory: rnd.int(0, 999),
    taskId: `TASK-${rnd.digits(6)}`,
    priority: rnd.pick(PRIORITIES),
    assignee: generateName(rnd, rnd.pick(["男", "女"])),
  };
}

export function createBusinessRecords(rnd: Random, count: number, domain: BusinessDomain): BusinessRecord[] {
  return Array.from({ length: count }, (_, i) => createBusinessRecord(rnd, domain, i + 1));
}
