# poisk_ocr_v12
# POISK OCR v12 — АДРЕСНАЯ КНИГА (MAP)

## Система нумерации

**Формат:** `A001.js` → `A999.js` → `B001.js` → ... → `Z999.js`
- Слотов: 25,974 (26×999)
- При росте: следующая буква, номера не переиспользовать
- Текущий диапазон: `A001` — `A041.js`
- Следующий свободный: `A042.js`

## Файлы проекта

| Файл | Часть | Тип | Размер |
|------|-------|-----|--------|
| `index.html` | Loader | HTML+CSS+Loader | 3339 chars |
| `MAP.md` | — | Адресная книга | — |
| `SCHEMA.json` | — | Схема для AI | — |
| `A001.js` | 1/41 | HTML,CSS,OpenCV | 1772 chars |
| `A002.js` | 2/41 | Code | 1714 chars |
| `A003.js` | 3/41 | Code | 1711 chars |
| `A004.js` | 4/41 | Code | 1771 chars |
| `A005.js` | 5/41 | Code | 1753 chars |
| `A006.js` | 6/41 | Code | 1753 chars |
| `A007.js` | 7/41 | Code | 1778 chars |
| `A008.js` | 8/41 | Tesseract | 1732 chars |
| `A009.js` | 9/41 | Code | 1720 chars |
| `A010.js` | 10/41 | Code | 1708 chars |
| `A011.js` | 11/41 | Code | 1764 chars |
| `A012.js` | 12/41 | Code | 1703 chars |
| `A013.js` | 13/41 | Code | 1712 chars |
| `A014.js` | 14/41 | Code | 1768 chars |
| `A015.js` | 15/41 | I18N,Tesseract | 1761 chars |
| `A016.js` | 16/41 | Tesseract | 1774 chars |
| `A017.js` | 17/41 | Tesseract | 1688 chars |
| `A018.js` | 18/41 | Code | 1787 chars |
| `A019.js` | 19/41 | LOGS | 1772 chars |
| `A020.js` | 20/41 | LOGS,Tesseract | 1726 chars |
| `A021.js` | 21/41 | OpenCV | 1792 chars |
| `A022.js` | 22/41 | LOGS,OpenCV,OCR-pipe | 1763 chars |
| `A023.js` | 23/41 | LOGS,Tesseract,OpenCV,Country | 1781 chars |
| `A024.js` | 24/41 | Country | 1780 chars |
| `A025.js` | 25/41 | DB | 1764 chars |
| `A026.js` | 26/41 | Code | 1775 chars |
| `A027.js` | 27/41 | Table | 1725 chars |
| `A028.js` | 28/41 | Events | 1794 chars |
| `A029.js` | 29/41 | Table | 1780 chars |
| `A030.js` | 30/41 | LOGS,Collections,Filters,Events | 1775 chars |
| `A031.js` | 31/41 | Table,Filters,Batch | 1788 chars |
| `A032.js` | 32/41 | LOGS,OCR-pipe,Filters | 1799 chars |
| `A033.js` | 33/41 | LOGS,Collections,Filters,Export | 1769 chars |
| `A034.js` | 34/41 | LOGS,Events | 1744 chars |
| `A035.js` | 35/41 | Collections,Batch,Events | 1783 chars |
| `A036.js` | 36/41 | Collections,Filters,Batch,Events | 1756 chars |
| `A037.js` | 37/41 | LOGS,Collections,Filters,Events | 1793 chars |
| `A038.js` | 38/41 | Table,Filters,Events | 1789 chars |
| `A039.js` | 39/41 | LOGS,Collections,Filters,Export,Events | 1763 chars |
| `A040.js` | 40/41 | LOGS,DB,Collections,Filters,Events,INIT | 1784 chars |
| `A041.js` | 41/41 | LOGS,Filters,INIT | 393 chars |

## Правила

1. Лимит файла: 2276 символов
2. Header: `//FILENAME|N/TOTAL|N:NEXT`
3. Footer: `//EOF`
4. Не переиспользовать номера
5. При превышении лимита — разбить, сдвинуть следующие

## Новый чат: как править

1. Отправить `MAP.md` + `SCHEMA.json`
2. Отправить файл(ы) для изменения
3. AI вернёт только изменённые файлы
4. Если файл >2276 — разбить, обновить MAP+SCHEMA

## Правило анализа

Если файл оканчивается внутри функции или блока, AI обязан запросить следующий файл согласно полю NEXT.

Пример:

A019.js → требуется A020.js

A040.js → требуется A041.js

Не запрашивать «полный файл», если известно имя следующего.

## Правила взаимодействия с AI

### Минимальный контекст

AI обязан запрашивать только минимально необходимый набор файлов.

Если функция разделена между несколькими файлами, AI запрашивает сразу всю цепочку.

Пример:

Необходимые файлы:
• A019.js
• A020.js

---

### Пошаговые инструкции

При изменении существующего файла:

Шаг 1.
Открой файл: A019.js.

Шаг 2.
Полностью очисти его содержимое.

Шаг 3.
Вставь следующий код.

При создании нового файла:

Шаг 1.
Создай следующий файл: A042.js.

Шаг 2.
Вставь в него следующий код.

---

### Завершение работы

После завершения изменений:

Шаг N.

Открой главные файлы проекта:

• MAP.md
• SCHEMA.json

Обнови:

• список файлов;
• следующий свободный номер;
• список функций;
• структуру модулей;
• последние изменения проекта;
• правила взаимодействия с AI.
