  alert("hoi");

  const recipePanel = document.querySelector('.receptenPanels');
  const form = document.querySelector('#add-recipe');

  //create element and render data
  function renderRecipe(doc, id) {

      const html = `
    <div class="col-sm-4 col-md-3 col-lg-3 panel panel-default recept panel-${doc.data().type}" data-id="${id}">
    <div id="recipeTitle" class="panel-heading text-center">${doc.data().title}</div>
    <div class="panel-body">
        <div id="recipeDescription" class="text-left">${doc.data().description}</div>
    </div>
    </div>
    `;
    
      recipePanel.innerHTML += html;

      document.querySelector('[data-id=' + id).addEventListener('click', (e) => {
        window.location = "./recept.html";
      })

  }

  //getting data
  // db.collection("recipes").orderBy('title').get().then((snapshot) => {
  //     snapshot.docs.forEach(doc => {
  //         console.log(doc.data());
  //         renderRecipe(doc);
  //     })
  // })

  //saving data
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      db.collection('recipes').add({
          title: form.title.value,
          description: form.description.value,
          type: form.type.value
      })
      form.title.value = '';
      form.description.value = '';
  })


  //real time listener
  db.collection("recipes").orderBy('title').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
          if (change.type == 'added') {
              renderRecipe(change.doc);
          } else if (change.type == 'removed') {
              let li = recipePanel.querySelector('[data-id=' + change.doc.id + ']');
              recipePanel.removeChild(li);
          }

      })
  })