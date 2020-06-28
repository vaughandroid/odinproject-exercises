window.onload = function () {
  const container = document.querySelector('#container');

  one(container);
  two(container);
  three(container);
}

function one(container) {
  const p = document.createElement('p');
  p.style.color = 'red';
  p.textContent = 'Hey I’m red!';
  container.appendChild(p);
}

function two(container) {
  const h3 = document.createElement('h3');
  h3.style['color'] = 'blue';
  h3.textContent = 'I’m a blue h3!';
  container.appendChild(h3);
}

function three(container) {
  const div = document.createElement('div');
  div.style.cssText = 'border: solid black; background: pink;';
  container.appendChild(div);

  const h1 = document.createElement('h1');
  h1.textContent = 'I’m in a div';
  div.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'Me too!';
  div.appendChild(p);
}