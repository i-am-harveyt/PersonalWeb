import React from "react";
import "../Styles/About.css";

export default function About() {
  return (
    <div className="body">
      <div className="content">
        <h1>About</h1>

        <p>
          目前就讀國立台灣大學社會學系。但比起念社會學，花更多時間在寫程式。
        </p>

        <p>程式方面經歷：</p>

        <ol>
          <li>
            修習兩門程式設計課，分別為兩種程式語言（Java、Python），皆有專案開發經驗。其中
            Python 曾用於開發本地程式，而正在以 Java
            作為後端程式語言開發網頁型網路程式。
          </li>
          <li>
            修習資料結構與演算法，以 C 語言實作部分經典的資料結構與演算法。
          </li>
          <li>
            參加社會模擬工作坊，於工作坊內競賽中以程式實作個人行為模式的模型，加以預測在不同條件下個體的行為模式，以及在社會情境中引發的結果。獲得該競賽第一名。
          </li>
        </ol>
      </div>
    </div>
  );
}
