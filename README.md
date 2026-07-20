Вот README (отправляю двумя сообщениями из-за длины). Это **часть 1**:

# POISK OCR v12

> PWA для распознавания автомобильных номеров через камеру смартфона. Работает оффлайн.

![Status](https://img.shields.io/badge/status-MVP-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![PWA](https://img.shields.io/badge/PWA-ready-success)

## 🚗 О проекте

POISK OCR — это прогрессивное веб-приложение для распознавания российских автомобильных номеров. Работает в браузере, не требует установки, поддерживает оффлайн после первой загрузки.

**Ключевые возможности:**
- 📸 Сканирование номера через камеру смартфона
- 🔍 OCR-распознавание (Tesseract.js)
- 🖼️ Предобработка изображения (OpenCV.js)
- 💾 Локальная история распознаваний
- 📱 Установка на домашний экран (PWA)
- 🌐 Полный оффлайн после первой загрузки

## 🎯 Демо

🔗 [https://danunafigpof-a11y.github.io/poisk_ocr_v12/](https://danunafigpof-a11y.github.io/poisk_ocr_v12/)

## 🏗️ Архитектура

Проект построен на модульной архитектуре из **41 модуля** с паттерном IIFE:

poisk_ocr_v12/
├── INDEX.html              # Точка входа
├── REGISTRY.json           # Манифест модулей
├── manifest.json           # PWA-манифест
├── service-worker.js       # Оффлайн-режим
├── src/
│   ├── A001.js             # Модули 1-41
│   ├── A002.js
│   ├── ...
│   └── A041.js
├── MAP.md                  # Карта архитектуры
├── LIMITATIONS.md          # Известные ограничения
├── LICENSE                 # MIT
└── README.md

Каждый модуль:
- Инкапсулирован в IIFE
- Экспортирует API через `window.POISK.<namespace>`
- Регистрирует загрузку через `registry.markLoaded(id)`

Подробнее — см. [MAP.md](MAP.md) и [LIMITATIONS.md](LIMITATIONS.md).

Продолжение — вставляй сразу после первой части в том же файле:

## 🚀 Установка и запуск

### Вариант 1: GitHub Pages (рекомендуется)
1. Открой репозиторий на GitHub
2. Settings → Pages
3. Source: `main` branch, `/ (root)`
4. Готово — приложение доступно по `https://danunafigpof-a11y.github.io/poisk_ocr_v12/`

### Вариант 2: Локальный запуск
git clone https://github.com/danunafigpof-a11y/poisk_ocr_v12.git
cd poisk_ocr_v12

# Вариант A: Python
python -m http.server 8000

# Вариант B: Node
npx serve

# Вариант C: любой статический сервер

⚠️ **Важно:** PWA требует HTTPS или `localhost`. Камера не работает по `http://`.

Открой `http://localhost:8000/INDEX.html` в Chrome/Safari.

## 📱 Использование

1. Открой приложение в браузере смартфона
2. Разреши доступ к камере
3. Наведи камеру на автомобильный номер
4. Нажми "Сканировать"
5. Получи распознанный номер

### Установка как PWA
- **Android (Chrome):** Меню → "Добавить на главный экран"
- **iOS (Safari):** Поделиться → "На экран Домой"

## 🛠️ Технологии

| Слой | Технология |
|------|------------|
| UI | Vanilla JS, HTML5, CSS3 |
| OCR | Tesseract.js (CDN) |
| Обработка изображений | OpenCV.js (CDN) |
| Хранение | IndexedDB / localStorage |
| Оффлайн | Service Worker |
| PWA | Web App Manifest |
| Сборка | Нет (vanilla, без бандлеров) |

## 🤝 Контрибьюция

Pull request'ы приветствуются. Перед большими изменениями — открой issue.

## 📄 Лицензия

[MIT](LICENSE) — используй свободно.

## 🙏 Благодарности

- [Tesseract.js](https://tesseract.projectnaptha.com/) — OCR-движок
- [OpenCV.js](https://docs.opencv.org/) — обработка изображений
- Сообщество open-source

---

**Версия:** v12 (MVP)
**Статус:** в активной разработке

---

После того как вставишь обе части в README.md — нажми **Commit changes** (внизу), в поле commit message напиши `Update README.md` и подтверди. Скажи **«готово»** когда закоммитишь — поедем дальше к `manifest.json`.