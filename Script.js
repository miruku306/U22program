// 項目を追加する関数
function addItem() {
  const input = document.getElementById('itemInput');
  const itemText = input.value.trim();
  
  if (itemText === '') {
    alert('項目を入力してください');
    return;
  }

  const tbody = document.getElementById('listBody');
  const rowCount = tbody.rows.length;
  
  // 新しい行を作成
  const newRow = tbody.insertRow();
  
  // 番号セル
  const numberCell = newRow.insertCell(0);
  numberCell.textContent = rowCount + 1;
  
  // 項目セル
  const itemCell = newRow.insertCell(1);
  itemCell.textContent = itemText;
  
  // 削除ボタンセル
  const deleteCell = newRow.insertCell(2);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.className = 'delete-btn';
  deleteButton.onclick = function() {
    tbody.removeChild(newRow);
    updateNumbers();
  };
  deleteCell.appendChild(deleteButton);
  
  // 入力欄をクリア
  input.value = '';
  input.focus();
}

// 番号を更新する関数
function updateNumbers() {
  const tbody = document.getElementById('listBody');
  const rows = tbody.rows;
  
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[0].textContent = i + 1;
  }
}

// Enterキーで項目を追加
document.getElementById('itemInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addItem();
  }
});
