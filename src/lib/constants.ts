// 生成器数据表与标签映射，移植自旧 app.js（数据均为虚构，仅供测试演示）。

export interface RegionEntry {
  code: string;
  province: string;
  city: string;
  district: string;
}

export const REGIONS: readonly RegionEntry[] = [
  { code: "110101", province: "北京市", city: "北京市", district: "东城区" },
  { code: "110105", province: "北京市", city: "北京市", district: "朝阳区" },
  { code: "110108", province: "北京市", city: "北京市", district: "海淀区" },
  { code: "120101", province: "天津市", city: "天津市", district: "和平区" },
  { code: "310101", province: "上海市", city: "上海市", district: "黄浦区" },
  { code: "310104", province: "上海市", city: "上海市", district: "徐汇区" },
  { code: "310115", province: "上海市", city: "上海市", district: "浦东新区" },
  { code: "440104", province: "广东省", city: "广州市", district: "越秀区" },
  { code: "440106", province: "广东省", city: "广州市", district: "天河区" },
  { code: "440304", province: "广东省", city: "深圳市", district: "福田区" },
  { code: "440305", province: "广东省", city: "深圳市", district: "南山区" },
  { code: "330105", province: "浙江省", city: "杭州市", district: "拱墅区" },
  { code: "330106", province: "浙江省", city: "杭州市", district: "西湖区" },
  { code: "320102", province: "江苏省", city: "南京市", district: "玄武区" },
  { code: "320508", province: "江苏省", city: "苏州市", district: "姑苏区" },
  { code: "510104", province: "四川省", city: "成都市", district: "锦江区" },
  { code: "510107", province: "四川省", city: "成都市", district: "武侯区" },
  { code: "420106", province: "湖北省", city: "武汉市", district: "武昌区" },
  { code: "430104", province: "湖南省", city: "长沙市", district: "岳麓区" },
  { code: "610103", province: "陕西省", city: "西安市", district: "碑林区" },
  { code: "610113", province: "陕西省", city: "西安市", district: "雁塔区" },
  { code: "370102", province: "山东省", city: "济南市", district: "历下区" },
  { code: "370202", province: "山东省", city: "青岛市", district: "市南区" },
  { code: "410105", province: "河南省", city: "郑州市", district: "金水区" },
  { code: "210102", province: "辽宁省", city: "沈阳市", district: "和平区" },
  { code: "210202", province: "辽宁省", city: "大连市", district: "中山区" },
  { code: "230103", province: "黑龙江省", city: "哈尔滨市", district: "南岗区" },
  { code: "220104", province: "吉林省", city: "长春市", district: "朝阳区" },
  { code: "340104", province: "安徽省", city: "合肥市", district: "蜀山区" },
  { code: "350102", province: "福建省", city: "福州市", district: "鼓楼区" },
  { code: "350203", province: "福建省", city: "厦门市", district: "思明区" },
  { code: "360102", province: "江西省", city: "南昌市", district: "东湖区" },
  { code: "450103", province: "广西壮族自治区", city: "南宁市", district: "青秀区" },
  { code: "520102", province: "贵州省", city: "贵阳市", district: "南明区" },
  { code: "530102", province: "云南省", city: "昆明市", district: "五华区" },
  { code: "650102", province: "新疆维吾尔自治区", city: "乌鲁木齐市", district: "天山区" },
  { code: "540102", province: "西藏自治区", city: "拉萨市", district: "城关区" },
  { code: "150102", province: "内蒙古自治区", city: "呼和浩特市", district: "新城区" },
  { code: "460106", province: "海南省", city: "海口市", district: "龙华区" },
  { code: "460203", province: "海南省", city: "三亚市", district: "吉阳区" },
  { code: "500103", province: "重庆市", city: "重庆市", district: "渝中区" },
];

export const MOBILE_PREFIXES: readonly string[] = [
  "130", "131", "132", "133", "134", "135", "136", "137", "138", "139",
  "145", "147", "149", "150", "151", "152", "153", "155", "156", "157",
  "158", "159", "166", "171", "172", "173", "175", "176", "177", "178",
  "180", "181", "182", "183", "184", "185", "186", "187", "188", "189",
  "191", "193", "195", "196", "197", "198", "199",
];

export const SURNAMES: readonly string[] = [
  "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫",
  "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张",
  "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "谢", "邹", "喻", "柏",
  "窦", "章", "云", "苏", "潘", "葛", "范", "彭", "鲁", "韦", "昌", "马",
  "苗", "凤", "花", "方", "任", "袁", "柳", "鲍", "史", "唐", "费", "廉",
  "岑", "薛", "雷", "贺", "倪", "汤", "滕", "罗", "毕", "郝", "安", "常",
  "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜",
  "顾", "孟", "平", "黄", "和", "穆", "萧", "尹", "欧阳", "上官", "司马",
];

export const GIVEN_NAME_PARTS: Record<"男" | "女", readonly string[]> = {
  男: ["宇", "轩", "辰", "泽", "睿", "航", "铭", "博", "昊", "骁", "远", "峻", "朗", "承", "煦", "衡", "景", "川"],
  女: ["沐", "瑶", "芷", "宁", "柠", "妍", "若", "晴", "安", "玥", "诗", "涵", "知", "澄", "禾", "乔", "栀", "棠"],
};

export const STREETS = ["人民路", "建设路", "解放路", "中山路", "新华路", "长江路", "复兴路", "朝阳路", "青年路", "滨河路"] as const;
export const COMPANY_PREFIXES = ["华远", "启明", "云舟", "瑞禾", "星环", "方隅", "朗岳", "青岚", "鼎新", "墨川", "金策", "北辰"] as const;
export const COMPANY_INDUSTRIES = ["科技", "信息", "数据", "贸易", "咨询", "智能", "传媒", "医疗", "教育", "供应链", "新能源", "网络"] as const;
export const COMPANY_SUFFIXES = ["有限公司", "股份有限公司", "集团有限公司"] as const;
export const OCCUPATIONS = ["产品经理", "前端工程师", "运营专员", "财务分析师", "教师", "医生", "律师", "设计师", "销售顾问", "研究员"] as const;
export const EMAIL_DOMAINS = ["example.cn", "mockmail.cn", "testdata.cn", "demo.cn"] as const;

// GB 11643 身份证校验位算法常量。
export const ID_WEIGHTS = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] as const;
export const ID_CHECK_CODES = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"] as const;

export interface RoleDefinition {
  key: string;
  label: string;
  permissions: readonly string[];
}

export const ROLE_DEFINITIONS: readonly RoleDefinition[] = [
  { key: "admin", label: "管理员", permissions: ["user:create", "user:update", "order:refund", "report:read"] },
  { key: "operator", label: "运营", permissions: ["product:update", "order:read", "coupon:create", "content:publish"] },
  { key: "viewer", label: "只读", permissions: ["user:read", "order:read", "report:read"] },
  { key: "service", label: "服务账号", permissions: ["api:invoke", "webhook:send", "job:run"] },
];

export const PRODUCT_NAMES = ["智能水杯", "降噪耳机", "便携键盘", "护眼台灯", "收纳背包", "空气炸锅", "运动手环", "桌面支架"] as const;
export const TASK_TITLES = ["修复登录异常", "补齐订单导出", "核对库存同步", "审核营销素材", "处理退款工单", "更新权限配置"] as const;
export const ORDER_STATUSES = ["待支付", "已支付", "已发货", "已完成", "已取消", "退款中"] as const;
export const PAYMENT_CHANNELS = ["支付宝", "微信支付", "银联", "企业转账"] as const;
export const PAYMENT_STATUSES = ["待支付", "支付成功", "支付失败", "已退款"] as const;
export const PRIORITIES = ["P0", "P1", "P2", "P3"] as const;

// 输出字段中文标签（表头/卡片）。
export const OUTPUT_LABELS: Record<string, string> = {
  index: "序号", type: "类型", value: "值",
  name: "姓名", gender: "性别", phone: "手机号", idNumber: "身份证号",
  birthDate: "出生日期", age: "年龄", province: "省份", city: "城市", district: "区县",
  address: "联系地址", company: "所属公司", email: "邮箱", occupation: "职业",
  stringValue: "字符串", integerValue: "整数", decimalValue: "小数", amount: "金额",
  percent: "百分比", booleanValue: "布尔值", enumValue: "枚举", nullableValue: "空值样本",
  dateValue: "日期", timestamp: "时间戳", url: "URL", ipv4: "IPv4",
  hexColor: "HEX 颜色", rgbColor: "RGB 颜色",
  username: "用户名", displayName: "显示名", password: "测试密码", role: "角色",
  permission: "权限码", apiKey: "API Key", token: "Token", avatarText: "头像文字", avatarColor: "头像色值",
  orderId: "订单号", productName: "商品名", sku: "SKU", price: "价格", inventory: "库存",
  orderStatus: "订单状态", paymentNo: "支付单号", paymentChannel: "支付渠道", paymentStatus: "支付状态",
  taskId: "任务号", taskTitle: "任务标题", priority: "优先级", assignee: "负责人", dueDate: "截止日期",
  uuid: "UUID",
};

export function outputLabel(key: string): string {
  return OUTPUT_LABELS[key] ?? key;
}
