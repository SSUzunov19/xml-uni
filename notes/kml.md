# KML (Keyhole Markup Language)

KML е XML формат за описание на географски данни — точки, линии, полигони и
информация към тях. Използва се от Google Earth, Google Maps, OpenLayers и други.

- Документация: <https://developers.google.com/kml/>
- Справочник на елементите: <https://developers.google.com/kml/documentation/kmlreference>
- Стандартизиран от [OGC](https://www.ogc.org/standard/kml/) (версия 2.2).

## Пространство от имена

Кореновият елемент е `kml` в пространството от имена на OGC:

```xml
<kml xmlns="http://www.opengis.net/kml/2.2">
```

Без правилния `xmlns` много програми (включително парсерът на OpenLayers) не
разпознават елементите и файлът изглежда празен.

## Структура на документа

```xml
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
    <Document>
        <name>Име на документа</name>
        <Placemark>
            <name>Име на обекта</name>
            <address>Адрес като свободен текст</address>
            <Point>
                <coordinates>23.330584,42.674396</coordinates>
            </Point>
        </Placemark>
        <!-- още Placemark елементи -->
    </Document>
</kml>
```

- `Document` е контейнер за много обекти; може да има собствено `name`.
- `Placemark` е един обект на картата. Освен `name` и `address` често се ползват
  `description` (свободен текст или HTML) и `styleUrl`.
- Геометрията е вътре в `Placemark`: `Point`, `LineString`, `Polygon` или
  `MultiGeometry` за няколко наведнъж.
- Имената на елементите са чувствителни към малки и главни букви (`Placemark`, не `placemark`).

## Координати

```xml
<coordinates>дължина,ширина[,височина]</coordinates>
```

- Редът е **дължина (longitude), ширина (latitude)** — т.е. `lon,lat`. Това е
  обратното на реда, в който обикновено се изписват GPS координати (`lat, lon`).
- Стойностите са десетични градуси (WGS 84); височината е в метри и не е задължителна.
- Между числата в една точка няма интервали — само запетаи. Интервал (или нов ред)
  разделя отделни точки, например в `LineString`.

Пример: ФМИ е на ширина 42.674396 и дължина 23.330584, затова се записва като
`23.330584,42.674396`. При разменени стойности точката попада в Индийския океан.

## Проверка в Google Earth

1. Отворете <https://earth.google.com/web/>.
2. Projects → New project → Import KML file from computer.
3. Изберете `.kml` файла — обектите се появяват в списъка и на картата.

Google Earth е бърз начин да проверите координатите преди файлът да се ползва в приложение.
