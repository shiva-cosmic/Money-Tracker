import React, { useEffect } from 'react';
import { Container, Input, Button, NavBar, Select } from '../Components/index';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, removeExpense } from '../store/expenseSlice';

function Home() {
  const options = [
    { label: 'Food', value: 'food' },
    { label: 'Transport', value: 'transport' },
    { label: 'Shopping', value: 'shopping' },
    { label: 'Bills', value: 'bills' },
    { label: 'Others', value: 'others' }
  ];

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenseSlice.expenses);

  const [amount, setAmount] = React.useState(0);
  const [category, setCategory] = React.useState('');
  const [allExpenses, setAllExpenses] = React.useState();
  const [totalExpenditure, setTotalExpenditure] = React.useState(0);

  useEffect(() => {
    let total = 0;
    expenses.forEach((expense) => {
      total += expense.amount;
    });
    setTotalExpenditure(total);
  }, [expenses]);

  useEffect(() => {
    setAllExpenses(expenses);
  }, [expenses]);

  const handleAmount = (e) => setAmount(Number(e.target.value));
  const handleCategory = (e) => setCategory(e.target.value);

  const handleAddExpense = () => {
    if (amount && category) {
      const expense = {
        id: Math.random(),
        amount,
        category,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };
      dispatch(addExpense(expense));
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-6 px-2 sm:px-4 animate-fadeIn">
      {/* Responsive Container */}
      <Container className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-4 sm:p-6 bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/80 rounded-xl shadow-xl backdrop-blur-lg border border-gray-600/50">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-center text-white mb-6 animate-pulse">
          Money Tracker | Track Your Expenses
        </h1>

        {/* Input Section */}
        <div className=" mb-4 space-y-3 text-white font-extralight text-lg ">
          <Input
            type="number"
            label="Amount"
            onChange={handleAmount}
            className="border-2 border-gray-600 p-3 w-full rounded-xl focus:outline-none focus:ring-4 focus:ring-gray-500 transition-all duration-200 bg-gray-800/70 backdrop-blur-sm text-white placeholder-gray-400 font-extralight"
          />
          <Select
            label="Category"
            onChange={handleCategory}
            options={options}
            className="border-2 border-gray-600 p-3 w-full rounded-xl focus:outline-none focus:ring-4 focus:ring-gray-500 transition-all duration-200 bg-gray-800/70 backdrop-blur-sm text-white font-extralight "
          />
        </div>

        {/* Add Expense Button */}
        <Button
          className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-3 rounded-xl w-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-extralight"
          onClick={handleAddExpense}
          name="Add Expense"
        />

        {/* Expenses Title */}
        <h2 className="text-xl sm:text-2xl font-extralight text-center text-white mt-8 mb-4">
          Expenses
        </h2>

        {/* Table Wrapper for Mobile Scroll */}
        <div className="mt-4 overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-inner">
            <thead className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
              <tr>
                <th className="py-3 px-4 font-extralight">Amount</th>
                <th className="py-3 px-4 font-extralight">Category</th>
                <th className="py-3 px-4 font-extralight">Date</th>
                <th className="py-3 px-4 font-extralight">Time</th>
                <th className="py-3 px-4 font-extralight">Action</th>
              </tr>
            </thead>

            <tbody>
              {allExpenses &&
                allExpenses.map((expense, index) => (
                  <tr
                    key={expense.id}
                    className={`hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 transition-all duration-200 transform hover:scale-[1.01] ${
                      index % 2 === 0 ? 'bg-gray-800/50' : 'bg-gray-900/50'
                    } text-white`}
                  >
                    <td className="py-3 px-4 text-center font-extralight">{expense.amount}</td>
                    <td className="py-3 px-4 text-center font-extralight uppercase">{expense.category}</td>
                    <td className="py-3 px-4 text-center font-extralight">{expense.date}</td>
                    <td className="py-3 px-4 text-center font-extralight">{expense.time}</td>
                    <td className="py-3 px-4 text-center">
                      <Button
                        className="bg-gradient-to-r from-red-600 to-red-800 text-white p-2 rounded-lg hover:shadow-md transform hover:scale-105 transition-all duration-200"
                        onClick={() => dispatch(removeExpense(expense.id))}
                        name="Remove"
                      />
                    </td>
                  </tr>
                ))}

              {/* Total Row */}
              <tr className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
                <td className="py-3 px-4 text-center font-extralight text-white">
                  Total Expenditure
                </td>
                <td colSpan="4" className="py-3 px-4 text-center font-extralight text-white">
                  {totalExpenditure}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

export default Home;
