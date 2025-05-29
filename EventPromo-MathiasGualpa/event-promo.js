class EventPromo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return ["title", "date", "location"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this[name] = newValue;
        this.render();
      }
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
  
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
        <article class="event-card">
          <div class="left-side">
            <h2 class="event-title">${this.title || "Título del evento"}</h2>
            <p class="event-date">${this.date || "Fecha no definida"}</p>
            <p class="event-location">${this.location || "Lugar no definido"}</p>
            <div class="event-description">
              <slot name="description">No hay descripción disponible.</slot>
            </div>
          </div>
          <div class="right-side"></div>
        </article>
        ${this.getStyles()}
      `;
      return template;
    }
  
    getStyles() {
      return `
        <style>
          :host {
            display: block;
            max-width: 900px;
            margin: 30px auto;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
          }
  
          .event-card {
            display: flex;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            min-height: 450px;
            width: 100%;
          }

          .event-card:hover {
          transform: translateY(-5px);
        }
  
          .left-side {
            flex: 1;
            background-color: #1E1F71; 
            padding: 40px 35px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
  
          .right-side {
            flex: 1;
            background-image: url('./img/imagen.jpg');
            background-size: cover;
            background-position: center;
          }
  
          .event-title {
            font-size: 2.8rem;
            margin-bottom: 20px;
            font-weight: 700;
            line-height: 1.1;
          }
  
          .event-date,
          .event-location {
            font-size: 1.3rem;
            margin-bottom: 15px;
            opacity: 0.9;
          }
  
          .event-description {
            margin-top: 25px;
            font-size: 1.2rem;
            background: rgba(255 255 255 / 0.2);
            padding: 20px;
            border-radius: 12px;
            color: #fff;
            line-height: 1.5;
            font-weight: 400;
          }
  
          @media (max-width: 700px) {
            .event-card {
              flex-direction: column;
              height: auto;
            }
  
            .right-side {
              height: 220px;
            }
          }
        </style>
      `;
    }
  }
  
  customElements.define("event-promo", EventPromo);
  