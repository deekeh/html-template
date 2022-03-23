var template = document.querySelector('[type="text/x-handlebars-template"]').innerHTML;
var container = document.createElement('div');
container.innerHTML = template;

container.querySelectorAll('[data-hb-input]').forEach(el => {
  var compiledTemplate = Handlebars.compile(el.innerHTML);

  var targetElements = document.querySelectorAll(`[data-hb-output='${el.getAttribute('data-hb-input')}']`);
  targetElements.forEach(targetElement => {
    var opData = JSON.parse(targetElement.getAttribute('data-hb-params'));
    targetElement.innerHTML = compiledTemplate(opData);
  })
});
