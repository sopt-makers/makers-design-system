import { render, screen, fireEvent } from '@testing-library/react';
import type { CheckBoxProps } from 'Control/CheckBox';
import { CheckBox } from '../index';

describe('Checkbox의', () => {
  function renderCheckbox(props?: CheckBoxProps) {
    render(<CheckBox {...props} />);
  }

  describe('정상동작은 다음과 같다.', () => {
    it('Checkbox 컴포넌트가 정상적으로 렌더링 된다.', () => {
      renderCheckbox();

      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('checked = true 이면 checkbox가 활성화된 상태로 렌더링된다.', () => {
      renderCheckbox({ checked: true });

      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('checked = false 이면 checkbox가 비활성화된 상태로 렌더링된다.', () => {
      renderCheckbox({ checked: false });

      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });
  });

  describe('onClick 이벤트는 다음과 같다.', () => {
    it('Checkbox를 클릭했을 때 onClick 핸들러가 호출된다.', () => {
      const handleClick = vi.fn();
      renderCheckbox({ onClick: handleClick });

      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);

      expect(handleClick).toHaveBeenCalled();
    });
  });
});
