function addRow() {
  const labelInput = document.getElementById('labelInput');
  const valueInput = document.getElementById('valueInput');
  const label = labelInput.value.trim();
  const value = valueInput.value.trim();

  if (!label || !value) {
    alert('両方の項目を入力してください');
    return;
  }

  const table = document.getElementById('table');

  const row = document.createElement('div');
  row.className = 'row';

  const labelDiv = document.createElement('div');
  labelDiv.className = 'label';
  labelDiv.textContent = label;

  const valueDiv = document.createElement('div');
  valueDiv.className = 'value';
  valueDiv.textContent = value;

  row.appendChild(labelDiv);
  row.appendChild(valueDiv);
  table.appendChild(row);

  // 入力欄をクリア
  labelInput.value = '';
  valueInput.value = '';
}
function addTodo() {
  const titleInput = document.getElementById('taskTitle');
  const detailInput = document.getElementById('taskDetail');
  const title = titleInput.value.trim();
  const detail = detailInput.value.trim();

  if (!title || !detail) {
    alert('項目名と内容を両方入力してください');
    return;
  }

  const container = document.getElementById('todoList');

  const row = document.createElement('div');
  row.className = 'todo-row';

  const titleDiv = document.createElement('div');
  titleDiv.className = 'todo-title';
  titleDiv.textContent = title;

  const detailDiv = document.createElement('div');
  detailDiv.className = 'todo-detail';
  detailDiv.textContent = detail;

  row.appendChild(titleDiv);
  row.appendChild(detailDiv);
  container.appendChild(row);

  // 入力クリア
  titleInput.value = '';
  detailInput.value = '';
}

