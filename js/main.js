document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.formulario-filtros');
  const selectGenero = document.getElementById('genero');
  const selectClima = document.getElementById('clima');
  const selectTipo = document.getElementById('tipo');
  const selectPrecio = document.getElementById('precio');
  const tarjetas = document.querySelectorAll('.tarjeta-perfume');

  function aplicarFiltros() {
    const genero = selectGenero ? selectGenero.value : 'todos';
    const clima = selectClima ? selectClima.value : 'todos';
    const tipo = selectTipo ? selectTipo.value : 'todos';
    const precio = selectPrecio ? selectPrecio.value : 'todos';

    tarjetas.forEach(function (tarjeta) {
      const pGenero = tarjeta.getAttribute('data-genero');
      const pClima = tarjeta.getAttribute('data-clima');
      const pAroma = tarjeta.getAttribute('data-aroma');
      const pPrecio = tarjeta.getAttribute('data-precio');

      const matchGenero = (genero === 'todos' || pGenero === genero || genero === 'unisex');
      const matchClima = (clima === 'todos' || pClima === clima || pClima === 'versatil');
      const matchTipo = (tipo === 'todos' || pAroma === tipo);
      const matchPrecio = (precio === 'todos' || pPrecio === precio);

      if (matchGenero && matchClima && matchTipo && matchPrecio) {
        tarjeta.style.display = 'flex';
      } else {
        tarjeta.style.display = 'none';
      }
    });
  }

  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      aplicarFiltros();
    });
  }

  if (selectGenero) selectGenero.addEventListener('change', aplicarFiltros);
  if (selectClima) selectClima.addEventListener('change', aplicarFiltros);
  if (selectTipo) selectTipo.addEventListener('change', aplicarFiltros);
  if (selectPrecio) selectPrecio.addEventListener('change', aplicarFiltros);
});
