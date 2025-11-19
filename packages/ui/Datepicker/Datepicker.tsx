import { DatepickerContext } from './DatepickerContext';
import DatepickerInput from './components/DatepickerInput';
import DatepickerModal from './components/DatepickerModal';
import * as S from './style.css';
import { useDatepickerState } from './useDatepickerState';
import type { DatepickerProps } from './types';

function Datepicker(props: DatepickerProps) {
  const contextValue = useDatepickerState(props);

  return (
    <DatepickerContext.Provider value={contextValue}>
      <div className={S.container}>
        <DatepickerInput />
        <DatepickerModal />
      </div>
    </DatepickerContext.Provider>
  );
}

export default Datepicker;
