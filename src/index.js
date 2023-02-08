import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liを生成
  const li = document.createElement("li");
  li.className = "list";

  //　divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p
  const p = document.createElement("p");
  p.innerText = inputText;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest(".list");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //liの子要素に各要素を設定する
  li.appendChild(div);
  div.appendChild(p);
  p.appendChild(completeButton);
  p.appendChild(deleteButton);
  console.log(li);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
