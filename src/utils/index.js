export function setMementofuncs(tickets) {
  tickets.forEach(function (ticket) {
    ticket.hydrate = function () {
      return JSON.stringify(this);
    };

    ticket.dehydrate = function (memento) {
      const m = JSON.parse(memento);
      this.id = m.id;
      this.esta_usado = m.esta_usado;
      this.comentario = m.comentario;
      this.esta_usado = m.esta_usado;
    };
  });
}

export function CareTaker() {
  this.mementos = {};

  this.add = function (key, memento) {
    this.mementos[key] = memento;
  };

  this.get = function (key) {
    return this.mementos[key];
  };
}
