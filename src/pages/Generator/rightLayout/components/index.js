import LmInput from './LmInput';
import LmInputNumber from './LmInputNumber';

const Control = (props) => {
  const { type, ...resetProps } = props;
  switch (type) {
    case 'input':
      return <LmInput {...resetProps} />;
    case 'number':
      return <LmInputNumber {...resetProps} />;
    // case 'checkbox':
    //   return <CheckboxFilter {...resetProps} />;
    // case 'datePicker':
    //   return <DatePickerFilter {...resetProps} />;
    // case 'custom':
    //   return <CustomFilter {...resetProps} />;
    // case 'more':
    //   return <MoreFilter {...resetProps} />;
    default:
      return <LmInput {...resetProps} />;
  }
};

export default Control;
