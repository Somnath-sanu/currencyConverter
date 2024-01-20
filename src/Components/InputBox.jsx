import { useId } from "react";

/* eslint-disable react/prop-types */
const InputBox = ({
  label,
  changeAmount,
  amount,
  AmountDisabled = false,

  showAmountType,
  currencyInfo,
  changeAmountType,
}) => {

  const amountInputId = useId()


  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label
         className="text-black/40 mb-2 inline-block"
         htmlFor={amountInputId}
         >{label}</label>
        <input
        id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => changeAmount && changeAmount(Number(e.target.value))}
          disabled={AmountDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={showAmountType}
          onChange={(e) => changeAmountType && changeAmountType(e.target.value)}
        >
          {currencyInfo.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;

/**
 * ! if u use value attribute in select , you have to use onChange Method as well
 * !
 */
