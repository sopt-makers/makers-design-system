import { render, screen, fireEvent } from '@testing-library/react';
import Tab from '../Tab';

describe('Tab 컴포넌트는', () => {
  const mockOnChange = vi.fn();
  const tabItems = ['Tab1', 'Tab2', 'Tab3'];

  function renderTab() {
    render(<Tab onChange={mockOnChange} size='md' style='primary' tabItems={tabItems} />);
  }

  it('정상적으로 렌더링이 됩니다.', () => {
    renderTab();

    tabItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('탭을 클릭하면 onChange 핸들러가 호출됩니다.', () => {
    renderTab();

    fireEvent.click(screen.getByText('Tab2'));

    expect(mockOnChange).toHaveBeenCalledWith('Tab2');
  });
});
