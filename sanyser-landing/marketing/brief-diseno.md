# Sanyser — Guía para armar contenido

Documento de trabajo para quien diseña las piezas de redes.
Todo lo que está acá sale de decisiones ya tomadas y probadas sobre piezas reales.

---

## 1. Lo que no se negocia

### Tipografías

| Uso | Fuente |
|---|---|
| Títulos y números grandes | **Bebas Neue** |
| Todo el resto: cuerpo, etiquetas, pies | **Inter** |

Las dos son **gratuitas y de código abierto** (licencia SIL Open Font License).
No hacen falta Adobe Fonts ni ninguna suscripción: se instalan con doble clic en
el sistema y aparecen en Illustrator, Photoshop, Canva y donde sea.

Te las paso en la carpeta `fuentes-para-diseno/`. Son las mismas que usa
sanyser.com.ar, así que la web y las redes quedan alineadas.

Nunca una tercera tipografía.

### Colores

| | Hex | Uso |
|---|---|---|
| Naranja | `#FF5500` | Acento, datos destacados, fondos de portada |
| Navy | `#0F1E37` | Fondos oscuros, segundo dato de una comparación |
| Gris claro | `#F5F5F5` | Fondo por defecto |
| Blanco | `#FFFFFF` | Fondo cuando hay logos de terceros |
| Gris texto | `#333333` | Cuerpo sobre fondo claro |

**Solo estos.** Nada de rojo, verde ni azul brillante. Si aparece otro color en
una pieza, casi siempre viene de un elemento de stock que hay que reemplazar.

### Medidas

- **Carrusel: 1080 × 1350 px** (4:5). No 1080×1440, porque ese formato no se
  puede programar desde Meta Business Suite.
- **Historia: 1080 × 1920 px** (9:16).
- **Margen de seguridad: 88 px** en los cuatro lados del carrusel. Nada de
  texto, logos ni números dentro de esa franja.
- En historias, dejá libres **250 px arriba y 330 px abajo**: ahí Instagram
  encima su propia interfaz.

### Por qué el margen importa más de lo que parece

La grilla del perfil recorta a 3:4. Sobre una imagen 4:5 eso se come unos
**34 px de cada lado**. Con 88 px de margen no pasa nada. Sin margen, se corta
el borde de un número o la primera letra del logo, y es lo primero que ve
alguien que entra al perfil.

---

## 2. Layout

- **Todo alineado a la izquierda.** No mezclar centrado con alineado dentro de
  un mismo carrusel. La única excepción es una portada con foto, donde alinear
  a la derecha puede servir para no taparle la cara al motivo.
- **Logo arriba a la izquierda**, mismo tamaño en todas las placas. En la de
  cierre va abajo, más grande. Sobre naranja o navy, en blanco puro.
- **Sin sombras ni glow** en el texto ni en el logo.
- **Sin texto justificado.** Genera ríos de espacio entre palabras.
- **Interlineado de Bebas Neue nunca por debajo de 0.96.** La fuente no deja
  aire sobre las mayúsculas acentuadas y la tilde de CÁLCULO o INSTALACIÓN
  choca con la línea de arriba.
- **El cuerpo de texto, grande.** Instagram se mira en un teléfono: si dudás
  entre dos tamaños, va el más grande.

### Rotación de portadas

La grilla del perfil se arma con las primeras placas. Si todas abren igual, el
feed se ve monótono. Si cada una abre distinto por gusto del día, se pierde la
identidad. Por eso la tapa rota sobre un ciclo fijo:

| | Portada |
|---|---|
| A | Navy + foto de obra propia |
| B | Naranja plano |
| C | Claro, puramente tipográfico |
| D | Naranja + foto |
| E | Navy plano |

**Los interiores no rotan**: mantienen siempre el mismo sistema. La variedad va
en la tapa; la consistencia, adentro.

---

## 3. Contenido

Esta parte pesa más que la anterior. Una placa fea con buen contenido sirve;
una placa linda con contenido flojo, no.

### Todo número lleva fuente

Si una placa dice "+38 %", abajo tiene que decir de dónde sale, con organismo y
mes. Sin fuente, el dato no se publica.

Ejemplo real: un carrusel salió con "materiales +22,5 %". El dato del INDEC para
ese mes era 24,7 %. Ese tipo de error, en contenido para constructores y
arquitectos, cuesta credibilidad y no se recupera.

### Una comparativa tiene que poder compararse

Si comparás tres productos, los tres tienen que mostrar **los mismos atributos,
en el mismo orden, con el mismo diseño**. Si uno muestra capacidad y garantía,
otro solo capacidad y el tercero capacidad y conexión, no hay comparación: son
tres avisos sueltos y el que lee no puede decidir.

Cuando falta un dato, se pide. No se completa con otro atributo ni se deja el
hueco disimulado.

### Si la portada promete algo, las placas lo cumplen

Si el título dice "los 3 errores **más caros**", cada placa tiene que decir qué
cuesta ese error. Si dice "y **por qué** te ahorra problemas", cada ítem tiene
que contestar el porqué. Enumerar sin explicar deja la promesa sin cumplir.

### Nada de clipart genérico

Sin billetes estilo emoji, flechas de stock, calendarios ni tildes 3D. Si una
imagen no aporta información, no va: el vacío se lee mejor que el relleno.

Dos ejemplos de por qué esto importa:

- Una placa sobre material sanitario salió con un fondo de **íconos médicos**
  (bisturí, jeringa, ADN, monitor de hospital). Alguien leyó "sanitario" como
  salud en vez de plomería.
- Una placa sobre **certificados de calidad de material** llevaba sellos de
  **ISO 14001** (gestión ambiental) e **ISO 45001** (seguridad laboral).
  Ninguna de las dos certifica calidad de producto. Un ingeniero lo nota.

En su lugar: **fotos propias**. Obra, depósito, camión, el local, la gente
trabajando. Valen mil veces más que cualquier stock, y son lo que un
proveedor de la competencia no puede copiar.

### El cierre

- **Nada de botones dibujados.** En un posteo al feed ningún elemento de la
  imagen es clickeable. Un botón pintado promete un toque que no existe y
  frustra más que no poner nada. El contacto va como información: se lee, se
  copia, se guarda.
- **"Comentá X" no funciona** salvo que haya una automatización detrás. En
  público B2B nadie comenta: un jefe de obra escribe por privado o no hace
  nada.
- Lo que sí funciona: **una oferta concreta**. "Reunión técnica sin cargo",
  "te armamos el cómputo", "pasanos el listado y te devolvemos precio y stock".
- El canal principal es el **mensaje directo**, que es lo único a un toque
  desde el posteo. El WhatsApp va escrito abajo, como dato.

---

## 4. Antes de entregar

Chequeo rápido de cada pieza:

- [ ] ¿Bebas Neue en títulos, Inter en el resto? ¿Ninguna otra?
- [ ] ¿Solo los colores de la paleta?
- [ ] ¿88 px libres en los cuatro bordes?
- [ ] ¿Cada número tiene su fuente citada?
- [ ] ¿La portada cumple lo que promete en las placas siguientes?
- [ ] ¿Alguna imagen es de stock y podría ser una foto propia?
- [ ] ¿El cierre ofrece algo concreto, sin botón dibujado?
- [ ] ¿La portada rota respecto de la anterior?

---

## 5. Referencias

En `marketing/out/` están rehechos los carruseles 1 y 3 a 7 de agosto, más las
cinco historias destacadas. Sirven como ejemplo aplicado de todo lo de arriba:
es más rápido mirarlos que leer este documento.

Cada carpeta trae además un `_grilla.png` que muestra cómo se ve la pieza ya
recortada por Instagram.
