const FIELD_DEFINITIONS = [
  { key: "name", label: "姓名", default: true },
  { key: "gender", label: "性别", default: true },
  { key: "phone", label: "手机号", default: true },
  { key: "idNumber", label: "身份证号", default: true },
  { key: "birthDate", label: "出生日期" },
  { key: "age", label: "年龄" },
  { key: "province", label: "省份" },
  { key: "city", label: "城市" },
  { key: "district", label: "区县" },
  { key: "address", label: "联系地址" },
  { key: "company", label: "所属公司" },
  { key: "email", label: "邮箱" },
  { key: "occupation", label: "职业" },
];

const REGIONS = [
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

const MOBILE_PREFIXES = [
  "130", "131", "132", "133", "134", "135", "136", "137", "138", "139",
  "145", "147", "149", "150", "151", "152", "153", "155", "156", "157",
  "158", "159", "166", "171", "172", "173", "175", "176", "177", "178",
  "180", "181", "182", "183", "184", "185", "186", "187", "188", "189",
  "191", "193", "195", "196", "197", "198", "199",
];

const SURNAMES = [
  "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫",
  "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张",
  "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "谢", "邹", "喻", "柏",
  "窦", "章", "云", "苏", "潘", "葛", "范", "彭", "鲁", "韦", "昌", "马",
  "苗", "凤", "花", "方", "任", "袁", "柳", "鲍", "史", "唐", "费", "廉",
  "岑", "薛", "雷", "贺", "倪", "汤", "滕", "罗", "毕", "郝", "安", "常",
  "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜",
  "顾", "孟", "平", "黄", "和", "穆", "萧", "尹", "欧阳", "上官", "司马",
];

const GIVEN_NAME_PARTS = {
  "男": ["宇", "轩", "辰", "泽", "睿", "航", "铭", "博", "昊", "骁", "远", "峻", "朗", "承", "煦", "衡", "景", "川"],
  "女": ["沐", "瑶", "芷", "宁", "柠", "妍", "若", "晴", "安", "玥", "诗", "涵", "知", "澄", "禾", "乔", "栀", "棠"],
};

const STREETS = ["人民路", "建设路", "解放路", "中山路", "新华路", "长江路", "复兴路", "朝阳路", "青年路", "滨河路"];
const COMPANY_PREFIXES = ["华远", "启明", "云舟", "瑞禾", "星环", "方隅", "朗岳", "青岚", "鼎新", "墨川", "金策", "北辰"];
const COMPANY_INDUSTRIES = ["科技", "信息", "数据", "贸易", "咨询", "智能", "传媒", "医疗", "教育", "供应链", "新能源", "网络"];
const COMPANY_SUFFIXES = ["有限公司", "股份有限公司", "集团有限公司"];
const OCCUPATIONS = ["产品经理", "前端工程师", "运营专员", "财务分析师", "教师", "医生", "律师", "设计师", "销售顾问", "研究员"];
const EMAIL_DOMAINS = ["example.cn", "mockmail.cn", "testdata.cn", "demo.cn"];
const ID_WEIGHTS = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
const ID_CHECK_CODES = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
const IMAGE_MIN_SIZE = 16;
const IMAGE_MAX_SIZE = 4096;
const GENERAL_KIND_LABELS = {
  all: "全量字段",
  string: "随机字符串",
  number: "数字",
  datetime: "日期时间",
  web: "URL / IP",
  color: "颜色值",
  enum: "枚举 / 布尔 / 空值",
};
const ACCOUNT_ROLE_LABELS = {
  random: "随机角色",
  admin: "管理员",
  operator: "运营",
  viewer: "只读",
  service: "服务账号",
};
const BUSINESS_DOMAIN_LABELS = {
  all: "综合业务",
  order: "订单支付",
  product: "商品库存",
  task: "工单任务",
};
const API_STATUS_CONFIG = {
  success: { httpStatus: 200, code: 0, message: "success" },
  empty: { httpStatus: 200, code: 0, message: "success" },
  validation: { httpStatus: 400, code: 40001, message: "invalid parameters" },
  unauthorized: { httpStatus: 401, code: 40100, message: "unauthorized" },
  server: { httpStatus: 500, code: 50000, message: "internal server error" },
};
const OUTPUT_LABELS = {
  index: "序号",
  type: "类型",
  value: "值",
  stringValue: "字符串",
  integerValue: "整数",
  decimalValue: "小数",
  amount: "金额",
  percent: "百分比",
  booleanValue: "布尔值",
  enumValue: "枚举",
  nullableValue: "空值样本",
  dateValue: "日期",
  timestamp: "时间戳",
  url: "URL",
  ipv4: "IPv4",
  hexColor: "HEX 颜色",
  rgbColor: "RGB 颜色",
  username: "用户名",
  displayName: "显示名",
  email: "邮箱",
  password: "测试密码",
  role: "角色",
  permission: "权限码",
  apiKey: "API Key",
  token: "Token",
  avatarText: "头像文字",
  avatarColor: "头像色值",
  orderId: "订单号",
  productName: "商品名",
  sku: "SKU",
  price: "价格",
  inventory: "库存",
  orderStatus: "订单状态",
  paymentNo: "支付单号",
  paymentChannel: "支付渠道",
  paymentStatus: "支付状态",
  taskId: "任务号",
  taskTitle: "任务标题",
  priority: "优先级",
  assignee: "负责人",
  dueDate: "截止日期",
};
const ROLE_DEFINITIONS = [
  { key: "admin", label: "管理员", permissions: ["user:create", "user:update", "order:refund", "report:read"] },
  { key: "operator", label: "运营", permissions: ["product:update", "order:read", "coupon:create", "content:publish"] },
  { key: "viewer", label: "只读", permissions: ["user:read", "order:read", "report:read"] },
  { key: "service", label: "服务账号", permissions: ["api:invoke", "webhook:send", "job:run"] },
];
const PRODUCT_NAMES = ["智能水杯", "降噪耳机", "便携键盘", "护眼台灯", "收纳背包", "空气炸锅", "运动手环", "桌面支架"];
const TASK_TITLES = ["修复登录异常", "补齐订单导出", "核对库存同步", "审核营销素材", "处理退款工单", "更新权限配置"];
const ORDER_STATUSES = ["待支付", "已支付", "已发货", "已完成", "已取消", "退款中"];
const PAYMENT_CHANNELS = ["支付宝", "微信支付", "银联", "企业转账"];
const PAYMENT_STATUSES = ["待支付", "支付成功", "支付失败", "已退款"];
const PRIORITIES = ["P0", "P1", "P2", "P3"];

const state = {
  records: [],
  uuidRecords: [],
  generalRecords: [],
  accountRecords: [],
  businessRecords: [],
  apiResponse: {},
  image: {
    width: 800,
    height: 450,
    label: "",
    shape: "rectangle",
  },
  selectedFields: FIELD_DEFINITIONS.filter((field) => field.default).map((field) => field.key),
};

const tabs = document.querySelectorAll(".tool-tab");
const panels = document.querySelectorAll(".tool-panel");
const fieldOptions = document.querySelector("#field-options");
const controlForm = document.querySelector("#control-form");
const recordCountInput = document.querySelector("#record-count");
const genderModeInput = document.querySelector("#gender-mode");
const birthStartInput = document.querySelector("#birth-start");
const birthEndInput = document.querySelector("#birth-end");
const nameTestSuffixInput = document.querySelector("#name-test-suffix");
const tableWrap = document.querySelector("#table-wrap");
const jsonOutput = document.querySelector("#json-output");
const summaryCount = document.querySelector("#summary-count");
const summaryFields = document.querySelector("#summary-fields");
const toast = document.querySelector("#toast");
const copyJsonButton = document.querySelector("#copy-json");
const copyCsvButton = document.querySelector("#copy-csv");
const downloadCsvButton = document.querySelector("#download-csv");
const uuidForm = document.querySelector("#uuid-form");
const uuidCountInput = document.querySelector("#uuid-count");
const uuidUppercaseInput = document.querySelector("#uuid-uppercase");
const uuidCompactInput = document.querySelector("#uuid-compact");
const uuidTableWrap = document.querySelector("#uuid-table-wrap");
const uuidJsonOutput = document.querySelector("#uuid-json-output");
const uuidSummaryCount = document.querySelector("#uuid-summary-count");
const uuidSummaryFormat = document.querySelector("#uuid-summary-format");
const copyUuidListButton = document.querySelector("#copy-uuid-list");
const copyUuidJsonButton = document.querySelector("#copy-uuid-json");
const downloadUuidTxtButton = document.querySelector("#download-uuid-txt");
const imageForm = document.querySelector("#image-form");
const imageWidthInput = document.querySelector("#image-width");
const imageHeightInput = document.querySelector("#image-height");
const imageLabelInput = document.querySelector("#image-label");
const imageSummarySize = document.querySelector("#image-summary-size");
const imageSummaryShape = document.querySelector("#image-summary-shape");
const imageShapeInputs = document.querySelectorAll("input[name='imageShape']");
const mockImageCanvas = document.querySelector("#mock-image-canvas");
const downloadImageButton = document.querySelector("#download-image");
const generalForm = document.querySelector("#general-form");
const generalCountInput = document.querySelector("#general-count");
const generalKindInput = document.querySelector("#general-kind");
const generalTableWrap = document.querySelector("#general-table-wrap");
const generalJsonOutput = document.querySelector("#general-json-output");
const generalSummaryCount = document.querySelector("#general-summary-count");
const generalSummaryKind = document.querySelector("#general-summary-kind");
const copyGeneralJsonButton = document.querySelector("#copy-general-json");
const copyGeneralCsvButton = document.querySelector("#copy-general-csv");
const downloadGeneralCsvButton = document.querySelector("#download-general-csv");
const accountForm = document.querySelector("#account-form");
const accountCountInput = document.querySelector("#account-count");
const accountRoleModeInput = document.querySelector("#account-role-mode");
const accountTableWrap = document.querySelector("#account-table-wrap");
const accountJsonOutput = document.querySelector("#account-json-output");
const accountSummaryCount = document.querySelector("#account-summary-count");
const accountSummaryKind = document.querySelector("#account-summary-kind");
const copyAccountJsonButton = document.querySelector("#copy-account-json");
const copyAccountCsvButton = document.querySelector("#copy-account-csv");
const downloadAccountCsvButton = document.querySelector("#download-account-csv");
const businessForm = document.querySelector("#business-form");
const businessCountInput = document.querySelector("#business-count");
const businessDomainInput = document.querySelector("#business-domain");
const businessTableWrap = document.querySelector("#business-table-wrap");
const businessJsonOutput = document.querySelector("#business-json-output");
const businessSummaryCount = document.querySelector("#business-summary-count");
const businessSummaryKind = document.querySelector("#business-summary-kind");
const copyBusinessJsonButton = document.querySelector("#copy-business-json");
const copyBusinessCsvButton = document.querySelector("#copy-business-csv");
const downloadBusinessCsvButton = document.querySelector("#download-business-csv");
const apiForm = document.querySelector("#api-form");
const apiMethodInput = document.querySelector("#api-method");
const apiStatusInput = document.querySelector("#api-status");
const apiEndpointInput = document.querySelector("#api-endpoint");
const apiPageSizeInput = document.querySelector("#api-page-size");
const apiJsonOutput = document.querySelector("#api-json-output");
const apiSummaryStatus = document.querySelector("#api-summary-status");
const apiSummaryEndpoint = document.querySelector("#api-summary-endpoint");
const copyApiJsonButton = document.querySelector("#copy-api-json");
const downloadApiJsonButton = document.querySelector("#download-api-json");

function init() {
  renderFieldOptions();
  bindEvents();
  setActiveTab("personal");
  generateRecords({ silent: true });
  generateUuidRecords({ silent: true });
  renderMockImage({ silent: true });
  generateGeneralRecords({ silent: true });
  generateAccountRecords({ silent: true });
  generateBusinessRecords({ silent: true });
  generateApiResponse({ silent: true });
}

function bindEvents() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
    tab.addEventListener("keydown", handleTabKeydown);
  });

  controlForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generateRecords();
  });

  fieldOptions.addEventListener("change", () => {
    generateRecords({ silent: true });
  });

  bindCellCopy(tableWrap);
  bindCellCopy(uuidTableWrap);
  bindCellCopy(generalTableWrap);
  bindCellCopy(accountTableWrap);
  bindCellCopy(businessTableWrap);

  nameTestSuffixInput.addEventListener("change", () => {
    generateRecords({ silent: true });
  });

  document.querySelectorAll("[data-preset]").forEach((button) => {
    button.addEventListener("click", () => applyPreset(button.dataset.preset));
  });

  copyJsonButton.addEventListener("click", () => copyText(JSON.stringify(state.records, null, 2), "JSON 已复制"));
  copyCsvButton.addEventListener("click", () => copyText(toCsv(state.records), "CSV 已复制"));
  downloadCsvButton.addEventListener("click", downloadCsv);

  uuidForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generateUuidRecords();
  });

  uuidUppercaseInput.addEventListener("change", () => generateUuidRecords({ silent: true }));
  uuidCompactInput.addEventListener("change", () => generateUuidRecords({ silent: true }));
  copyUuidListButton.addEventListener("click", () => copyText(toUuidList(state.uuidRecords), "UUID 列表已复制"));
  copyUuidJsonButton.addEventListener("click", () => copyText(JSON.stringify(state.uuidRecords, null, 2), "UUID JSON 已复制"));
  downloadUuidTxtButton.addEventListener("click", downloadUuidTxt);

  imageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderMockImage();
  });

  [imageWidthInput, imageHeightInput].forEach((input) => {
    input.addEventListener("blur", () => renderMockImage({ silent: true, sourceInput: input }));
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        renderMockImage({ sourceInput: input });
      }
    });
  });

  imageShapeInputs.forEach((input) => {
    input.addEventListener("change", () => renderMockImage({ silent: true, sourceInput: imageWidthInput }));
  });

  imageLabelInput.addEventListener("input", updateMockImageLabel);
  downloadImageButton.addEventListener("click", downloadMockImage);
  window.addEventListener("resize", () => syncMockImagePreviewSize());

  generalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generateGeneralRecords();
  });
  generalKindInput.addEventListener("change", () => generateGeneralRecords({ silent: true }));
  copyGeneralJsonButton.addEventListener("click", () => copyRecordsJson(state.generalRecords, "通用字段 JSON 已复制"));
  copyGeneralCsvButton.addEventListener("click", () => copyText(toCsv(state.generalRecords), "通用字段 CSV 已复制"));
  downloadGeneralCsvButton.addEventListener("click", () => downloadRecordsCsv(state.generalRecords, "mock-general"));

  accountForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generateAccountRecords();
  });
  accountRoleModeInput.addEventListener("change", () => generateAccountRecords({ silent: true }));
  copyAccountJsonButton.addEventListener("click", () => copyRecordsJson(state.accountRecords, "账号 JSON 已复制"));
  copyAccountCsvButton.addEventListener("click", () => copyText(toCsv(state.accountRecords), "账号 CSV 已复制"));
  downloadAccountCsvButton.addEventListener("click", () => downloadRecordsCsv(state.accountRecords, "mock-accounts"));

  businessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generateBusinessRecords();
  });
  businessDomainInput.addEventListener("change", () => generateBusinessRecords({ silent: true }));
  copyBusinessJsonButton.addEventListener("click", () => copyRecordsJson(state.businessRecords, "业务 JSON 已复制"));
  copyBusinessCsvButton.addEventListener("click", () => copyText(toCsv(state.businessRecords), "业务 CSV 已复制"));
  downloadBusinessCsvButton.addEventListener("click", () => downloadRecordsCsv(state.businessRecords, "mock-business"));

  apiForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generateApiResponse();
  });
  [apiMethodInput, apiStatusInput].forEach((input) => {
    input.addEventListener("change", () => generateApiResponse({ silent: true }));
  });
  [apiEndpointInput, apiPageSizeInput].forEach((input) => {
    input.addEventListener("blur", () => generateApiResponse({ silent: true }));
  });
  copyApiJsonButton.addEventListener("click", () => copyText(JSON.stringify(state.apiResponse, null, 2), "接口 JSON 已复制"));
  downloadApiJsonButton.addEventListener("click", () => downloadJsonData(state.apiResponse, "mock-api-response"));
}

function bindCellCopy(container) {
  container.addEventListener("click", (event) => {
    const copyButton = event.target.closest(".cell-copy");

    if (!copyButton) {
      return;
    }

    copyText(copyButton.dataset.copy ?? "", `${copyButton.dataset.label ?? "内容"} 已复制`);
  });
}

function setActiveTab(activeTab) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === activeTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  panels.forEach((panel) => {
    const isActive = panel.id === `panel-${activeTab}`;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  if (activeTab === "image") {
    window.requestAnimationFrame(() => syncMockImagePreviewSize());
  }
}

function handleTabKeydown(event) {
  const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];

  if (!keys.includes(event.key)) {
    return;
  }

  event.preventDefault();
  const tabList = Array.from(tabs);
  const currentIndex = tabList.indexOf(event.currentTarget);
  let nextIndex = currentIndex;

  if (event.key === "ArrowLeft") {
    nextIndex = (currentIndex - 1 + tabList.length) % tabList.length;
  } else if (event.key === "ArrowRight") {
    nextIndex = (currentIndex + 1) % tabList.length;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = tabList.length - 1;
  }

  const nextTab = tabList[nextIndex];
  setActiveTab(nextTab.dataset.tab);
  nextTab.focus();
}

function renderFieldOptions() {
  fieldOptions.innerHTML = FIELD_DEFINITIONS.map((field) => {
    const checked = field.default ? "checked" : "";

    return `
      <label class="field-option">
        <input type="checkbox" name="fields" value="${field.key}" ${checked}>
        <span>${field.label}</span>
      </label>
    `;
  }).join("");
}

function applyPreset(preset) {
  const fieldsByPreset = {
    core: ["name", "gender", "phone", "idNumber"],
    full: FIELD_DEFINITIONS.map((field) => field.key),
    clear: [],
  };

  const nextFields = fieldsByPreset[preset] ?? fieldsByPreset.core;

  fieldOptions.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = nextFields.includes(input.value);
  });

  state.selectedFields = getSelectedFields();
  generateRecords({ silent: preset !== "clear" });
}

function getSelectedFields() {
  return Array.from(fieldOptions.querySelectorAll("input[type='checkbox']:checked")).map((input) => input.value);
}

function generateRecords({ silent = false } = {}) {
  state.selectedFields = getSelectedFields();

  if (state.selectedFields.length === 0) {
    state.records = [];
    render();
    if (!silent) {
      showToast("请至少选择一个字段");
    }
    return;
  }

  const count = clamp(Number(recordCountInput.value) || 10, 1, 200);
  recordCountInput.value = String(count);

  const dateRange = normalizeDateRange(birthStartInput.value, birthEndInput.value);

  state.records = Array.from({ length: count }, () => {
    const profile = createProfile(dateRange);

    return state.selectedFields.reduce((record, key) => {
      record[key] = profile[key];
      return record;
    }, {});
  });

  render();
  if (!silent) {
    showToast(`已生成 ${count} 条 mock 用户信息`);
  }
}

function createProfile(dateRange) {
  const gender = resolveGender();
  const region = pick(REGIONS);
  const birthDate = randomDate(dateRange.start, dateRange.end);
  const rawName = generateName(gender);
  const name = nameTestSuffixInput.checked ? `${rawName}(测)` : rawName;
  const phone = generatePhone();
  const idNumber = generateIdNumber(region.code, birthDate, gender);

  return {
    name,
    gender,
    phone,
    idNumber,
    birthDate: formatDate(birthDate),
    age: String(calculateAge(birthDate)),
    province: region.province,
    city: region.city,
    district: region.district,
    address: generateAddress(region),
    company: generateCompany(region),
    email: generateEmail(rawName, phone),
    occupation: pick(OCCUPATIONS),
  };
}

function resolveGender() {
  const mode = genderModeInput.value;
  return mode === "男" || mode === "女" ? mode : pick(["男", "女"]);
}

function generateName(gender) {
  const surname = pick(SURNAMES);
  const parts = GIVEN_NAME_PARTS[gender];
  const length = randomInt(1, 2);
  let givenName = "";

  while (givenName.length < length) {
    const next = pick(parts);
    if (!givenName.includes(next)) {
      givenName += next;
    }
  }

  return `${surname}${givenName}`;
}

function generatePhone() {
  return `${pick(MOBILE_PREFIXES)}${randomDigits(8)}`;
}

function generateIdNumber(regionCode, birthDate, gender) {
  const birthPart = formatDate(birthDate).replaceAll("-", "");
  const sequence = generateSequence(gender);
  const base = `${regionCode}${birthPart}${sequence}`;
  const sum = base.split("").reduce((total, digit, index) => total + Number(digit) * ID_WEIGHTS[index], 0);
  return `${base}${ID_CHECK_CODES[sum % 11]}`;
}

function generateSequence(gender) {
  const parity = gender === "男" ? 1 : 0;
  let sequence = randomInt(1, 999);

  if (sequence % 2 !== parity) {
    sequence += 1;
  }

  if (sequence > 999) {
    sequence -= 2;
  }

  return String(sequence).padStart(3, "0");
}

function generateAddress(region) {
  return `${region.province}${region.city}${region.district}${pick(STREETS)}${randomInt(1, 288)}号${randomInt(1, 18)}单元${randomInt(101, 2804)}室`;
}

function generateCompany(region) {
  return `${region.city}${pick(COMPANY_PREFIXES)}${pick(COMPANY_INDUSTRIES)}${pick(COMPANY_SUFFIXES)}`;
}

function generateEmail(name, phone) {
  const encodedName = Array.from(name).map((char) => char.charCodeAt(0).toString(36)).join("");
  return `${encodedName}.${phone.slice(-4)}@${pick(EMAIL_DOMAINS)}`.toLowerCase();
}

function normalizeDateRange(startValue, endValue) {
  let start = parseDate(startValue) ?? new Date(1980, 0, 1);
  let end = parseDate(endValue) ?? new Date(2005, 11, 31);

  if (start > end) {
    [start, end] = [end, start];
    birthStartInput.value = formatDate(start);
    birthEndInput.value = formatDate(end);
  }

  return { start, end };
}

function parseDate(value) {
  if (!value) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(year, month - 1, day);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed;
}

function randomDate(start, end) {
  const startTime = start.getTime();
  const endTime = end.getTime();
  return new Date(randomInt(startTime, endTime));
}

function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const birthdayThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  if (today < birthdayThisYear) {
    age -= 1;
  }

  return age;
}

function render() {
  renderSummary();
  renderTable();
  jsonOutput.textContent = JSON.stringify(state.records, null, 2);
  updateActionState();
}

function generateUuidRecords({ silent = false } = {}) {
  const count = clamp(Number(uuidCountInput.value) || 20, 1, 500);
  uuidCountInput.value = String(count);

  state.uuidRecords = Array.from({ length: count }, () => ({
    uuid: formatUuid(createUuid()),
  }));

  renderUuid();
  if (!silent) {
    showToast(`已生成 ${count} 个 UUID`);
  }
}

function renderUuid() {
  uuidSummaryCount.textContent = `${state.uuidRecords.length} 个 UUID`;
  uuidSummaryFormat.textContent = getUuidFormatLabel();
  uuidJsonOutput.textContent = JSON.stringify(state.uuidRecords, null, 2);
  renderUuidTable();
  updateActionState();
}

function renderUuidTable() {
  if (state.uuidRecords.length === 0) {
    uuidTableWrap.innerHTML = `
      <div class="empty-state">
        <p class="empty-state__title">还没有 UUID</p>
        <p>点击“生成 UUID”，这里会展示可复制的 UUID 列表。</p>
      </div>
    `;
    return;
  }

  const rows = state.uuidRecords.map((record, index) => `
    <tr>
      <td data-label="序号">${index + 1}</td>
      <td data-label="UUID">
        <span class="cell-content">
          <span class="cell-value">${escapeHtml(record.uuid)}</span>
          <button
            class="cell-copy"
            type="button"
            data-copy="${escapeHtml(record.uuid)}"
            data-label="UUID"
            aria-label="复制 UUID"
            title="复制 UUID"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M9 9h10v10H9z"></path>
              <path d="M5 15H4V4h11v1"></path>
            </svg>
          </button>
        </span>
      </td>
    </tr>
  `).join("");

  uuidTableWrap.innerHTML = `
    <table class="uuid-table">
      <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">UUID</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function createUuid() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  const bytes = getRandomBytes(16);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function getRandomBytes(length) {
  const bytes = new Uint8Array(length);

  if (window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(bytes);
    return bytes;
  }

  return bytes.map(() => randomInt(0, 255));
}

function formatUuid(uuid) {
  const compacted = uuidCompactInput.checked ? uuid.replaceAll("-", "") : uuid;
  return uuidUppercaseInput.checked ? compacted.toUpperCase() : compacted;
}

function getUuidFormatLabel() {
  const caseLabel = uuidUppercaseInput.checked ? "大写" : "小写";
  const shapeLabel = uuidCompactInput.checked ? "32 位无连字符" : "标准连字符格式";
  return `${caseLabel} · ${shapeLabel}`;
}

function toUuidList(records) {
  return records.map((record) => record.uuid).join("\n");
}

function generateGeneralRecords({ silent = false } = {}) {
  const count = clamp(Number(generalCountInput.value) || 20, 1, 300);
  const kind = generalKindInput.value;
  generalCountInput.value = String(count);

  state.generalRecords = Array.from({ length: count }, (_, index) => createGeneralRecord(kind, index + 1));
  renderRecordsOutput({
    records: state.generalRecords,
    tableWrap: generalTableWrap,
    jsonOutput: generalJsonOutput,
    summaryCount: generalSummaryCount,
    summaryKind: generalSummaryKind,
    kindLabel: GENERAL_KIND_LABELS[kind] ?? GENERAL_KIND_LABELS.all,
    emptyTitle: "还没有通用字段",
    emptyCopy: "点击“生成通用字段”，这里会展示可复制的字段样本。",
  });

  if (!silent) {
    showToast(`已生成 ${count} 条通用 mock`);
  }
}

function createGeneralRecord(kind, index) {
  const allFields = {
    index,
    stringValue: `mock_${randomSlug(10)}`,
    integerValue: randomInt(1000, 99999),
    decimalValue: Number((Math.random() * 1000).toFixed(2)),
    amount: Number((Math.random() * 9999 + 10).toFixed(2)),
    percent: `${randomInt(1, 99)}%`,
    booleanValue: pick([true, false]),
    enumValue: pick(["draft", "pending", "active", "archived"]),
    nullableValue: pick([null, "", "N/A", `fallback_${randomSlug(4)}`]),
    dateValue: formatDate(randomDate(new Date(2024, 0, 1), new Date(2026, 11, 31))),
    timestamp: randomDate(new Date(2024, 0, 1), new Date(2026, 11, 31)).toISOString(),
    url: `https://${pick(EMAIL_DOMAINS)}/mock/${randomSlug(8)}`,
    ipv4: `${randomInt(10, 223)}.${randomInt(0, 255)}.${randomInt(0, 255)}.${randomInt(1, 254)}`,
    hexColor: generateHexColor(),
    rgbColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`,
  };

  const fieldsByKind = {
    string: ["index", "stringValue"],
    number: ["index", "integerValue", "decimalValue", "amount", "percent"],
    datetime: ["index", "dateValue", "timestamp"],
    web: ["index", "url", "ipv4"],
    color: ["index", "hexColor", "rgbColor"],
    enum: ["index", "booleanValue", "enumValue", "nullableValue"],
  };

  const keys = fieldsByKind[kind];

  if (!keys) {
    return allFields;
  }

  return keys.reduce((record, key) => {
    record[key] = allFields[key];
    return record;
  }, {});
}

function generateAccountRecords({ silent = false } = {}) {
  const count = clamp(Number(accountCountInput.value) || 20, 1, 300);
  const roleMode = accountRoleModeInput.value;
  accountCountInput.value = String(count);

  state.accountRecords = Array.from({ length: count }, (_, index) => createAccountRecord(roleMode, index + 1));
  renderRecordsOutput({
    records: state.accountRecords,
    tableWrap: accountTableWrap,
    jsonOutput: accountJsonOutput,
    summaryCount: accountSummaryCount,
    summaryKind: accountSummaryKind,
    kindLabel: ACCOUNT_ROLE_LABELS[roleMode] ?? ACCOUNT_ROLE_LABELS.random,
    emptyTitle: "还没有账号数据",
    emptyCopy: "点击“生成账号数据”，这里会展示账号、权限和 Token 样本。",
  });

  if (!silent) {
    showToast(`已生成 ${count} 条账号 mock`);
  }
}

function createAccountRecord(roleMode, index) {
  const role = resolveAccountRole(roleMode);
  const displayName = generateName(pick(["男", "女"]));
  const username = `mock_${randomSlug(8)}`;

  return {
    index,
    username,
    displayName,
    email: `${username}@${pick(EMAIL_DOMAINS)}`,
    password: `Mp!${randomAlphaNumeric(8)}${randomInt(10, 99)}`,
    role: role.label,
    permission: pick(role.permissions),
    apiKey: `mk_${randomHex(24)}`,
    token: `tok_${randomHex(32)}`,
    avatarText: Array.from(displayName).slice(0, 1).join(""),
    avatarColor: generateHexColor(),
  };
}

function resolveAccountRole(roleMode) {
  if (roleMode && roleMode !== "random") {
    return ROLE_DEFINITIONS.find((role) => role.key === roleMode) ?? ROLE_DEFINITIONS[0];
  }

  return pick(ROLE_DEFINITIONS);
}

function generateBusinessRecords({ silent = false } = {}) {
  const count = clamp(Number(businessCountInput.value) || 20, 1, 300);
  const domain = businessDomainInput.value;
  businessCountInput.value = String(count);

  state.businessRecords = Array.from({ length: count }, (_, index) => createBusinessRecord(domain, index + 1));
  renderRecordsOutput({
    records: state.businessRecords,
    tableWrap: businessTableWrap,
    jsonOutput: businessJsonOutput,
    summaryCount: businessSummaryCount,
    summaryKind: businessSummaryKind,
    kindLabel: BUSINESS_DOMAIN_LABELS[domain] ?? BUSINESS_DOMAIN_LABELS.all,
    emptyTitle: "还没有业务数据",
    emptyCopy: "点击“生成业务数据”，这里会展示订单、商品或工单样本。",
  });

  if (!silent) {
    showToast(`已生成 ${count} 条业务 mock`);
  }
}

function createBusinessRecord(domain, index) {
  if (domain === "order") {
    return createOrderRecord(index);
  }

  if (domain === "product") {
    return createProductRecord(index);
  }

  if (domain === "task") {
    return createTaskRecord(index);
  }

  return {
    ...createOrderRecord(index),
    inventory: randomInt(0, 999),
    taskId: `TASK-${randomDigits(6)}`,
    priority: pick(PRIORITIES),
    assignee: generateName(pick(["男", "女"])),
  };
}

function createOrderRecord(index) {
  const price = Number((Math.random() * 999 + 20).toFixed(2));
  const quantity = randomInt(1, 5);

  return {
    index,
    orderId: `MO${formatDate(new Date()).replaceAll("-", "")}${randomDigits(8)}`,
    productName: pick(PRODUCT_NAMES),
    sku: `SKU-${randomSlug(4).toUpperCase()}-${randomInt(100, 999)}`,
    price,
    amount: Number((price * quantity).toFixed(2)),
    orderStatus: pick(ORDER_STATUSES),
    paymentNo: `PAY${randomDigits(14)}`,
    paymentChannel: pick(PAYMENT_CHANNELS),
    paymentStatus: pick(PAYMENT_STATUSES),
  };
}

function createProductRecord(index) {
  return {
    index,
    productName: pick(PRODUCT_NAMES),
    sku: `SKU-${randomSlug(4).toUpperCase()}-${randomInt(100, 999)}`,
    price: Number((Math.random() * 999 + 20).toFixed(2)),
    inventory: randomInt(0, 999),
  };
}

function createTaskRecord(index) {
  return {
    index,
    taskId: `TASK-${randomDigits(6)}`,
    taskTitle: pick(TASK_TITLES),
    priority: pick(PRIORITIES),
    assignee: generateName(pick(["男", "女"])),
    dueDate: formatDate(randomDate(new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 45))),
  };
}

function generateApiResponse({ silent = false } = {}) {
  const method = apiMethodInput.value;
  const statusKey = apiStatusInput.value;
  const config = API_STATUS_CONFIG[statusKey] ?? API_STATUS_CONFIG.success;
  const endpoint = normalizeApiEndpoint(apiEndpointInput.value);
  const pageSize = clamp(Number(apiPageSizeInput.value) || 0, 0, 100);
  apiEndpointInput.value = endpoint;
  apiPageSizeInput.value = String(pageSize);

  const data = statusKey === "empty"
    ? []
    : Array.from({ length: statusKey === "success" ? pageSize : 0 }, (_, index) => ({
      id: `item_${randomSlug(8)}`,
      name: `Mock Item ${index + 1}`,
      status: pick(["active", "pending", "archived"]),
      createdAt: randomDate(new Date(2024, 0, 1), new Date()).toISOString(),
    }));

  state.apiResponse = config.httpStatus < 400
    ? {
      code: config.code,
      message: config.message,
      request: { method, endpoint },
      data,
      pagination: {
        page: 1,
        pageSize,
        total: statusKey === "empty" ? 0 : pageSize + randomInt(20, 240),
      },
    }
    : {
      code: config.code,
      message: config.message,
      request: { method, endpoint },
      data: null,
      error: {
        traceId: `trace_${randomHex(16)}`,
        detail: getApiErrorDetail(statusKey),
      },
    };

  apiJsonOutput.textContent = JSON.stringify(state.apiResponse, null, 2);
  apiSummaryStatus.textContent = `${config.httpStatus} ${config.message}`;
  apiSummaryEndpoint.textContent = `${method} ${endpoint}`;
  updateActionState();

  if (!silent) {
    showToast("已生成接口响应 mock");
  }
}

function normalizeApiEndpoint(value) {
  const trimmed = value.trim() || "/api/mock/items";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function getApiErrorDetail(statusKey) {
  const details = {
    validation: "字段 pageSize 必须是 0 到 100 之间的整数",
    unauthorized: "缺少 Authorization 请求头或 Token 已过期",
    server: "上游服务超时，请稍后重试",
  };

  return details[statusKey] ?? "请求处理失败";
}

function renderRecordsOutput({ records, tableWrap, jsonOutput, summaryCount, summaryKind, kindLabel, emptyTitle, emptyCopy }) {
  summaryCount.textContent = `${records.length} 条记录`;
  summaryKind.textContent = kindLabel;
  jsonOutput.textContent = JSON.stringify(records, null, 2);
  renderRecordTable(records, tableWrap, emptyTitle, emptyCopy);
  updateActionState();
}

function renderRecordTable(records, tableWrap, emptyTitle, emptyCopy) {
  if (records.length === 0) {
    tableWrap.innerHTML = `
      <div class="empty-state">
        <p class="empty-state__title">${escapeHtml(emptyTitle)}</p>
        <p>${escapeHtml(emptyCopy)}</p>
      </div>
    `;
    return;
  }

  const keys = Object.keys(records[0]);
  const header = keys.map((key) => `<th scope="col">${escapeHtml(getOutputLabel(key))}</th>`).join("");
  const rows = records.map((record) => {
    const cells = keys.map((key) => {
      const label = getOutputLabel(key);
      const value = formatOutputValue(record[key]);

      return `
        <td data-label="${escapeHtml(label)}">
          <span class="cell-content">
            <span class="cell-value">${escapeHtml(value)}</span>
            <button
              class="cell-copy"
              type="button"
              data-copy="${escapeHtml(value)}"
              data-label="${escapeHtml(label)}"
              aria-label="复制${escapeHtml(label)}"
              title="复制${escapeHtml(label)}"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M9 9h10v10H9z"></path>
                <path d="M5 15H4V4h11v1"></path>
              </svg>
            </button>
          </span>
        </td>
      `;
    }).join("");

    return `<tr>${cells}</tr>`;
  }).join("");

  tableWrap.innerHTML = `
    <table>
      <thead>
        <tr>${header}</tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function getOutputLabel(key) {
  return OUTPUT_LABELS[key] ?? key;
}

function formatOutputValue(value) {
  if (value === null) {
    return "null";
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

function copyRecordsJson(records, message) {
  copyText(JSON.stringify(records, null, 2), message);
}

function renderSummary() {
  const selectedLabels = state.selectedFields.map(getFieldLabel);
  summaryCount.textContent = `${state.records.length} 条记录`;
  summaryFields.textContent = selectedLabels.length > 0 ? `字段：${selectedLabels.join("、")}` : "未选择字段";
}

function renderTable() {
  if (state.records.length === 0 || state.selectedFields.length === 0) {
    tableWrap.innerHTML = `
      <div class="empty-state">
        <p class="empty-state__title">还没有生成数据</p>
        <p>选择字段后点击“生成用户信息”，这里会展示表格和 JSON。</p>
      </div>
    `;
    return;
  }

  const keys = state.selectedFields;
  const header = keys.map((key) => `<th scope="col">${escapeHtml(getFieldLabel(key))}</th>`).join("");
  const rows = state.records.map((record) => {
    const cells = keys.map((key) => {
      const label = getFieldLabel(key);
      const value = String(record[key] ?? "");

      return `
        <td data-label="${escapeHtml(label)}">
          <span class="cell-content">
            <span class="cell-value">${escapeHtml(value)}</span>
            <button
              class="cell-copy"
              type="button"
              data-copy="${escapeHtml(value)}"
              data-label="${escapeHtml(label)}"
              aria-label="复制${escapeHtml(label)}"
              title="复制${escapeHtml(label)}"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M9 9h10v10H9z"></path>
                <path d="M5 15H4V4h11v1"></path>
              </svg>
            </button>
          </span>
        </td>
      `;
    }).join("");
    return `<tr>${cells}</tr>`;
  }).join("");

  tableWrap.innerHTML = `
    <table>
      <thead>
        <tr>${header}</tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function updateActionState() {
  const hasRecords = state.records.length > 0;
  const hasUuids = state.uuidRecords.length > 0;
  const hasGeneralRecords = state.generalRecords.length > 0;
  const hasAccountRecords = state.accountRecords.length > 0;
  const hasBusinessRecords = state.businessRecords.length > 0;
  const hasApiResponse = Object.keys(state.apiResponse).length > 0;
  copyJsonButton.disabled = !hasRecords;
  copyCsvButton.disabled = !hasRecords;
  downloadCsvButton.disabled = !hasRecords;
  copyUuidListButton.disabled = !hasUuids;
  copyUuidJsonButton.disabled = !hasUuids;
  downloadUuidTxtButton.disabled = !hasUuids;
  copyGeneralJsonButton.disabled = !hasGeneralRecords;
  copyGeneralCsvButton.disabled = !hasGeneralRecords;
  downloadGeneralCsvButton.disabled = !hasGeneralRecords;
  copyAccountJsonButton.disabled = !hasAccountRecords;
  copyAccountCsvButton.disabled = !hasAccountRecords;
  downloadAccountCsvButton.disabled = !hasAccountRecords;
  copyBusinessJsonButton.disabled = !hasBusinessRecords;
  copyBusinessCsvButton.disabled = !hasBusinessRecords;
  downloadBusinessCsvButton.disabled = !hasBusinessRecords;
  copyApiJsonButton.disabled = !hasApiResponse;
  downloadApiJsonButton.disabled = !hasApiResponse;
}

async function copyText(text, successMessage) {
  if (!text || text === "[]") {
    showToast("当前没有可复制的数据");
    return;
  }

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    showToast(successMessage);
  } catch {
    fallbackCopy(text);
    showToast(successMessage);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function downloadCsv() {
  if (state.records.length === 0) {
    showToast("当前没有可下载的数据");
    return;
  }

  downloadTextFile(`\ufeff${toCsv(state.records)}`, `mock-users-${Date.now()}.csv`, "text/csv;charset=utf-8");
  showToast("CSV 文件已生成");
}

function downloadRecordsCsv(records, filenamePrefix) {
  if (records.length === 0) {
    showToast("当前没有可下载的数据");
    return;
  }

  downloadTextFile(`\ufeff${toCsv(records)}`, `${filenamePrefix}-${Date.now()}.csv`, "text/csv;charset=utf-8");
  showToast("CSV 文件已生成");
}

function downloadUuidTxt() {
  if (state.uuidRecords.length === 0) {
    showToast("当前没有可下载的 UUID");
    return;
  }

  downloadTextFile(toUuidList(state.uuidRecords), `mock-uuids-${Date.now()}.txt`, "text/plain;charset=utf-8");
  showToast("UUID TXT 文件已生成");
}

function downloadJsonData(data, filenamePrefix) {
  downloadTextFile(JSON.stringify(data, null, 2), `${filenamePrefix}-${Date.now()}.json`, "application/json;charset=utf-8");
  showToast("JSON 文件已生成");
}

function downloadTextFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function renderMockImage({ silent = false, sourceInput = null } = {}) {
  const shape = getSelectedImageShape();
  const { width, height } = resolveImageDimensions(shape, sourceInput);
  const label = imageLabelInput.value.trim();

  state.image = { width, height, label, shape };

  drawMockImage(width, height, label || `${width} x ${height}`, shape);
  imageSummarySize.textContent = `${width} x ${height} PNG`;
  imageSummaryShape.textContent = `${getImageShapeLabel(shape)}占位图`;

  if (!silent) {
    showToast("图片预览已更新");
  }
}

function normalizeImageDimension(input, fallback) {
  const numericValue = Number(input.value);
  const nextValue = Number.isFinite(numericValue)
    ? clamp(Math.round(numericValue), IMAGE_MIN_SIZE, IMAGE_MAX_SIZE)
    : fallback;

  input.value = String(nextValue);
  return nextValue;
}

function resolveImageDimensions(shape, sourceInput) {
  let width = normalizeImageDimension(imageWidthInput, state.image.width);
  let height = normalizeImageDimension(imageHeightInput, state.image.height);

  if (shape === "square" || shape === "circle") {
    const side = sourceInput === imageHeightInput ? height : width;
    width = side;
    height = side;
    imageWidthInput.value = String(side);
    imageHeightInput.value = String(side);
  }

  return { width, height };
}

function updateMockImageLabel() {
  state.image.label = imageLabelInput.value.trim();
  drawMockImage(
    state.image.width,
    state.image.height,
    state.image.label || `${state.image.width} x ${state.image.height}`,
    state.image.shape,
  );
}

function getSelectedImageShape() {
  const selectedShape = Array.from(imageShapeInputs).find((input) => input.checked)?.value;
  return selectedShape === "square" || selectedShape === "circle" ? selectedShape : "rectangle";
}

function getImageShapeLabel(shape) {
  if (shape === "circle") {
    return "圆形";
  }

  return shape === "square" ? "方形" : "矩形";
}

function drawMockImage(width, height, label, shape = "rectangle") {
  const canvas = mockImageCanvas;
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  canvas.style.aspectRatio = `${width} / ${height}`;
  canvas.classList.toggle("is-low-resolution", width < 180 || height < 180);
  canvas.classList.toggle("is-circle", shape === "circle");

  ctx.clearRect(0, 0, width, height);

  if (shape === "circle") {
    drawCircleMockImage(ctx, width, height, label);
  } else {
    drawMockImageSurface(ctx, width, height, label);
  }

  syncMockImagePreviewSize(width, height);
}

function drawMockImageSurface(ctx, width, height, label) {
  ctx.fillStyle = "#eef1f4";
  ctx.fillRect(0, 0, width, height);

  if (width >= 96 && height >= 96) {
    drawSkeletonPattern(ctx, width, height);
  }
  drawImageLabel(ctx, width, height, label);
}

function drawCircleMockImage(ctx, width, height, label) {
  const radius = Math.min(width, height) / 2;
  const centerX = width / 2;
  const centerY = height / 2;

  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.clip();
  drawMockImageSurface(ctx, width, height, label);
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, Math.max(0, radius - 0.5), 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(183, 193, 205, 0.9)";
  ctx.lineWidth = Math.max(1, Math.min(width, height) * 0.006);
  ctx.stroke();
  ctx.restore();
}

function syncMockImagePreviewSize(width = state.image.width, height = state.image.height) {
  const shell = mockImageCanvas.closest(".image-preview-shell");
  const shellWidth = shell?.clientWidth || 960;
  const maxPreviewWidth = Math.max(IMAGE_MIN_SIZE, Math.min(shellWidth - 64, 928));
  const maxPreviewHeight = 560;
  const fitScale = Math.min(maxPreviewWidth / width, maxPreviewHeight / height, 1);
  let scale = fitScale;

  if (width < 180 && height < 180) {
    const targetSize = width <= 32 || height <= 32 ? 160 : 220;
    scale = Math.min(maxPreviewWidth / width, maxPreviewHeight / height, targetSize / Math.max(width, height));
    scale = Math.max(1, scale);
  }

  mockImageCanvas.style.width = `${Math.round(width * scale)}px`;
  mockImageCanvas.style.height = "auto";
}

function drawSkeletonPattern(ctx, width, height) {
  const unit = Math.max(8, Math.min(width, height) * 0.035);
  const margin = unit * 2.2;
  const radius = Math.max(4, unit * 0.55);
  const topHeight = Math.max(unit * 2.2, height * 0.14);
  const blockColor = "rgba(210, 217, 226, 0.92)";
  const softBlockColor = "rgba(226, 231, 237, 0.95)";

  ctx.fillStyle = "#f7f9fb";
  roundRect(ctx, margin, margin, Math.max(unit * 3, width - margin * 2), topHeight, radius);
  ctx.fill();

  ctx.fillStyle = blockColor;
  roundRect(ctx, margin * 1.45, margin * 1.55, topHeight * 0.48, topHeight * 0.48, topHeight * 0.24);
  ctx.fill();

  ctx.fillStyle = softBlockColor;
  roundRect(ctx, margin * 1.45 + topHeight * 0.68, margin * 1.65, Math.max(unit * 6, width * 0.28), unit * 0.9, radius);
  ctx.fill();
  roundRect(ctx, margin * 1.45 + topHeight * 0.68, margin * 2.25, Math.max(unit * 5, width * 0.18), unit * 0.72, radius);
  ctx.fill();

  const cardTop = margin * 2 + topHeight;
  const availableWidth = width - margin * 2;
  const gap = unit;
  const columns = width >= 720 ? 3 : width >= 420 ? 2 : 1;
  const cardWidth = (availableWidth - gap * (columns - 1)) / columns;
  const cardHeight = Math.max(unit * 5.2, (height - cardTop - margin) * 0.38);

  for (let index = 0; index < columns; index += 1) {
    const x = margin + index * (cardWidth + gap);
    const y = cardTop;
    ctx.fillStyle = "#f8fafc";
    roundRect(ctx, x, y, cardWidth, cardHeight, radius);
    ctx.fill();

    ctx.fillStyle = blockColor;
    roundRect(ctx, x + unit, y + unit, cardWidth - unit * 2, Math.max(unit * 1.7, cardHeight * 0.32), radius);
    ctx.fill();

    ctx.fillStyle = softBlockColor;
    roundRect(ctx, x + unit, y + cardHeight * 0.52, cardWidth * 0.68, unit * 0.75, radius);
    ctx.fill();
    roundRect(ctx, x + unit, y + cardHeight * 0.66, cardWidth * 0.48, unit * 0.65, radius);
    ctx.fill();
  }

  const bandY = Math.min(height - margin - unit * 2, cardTop + cardHeight + unit * 1.6);
  ctx.fillStyle = "rgba(245, 247, 250, 0.82)";
  roundRect(ctx, margin, bandY, availableWidth, Math.max(unit * 2, height * 0.08), radius);
  ctx.fill();
}

function drawImageLabel(ctx, width, height, label) {
  const shortSide = Math.min(width, height);
  const maxTextWidth = width * 0.78;
  const displayLabel = shortSide < 64 ? label.replaceAll(" ", "") : label;
  let fontSize = clamp(Math.floor(shortSide * 0.13), 4, 96);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `850 ${fontSize}px PingFang SC, Microsoft YaHei UI, sans-serif`;

  while (ctx.measureText(displayLabel).width > maxTextWidth && fontSize > 4) {
    fontSize -= 1;
    ctx.font = `850 ${fontSize}px PingFang SC, Microsoft YaHei UI, sans-serif`;
  }

  const paddingX = Math.max(2, fontSize * 0.8);
  const labelWidth = Math.min(width * 0.92, ctx.measureText(displayLabel).width + paddingX * 2);
  const labelHeight = Math.min(height * 0.82, fontSize * 1.72);
  const labelX = (width - labelWidth) / 2;
  const labelY = (height - labelHeight) / 2;

  ctx.fillStyle = "rgba(248, 250, 252, 0.86)";
  roundRect(ctx, labelX, labelY, labelWidth, labelHeight, Math.max(6, fontSize * 0.22));
  ctx.fill();

  ctx.fillStyle = "#66717f";
  ctx.fillText(displayLabel, width / 2, height / 2 + fontSize * 0.02, width * 0.84);
}

function roundRect(ctx, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + height - safeRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  ctx.lineTo(x + safeRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
  ctx.closePath();
}

function downloadMockImage() {
  renderMockImage({
    silent: true,
    sourceInput: document.activeElement === imageHeightInput ? imageHeightInput : imageWidthInput,
  });

  mockImageCanvas.toBlob((blob) => {
    if (!blob) {
      showToast("图片生成失败");
      return;
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `mock-image-${state.image.shape}-${state.image.width}x${state.image.height}.png`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("PNG 图片已生成");
  }, "image/png");
}

function toCsv(records) {
  if (records.length === 0) {
    return "";
  }

  const headers = Object.keys(records[0]);
  const lines = [
    headers.map(csvEscape).join(","),
    ...records.map((record) => headers.map((header) => csvEscape(record[header])).join(",")),
  ];

  return lines.join("\n");
}

function csvEscape(value) {
  const normalized = formatOutputValue(value);
  return /[",\n]/.test(normalized) ? `"${normalized.replaceAll('"', '""')}"` : normalized;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function getFieldLabel(key) {
  return FIELD_DEFINITIONS.find((field) => field.key === key)?.label ?? key;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function randomSlug(length) {
  return randomAlphaNumeric(length).toLowerCase();
}

function randomAlphaNumeric(length) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from({ length }, () => chars[randomInt(0, chars.length - 1)]).join("");
}

function randomHex(length) {
  const chars = "0123456789abcdef";
  return Array.from({ length }, () => chars[randomInt(0, chars.length - 1)]).join("");
}

function generateHexColor() {
  return `#${randomHex(6)}`;
}

function randomDigits(length) {
  return Array.from({ length }, () => randomInt(0, 9)).join("");
}

function randomInt(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

function pick(items) {
  return items[randomInt(0, items.length - 1)];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
