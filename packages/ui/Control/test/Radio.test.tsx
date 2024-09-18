import type { RadioProps } from 'Control/Radio';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Radio } from '../index';

describe('Radio의', () => {
  function renderRadio(props?: RadioProps) {
    render(<Radio {...props} />);
  }

  describe('기본 동작은 다음과 같다.', () => {
    it('Checkbox 컴포넌트가 정상적으로 렌더링 된다.', () => {
      renderRadio();

      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('checked = true 이면 checkbox가 활성화된 상태로 렌더링된다.', () => {
      renderRadio({ checked: true });

      expect(screen.getByRole('radio')).toBeChecked();
    });

    it('checked = false 이면 checkbox가 비활성화된 상태로 렌더링된다.', () => {
      renderRadio({ checked: false });

      expect(screen.getByRole('radio')).not.toBeChecked();
    });
  });

  describe('onClick 이벤트는 다음과 같다.', () => {
    it('Radio를 클릭했을 때 onClick 핸들러가 호출된다.', () => {
      const handleClick = vi.fn();
      renderRadio({ onClick: handleClick });

      const radio = screen.getByRole('radio');
      fireEvent.click(radio);

      expect(handleClick).toHaveBeenCalled();
    });
  });
});
