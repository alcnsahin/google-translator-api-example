/*
* Before running this script you need to add following variable as env
* set GOOGLE_APPLICATION_CREDENTIALS=./f324289e4853.json
*/
const {Translate} = require('@google-cloud/translate');
const translator = new Translate();

let html_content = ```
<div><h2>What is Lorem Ipsum?</h2>
<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
```;

async function translate(html) {
    const [translated_content] = await translator.translate(html, 'tr');
    console.log(translated_content)
}

translate(html_content);
