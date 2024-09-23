import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { ToggleProps } from 'Control/Toggle';
import { Toggle } from '../index';

describe('Toggle의', () => {
  const mockOnCheckedChange = vi.fn();

  function renderToggle(props: ToggleProps) {
    render(<Toggle {...props} onCheckedChange={mockOnCheckedChange} />);
  }

  describe('기본 동작은 다음과 같다.', () => {
    it('on 상태로 렌더링 될 수 있다.', () => {
      renderToggle({ 'aria-checked': true });

      const toggle = screen.getByRole('switch');

      // aria-checked 상태를 확인
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });

    it('off 상태로 렌더링 될 수 있다.', () => {
      renderToggle({ 'aria-checked': false });

      const toggle = screen.getByRole('switch');

      // aria-checked 상태를 확인
      expect(toggle).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('onCheckedChange 이벤트는 다음과 같다.', () => {
    beforeEach(() => {
      mockOnCheckedChange.mockClear(); // 테스트마다 mock을 초기화
    });

    it('Toggle을 클릭했을 때 onCheckedChange 핸들러가 호출된다.', () => {
      renderToggle({ 'aria-checked': false });

      const toggle = screen.getByRole('switch');

      fireEvent.click(toggle);

      expect(mockOnCheckedChange).toHaveBeenCalledWith(true);
    });
  });
});
