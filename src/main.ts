import 'modern-normalize/modern-normalize.css'
import './style.css'
import j2m from 'jira2md';

const jiraInput = document.querySelector('#jira-input') as HTMLTextAreaElement;
const mdInput = document.querySelector('#markdown-input') as HTMLTextAreaElement;
const htmlInput = document.querySelector('#html-input') as HTMLTextAreaElement;

let jiraContents = "";
let mdContents = "";
let htmlContents = "";

jiraInput?.addEventListener('keyup', () => {
  updateAll(null, j2m.to_markdown(jiraInput.value), j2m.jira_to_html(jiraInput.value));
})

mdInput?.addEventListener('keyup', () => {
  updateAll(j2m.to_jira(mdInput.value), null, j2m.md_to_html(mdInput.value));
})

function updateAll(jira, md, html) {
  jira ? jiraInput.value = jira : '';
  md ? mdInput.value = md : '';
  html ? htmlInput.value = html : '';
}