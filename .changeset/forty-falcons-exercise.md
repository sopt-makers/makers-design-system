---
'@sopt-makers/ui': minor
---

feat(Dialog): cancelButton과 approveButton에 onClick 핸들러 추가

Dialog 컴포넌트의 typeOptions에 onCancel과 onApprove 핸들러를 추가했습니다.

- typeOptions에 onApprove, onCancel 핸들러 추가
- cancelButton 클릭 시 커스텀 로직 실행 가능
- 기존 buttonFunction은 deprecated 처리 (하위 호환성 유지)
