# Mock Pilot

English | [中文](#中文)

A zero-dependency static web app for generating common mock assets: user profiles, UUIDs, and downloadable placeholder images.

## Features

- Select exactly which fields to generate, including name, gender, phone number, ID number, region, address, company, email, occupation, birth date, and age.
- Generate Mainland China style mobile numbers using common mobile prefixes.
- Generate 18-digit Chinese resident ID numbers with region code, birth date, gender-aware sequence code, and GB 11643 checksum.
- Optionally append `(测)` to generated names for test-account identification.
- Preview data in a responsive table, copy individual cell values, copy JSON, copy CSV, or download CSV.
- Switch between tabs for personal mock data, UUID mock data, and image mock assets.
- Generate UUID v4 values in standard, uppercase, or compact 32-character formats.
- Create a skeleton-style PNG placeholder image with configurable width, height, preview, and download.
- Export JSON with English keys such as `name`, `phone`, `idNumber`, and `company`.

## Usage

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 49173
```

Then visit:

```text
http://localhost:49173
```

## Data Format Notes

- Phone numbers are 11-digit Mainland China mobile-style values.
- ID numbers follow the 18-digit structure and checksum algorithm defined by GB 11643.
- Company names are generated from city name, brand-like prefix, industry term, and legal suffix.
- UUIDs use browser crypto APIs when available, with a local fallback.
- Placeholder images are generated locally with Canvas and downloaded as PNG files.
- Generated data is fictional and intended only for testing, demos, and prototype filling.

## Project Structure

```text
.
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Development

This project has no build step and no runtime dependencies. Edit the files directly and refresh the browser.

To check JavaScript syntax:

```bash
node --check app.js
```

## 中文

一个零依赖静态 Web 页面，用于生成常用 mock 资产：个人资料、UUID 和可下载图片占位图。

## 功能

- 可按需勾选字段，包括姓名、性别、手机号、身份证号、地区、地址、所属公司、邮箱、职业、出生日期和年龄。
- 手机号使用常见大陆移动号段生成 11 位号码。
- 身份证号按 18 位结构生成，包含地址码、出生日期、性别顺序码和 GB 11643 校验位。
- 可选在姓名后追加 `(测)`，用于标记测试账号。
- 支持表格预览、单元格逐项复制、复制 JSON、复制 CSV 和下载 CSV。
- 使用 tab 区分个人 Mock、UUID Mock 和图片 Mock。
- 支持批量生成 UUID v4，可切换大写和 32 位无连字符格式。
- 支持设置图片宽高，预览并下载浅灰骨架屏风格 PNG，占位图上会显示尺寸或自定义文字。
- JSON 原文使用英文 key 输出，例如 `name`、`phone`、`idNumber`、`company`。

## 使用

直接在浏览器打开 `index.html`，或在目录内启动本地静态服务：

```bash
python3 -m http.server 49173
```

然后访问：

```text
http://localhost:49173
```

## 生成规则

- 手机号：11 位大陆移动号码格式，使用常见号段前缀。
- 身份证号：18 位结构，包含地址码、出生日期、性别顺序码和 GB 11643 校验位。
- 所属公司：按城市名、字号、行业和公司后缀组合生成虚拟公司名。
- UUID：默认生成 v4 格式，浏览器支持时使用 Web Crypto。
- 图片：使用 Canvas 在本地生成 PNG，不上传文件。
- 数据仅用于测试和演示，不对应真实个人。

## 项目结构

```text
.
├── index.html
├── styles.css
├── app.js
└── README.md
```

## 开发

项目没有构建步骤，也没有运行时依赖。直接修改文件并刷新浏览器即可。

检查 JavaScript 语法：

```bash
node --check app.js
```
