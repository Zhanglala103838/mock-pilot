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

const state = {
  records: [],
  selectedFields: FIELD_DEFINITIONS.filter((field) => field.default).map((field) => field.key),
};

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

function init() {
  renderFieldOptions();
  bindEvents();
  generateRecords();
}

function bindEvents() {
  controlForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generateRecords();
  });

  fieldOptions.addEventListener("change", () => {
    generateRecords({ silent: true });
  });

  tableWrap.addEventListener("click", (event) => {
    const copyButton = event.target.closest(".cell-copy");

    if (!copyButton) {
      return;
    }

    copyText(copyButton.dataset.copy ?? "", `${copyButton.dataset.label ?? "内容"} 已复制`);
  });

  nameTestSuffixInput.addEventListener("change", () => {
    generateRecords({ silent: true });
  });

  document.querySelectorAll("[data-preset]").forEach((button) => {
    button.addEventListener("click", () => applyPreset(button.dataset.preset));
  });

  copyJsonButton.addEventListener("click", () => copyText(JSON.stringify(state.records, null, 2), "JSON 已复制"));
  copyCsvButton.addEventListener("click", () => copyText(toCsv(state.records), "CSV 已复制"));
  downloadCsvButton.addEventListener("click", downloadCsv);
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
  copyJsonButton.disabled = !hasRecords;
  copyCsvButton.disabled = !hasRecords;
  downloadCsvButton.disabled = !hasRecords;
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

  const blob = new Blob([`\ufeff${toCsv(state.records)}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mock-users-${Date.now()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("CSV 文件已生成");
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
  const normalized = String(value ?? "");
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
