import { render, screen } from '@testing-library/react';
import Test from './Test';

it('테스트 컴포넌트가 정상적으로 렌더링됩니다.', () => {
  render(<Test text='테스트' />);

  expect(screen.getByText('테스트')).toBeInTheDocument();
});
