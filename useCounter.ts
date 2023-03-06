import { useState } from "react";

export const useCounter = (initialValue = 10) => {
	const [counter, setCounter] = useState(initialValue);

	const increment = (value = 1) => {
		setCounter((c) => c + value);
	};

	const reset = () => {
		setCounter(initialValue);
	};

	const decrement = (value = 1, min = 0) => {
		if (counter === min) return;

		setCounter((c) => c - value);
	};

	const random = (max) => {
		setCounter(Math.floor(Math.random() * max));
	};

	return {
		counter,
		increment,
		reset,
		decrement,
		random,
	};
};
