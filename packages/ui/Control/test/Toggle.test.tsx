import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { ToggleProps } from 'Control/Toggle';
import { Toggle } from '../index';

describe('Toggle의', () => {
  function renderToggle(props?: ToggleProps) {
    render(<Toggle {...props} />);
  }

  describe('기본 동작은 다음과 같다.', () => {
    it('on 상태로 렌더링 될 수 있다.', () => {
      renderToggle({ 'aria-checked': 'true' });

      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });

    it('off 상태로 렌더링 될 수 있다.', () => {
      renderToggle({ 'aria-checked': 'false' });

      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });
  });
});
