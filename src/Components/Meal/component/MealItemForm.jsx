import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    console.log(typeof enteredAmount);
    const enteredAmountNumber = +enteredAmount;
    console.log(typeof enteredAmountNumber);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={submitHandler}>
      <div className="flex gap-4">
        <Input
          ref={amountInputRef}
          label="Amount"
          InputStyle="font-bold"
          input={{
            id: "amount",
            type: "number",
            max: "5",
            min: "1",
            step: "1",
            defaultValue: "1",
          }}
        />
      </div>
      <button className="flex justify-center  text-white p-2 w-28 rounded-r-full rounded-l-full bg-amber-800">
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
