**Файл 6/7: `MAP.md`**

# MAP — Карта архитектуры POISK OCR v12

## Структура namespace `window.POISK.*`

```
window.POISK
├── registry         ← A001 — загрузчик модулей
├── config           ← A002 — конфигурация приложения
├── storage          ← A003 — обёртка над localStorage/IndexedDB
├── camera           ← A004 — доступ к камере (getUserMedia)
├── ui               ← A005 — UI-контроллеры
├── image            ← A006 — предобработка изображений
├── ocr              ← A007 — распознавание текста
├── db               ← A008 — локальная БД
├── history          ← A009 — история распознаваний
├── exporter         ← A010 — экспорт результатов
├── validator        ← A011 — валидация формата номера
├── logger           ← A012 — система логирования
├── events           ← A013 — event bus
├── state            ← A014 — глобальное состояние
├── router           ← A015 — простой роутер
├── utils            ← A016 — утилиты общего назначения
├── i18n             ← A017 — интернационализация
├── themes           ← A018 — тёмная/светлая тема
├── permissions      ← A019 — управление разрешениями
├── gestures         ← A020 — обработка жестов
├── audio            ← A021 — звуковые уведомления
├── vibration        ← A022 — haptic feedback
├── share            ← A023 — нативный share
├── geolocation      ← A024 — геолокация
├── analytics        ← A025 — локальная аналитика
├── shortcuts        ← A026 — горячие клавиши
├── forms            ← A027 — валидация форм
├── modal            ← A028 — модальные окна
├── toast            ← A029 — всплывающие уведомления
├── loading          ← A030 — индикаторы загрузки
├── error            ← A031 — обработка ошибок
├── retry            ← A032 — повторные попытки
├── network          ← A033 — сетевой слой
├── pwa              ← A034 — PWA-интеграция
├── sw               ← A035 — service worker обёртка
├── manifest         ← A036 — обёртка manifest.json
├── lifecycle        ← A037 — жизненный цикл модулей
├── hooks            ← A038 — pre/post хуки
├── middleware       ← A039 — middleware-цепочка
├── plugin           ← A040 — система плагинов
└── app              ← A041 — главный модуль приложения
```

> **Примечание:** это *примерная* карта. Реальные имена модулей будут уточнены после парсинга лога.

## Поток данных

```
Камера (A004) → кадр → Image (A006) → OpenCV.js
                ↓
            Tesseract.js (A007)
                ↓
            Validator (A011)
                ↓
            Storage (A003) / History (A009)
                ↓
            UI (A005)
```

## Последовательность загрузки

1. `INDEX.html` загружается браузером
2. Service Worker регистрируется (`sw.register()`)
3. `REGISTRY.json` загружается
4. Модули `A001.js` → `A041.js` загружаются в порядке очереди
5. Каждый модуль вызывает `registry.markLoaded(id)` после IIFE
6. После загрузки A041 → приложение готово

## Паттерн модуля

Каждый модуль следует одному шаблону:

```javascript
(function(window) {
  'use strict';

  // Зависимости
  const deps = ['registry', 'config', 'logger'];
  let initialized = false;

  const api = {
    init: function() {
      if (initialized) return;
      // ... инициализация
      initialized = true;
      POISK.registry.markLoaded('A001');
    },

    // ... публичные методы
  };

  // Экспорт
  window.POISK = window.POISK || {};
  window.POISK.registry = api;

})(window);
```

