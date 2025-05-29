# Componente Web <event-promo>

## Explicación del componente

El componente `<event-promo>` es un Web Component personalizado que muestra información relevante sobre un evento dividiendo el contenido en dos partes la primera es una sección izquierda con un fondo sólido que muestra título, fecha, ubicación y una descripción opcional; y la segunda es una sección derecha con una imagen decorativa. Utiliza Shadow DOM para encapsular estilos y estructura, garantizando que el diseño no se vea afectado por estilos externos.

---

## Atributos personalizados

El componente observa y actualiza automáticamente los siguientes atributos:

- **title**: Título principal del evento. Por ejemplo, `"Final Champions League"`.
- **date**: Fecha del evento. Por ejemplo, `"Fecha: 2025-05-31"`.
- **location**: Lugar donde se realizará el evento. Por ejemplo, `"Alemania - Estadio Allianz Arena"`.

Además, el componente soporta un `<slot name="description">` para insertar contenido HTML personalizado que sirva como descripción detallada del evento.

---

## Capturas de pantalla del componente en uso

![Captura 1](./img/Event-Prom.png)

En la primera captura podermos ver el uso del componente creado

![Captura 2](./img/Even-Promuso.png)

En la segunda captura podemos ver que si quitamos el titulo nos sale como esta definido en el componente que creamos es decir el event-prom.js

![Captura 3](./img/Slot.png)

En la tercera captura podemos ver el uso de los slot donde tienen nombre como title,date,location y description

## Código de ejemplo para reutilizar el componente

El codigo del html nos sirve para reutilizar el componente que creamos Y con esta estructura, tienes total libertad para modificar el contenido, añadir estilos

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ejemplo Event Promo</title>
  </head>
  <body>
    <event-promo
      title="Final de Champions League"
      date="Fecha: 2025-05-31"
      location="Alemania - Estadio Allianz Arena"
    >
      <p slot="description">
        No te pierdas la gran final entre el PSG y el Inter, disfruta del fútbol y apoya a tu equipo
        favorito.
      </p>
    </event-promo>

    <script type="module" src="./event-promo.js"></script>
  </body>
</html>
```
