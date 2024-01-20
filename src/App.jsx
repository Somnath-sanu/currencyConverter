import { useState } from "react";
import "./App.css";
import InputBox from "./Components/InputBox";
import {useCurrencyData} from "./Hooks"

function App() {

  const [ from , setFrom] = useState("usd")
  const[ to , setTo] = useState("inr")
  const [amount , setAmount] = useState(0)
  const [ convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyData(from)

  const AmountType = Object.keys(currencyInfo)
  // console.log(AmountType)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
               label="From"
               changeAmount = {(amount) => setAmount(amount) }
               amount = {amount}
               showAmountType = {from}
               currencyInfo = {AmountType}
               changeAmountType = {(type) => setFrom(type)}

               
               
                />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-500"
                onClick={swap}
                
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
               label="To"
               amount = {convertedAmount}
               showAmountType = {to}
               currencyInfo = {AmountType}
               changeAmountType = {(type) => setTo(type)}
               AmountDisabled
               
                />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-500"
              
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
