import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { ToggleProps } from 'Control/Toggle';
import { Toggle } from '../index';

describe('Toggle의', () => {
  const mockOnCheckedChange = vi.fn();

  function renderToggle(props?: ToggleProps) {
    render(<Toggle {...props} onCheckedChange={mockOnCheckedChange} />);
  }

  describe('기본 동작은 다음과 같다.', () => {
    it('on 상태로 렌더링 될 수 있다.', () => {
      renderToggle({ checked: true });

      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });

    it('off 상태로 렌더링 될 수 있다.', () => {
      renderToggle({ checked: false });

      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('onCheckedChange 이벤트는 다음과 같다.', () => {
    it('Toggle을 클릭했을 때 onCheckedChange 핸들러가 호출된다.', () => {
      renderToggle({ checked: false });

      const toggle = screen.getByRole('switch');

      fireEvent.click(toggle);

      expect(mockOnCheckedChange).toHaveBeenCalledTimes(1);
      expect(mockOnCheckedChange).toHaveBeenCalledWith(true);
    });

    it('Toggle을 다시 클릭하면 onCheckedChange 핸들러가 다시 호출된다.', () => {
      renderToggle({ checked: true });

      const toggle = screen.getByRole('switch');

      // Toggle을 클릭
      fireEvent.click(toggle);

      // onCheckedChange 핸들러가 호출되었는지 확인
      expect(mockOnCheckedChange).toHaveBeenCalledTimes(1);
      expect(mockOnCheckedChange).toHaveBeenCalledWith(false);
    });
  });
});
