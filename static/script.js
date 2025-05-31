// 계정 데이터 (샘플)
const accounts = [
  { id: "2023001", name: "홍길동", userId: "biko01", password: "pass1234" },
  { id: "2023002", name: "김유진", userId: "biko02", password: "pw5678" },
  { id: "2023003", name: "이민수", userId: "biko03", password: "biko7890" }
];

// 폼 제출 이벤트 처리
document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault(); // 기본 동작(새로고침) 방지

  const studentId = document.getElementById("student-id").value.trim();
  const studentName = document.getElementById("student-name").value.trim();
  const resultBox = document.getElementById("result");

  // 입력값 검사
  if (!studentId || !studentName) {
    resultBox.innerHTML = "⚠️ 학번과 이름을 모두 입력해주세요.";
    return;
  }

  // 계정 검색
  const found = accounts.find(
    (acc) => acc.id === studentId && acc.name === studentName
  );

  // 결과 출력
  if (found) {
    resultBox.innerHTML = `
      ✅ <strong>${found.name}</strong>님의 계정 정보:<br />
      <strong>ID:</strong> ${found.userId}<br />
      <strong>PW:</strong> ${found.password}
    `;
  } else {
    resultBox.innerHTML = "❌ 일치하는 계정을 찾을 수 없습니다.";
  }
});
