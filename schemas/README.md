# XML схеми

Локални копия на официални XSD схеми. IntelliJ IDEA ги използва за автодовършване и валидация
(вижте `.idea/misc.xml`, компонент `ProjectResources`), без да ги тегли от интернет.

| Пространство от имена | Схема | Източник |
|---|---|---|
| `http://www.opengis.net/kml/2.2` | [`kml-2.2.0/ogckml22.xsd`](kml-2.2.0/ogckml22.xsd) | <http://schemas.opengis.net/kml/2.2.0/> |
| `http://www.w3.org/2005/Atom` | [`kml-2.2.0/atom-author-link.xsd`](kml-2.2.0/atom-author-link.xsd) | <http://schemas.opengis.net/kml/2.2.0/> |
| `urn:oasis:names:tc:ciq:xsdschema:xAL:2.0` | [`kml-2.2.0/xAL.xsd`](kml-2.2.0/xAL.xsd) | <http://docs.oasis-open.org/election/external/xAL.xsd> |

Единствената промяна спрямо оригинала е `schemaLocation` на импорта на xAL в `ogckml22.xsd`.
Той сочи към локалния файл `xAL.xsd`, а не към адреса в интернет.

Валидация от командния ред:

```sh
xmllint --noout --schema schemas/kml-2.2.0/ogckml22.xsd 01-su-faculties-map/maps/faculties.kml
```
