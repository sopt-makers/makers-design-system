import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import Button from '../Button';

it('Button 컴포넌트가 정상적으로 렌더링됩니다.', () => {
  render(<Button>테스트 버튼</Button>);

  expect(screen.getByText('테스트 버튼')).toBeInTheDocument();
});

it('버튼을 클릭했을 때 onClick 이벤트 핸들러가 정상적으로 호출됩니다.', () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>테스트 버튼</Button>);

  fireEvent.click(screen.getByText('테스트 버튼'));
  expect(handleClick).toHaveBeenCalled();
});

it('disabled 상태에서 버튼을 클릭했을 때 onClick 이벤트 핸들러가 호출되지 않습니다.', () => {
  const handleClick = vi.fn();
  render(
    <Button disabled onClick={handleClick}>
      테스트 버튼
    </Button>,
  );

  fireEvent.click(screen.getByText('테스트 버튼'));
  expect(handleClick).not.toHaveBeenCalled();
});
