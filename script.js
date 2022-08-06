var images;


images = ['https://images.unsplash.com/photo-1570299437488-d430e1e677c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', 'https://images.unsplash.com/photo-1616028872586-f629c1f29968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80', 'https://images.unsplash.com/photo-1610565094701-ddfce4af14b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1685&q=80'];
let element_image = document.getElementById('image');
images.push(images[0]);


document.getElementById('p_btn').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  images.unshift(images.slice(-1)[0]);
  element_image2.setAttribute("src", images.pop());

});

document.getElementById('n_btn').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  images.push(images[0]);
  element_image3.setAttribute("src", images.shift());

});
