
# POISK OCR v12

> PWA для распознавания украинских и европейских автомобильных номеров с IP-камер. Работает оффлайн.

![Status](https://img.shields.io/badge/status-MVP-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![PWA](https://img.shields.io/badge/PWA-ready-success)

## 🚗 О проекте

POISK OCR — это прогрессивное веб-приложение для распознавания украинских и европейских автомобильных номеров на кадрах с IP-камер. Работает в браузере, не требует установки, поддерживает оффлайн после первой загрузки.

**Ключевые возможности:**
- 📹 Подключение к IP-камерам (HTTP snapshot / MJPEG)
- 🔍 OCR-распознавание (Tesseract.js, языки eng+ukr)
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
