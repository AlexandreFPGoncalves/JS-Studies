  /* Write a JS Function to obtain the difference between a certain number and 25
  If the number is greater than 25, return the double of the difference, if not return the difference */
  const Challenge1 = (num) => {
      if (num <= 25) {
          return 25 - num;
      } else {
          return (num - 25) * 2;
      }
  };

  /* Write a JS Function that accepts 2 args, a string and a character
  Count and return the number of times the character shows up in the string */


  function Challenge2(string, letter) {
      let count = 0;
      for (let i = 0; i < string.length; i++) {
          if (letter === string[i]) {
              count++;
          }
      }

      return count;
  }

  /* Write a JS Function that accepts an array of numbers as an arg
  organize and return that same array sorted from the smallest to the highest number */

  const Challenge3 = (arr) => {
      let arrCopy = [...arr];

      return arrCopy.sort(function(a, b) {
          return a - b;
      });
  };


  /* Write a JS Function that accepts a number as arg, create a variable named total
  sum and return to that variable all the natural numbers bellow your arg including the arg itself */

  const Challenge4 = (num) => {
      let total = 0;

      for (num; num >= 0; num--) {
          total += num;
      }
      return total;
  };

  /* With the following array, create a JS Function with two args, "FoodsArr" and "foodOrigin"
  Filter your array by the origin of the food and multiple it's price by 3, finally return the filted array */

  const getTaxedFoods = (foodsArr, foodOrigin) => {
      let arrCopy = [...foodsArr];

      return arrCopy
          .filter((food) => food.origin === foodOrigin)
          .map((filteredFood) => ({
              ...filteredFood,
              price: filteredFood.price * 3
          }));
  };

  const foodsArr = [{
          origin: 'America',
          food: 'Cheeseburger',
          price: 4.99
      },
      {
          origin: 'Portugal',
          food: 'Francesinha',
          price: 9.99
      },
      {
          origin: 'America',
          food: 'Chocolate chip cookie',
          price: 2.78
      },
      {
          origin: 'Portugal',
          food: 'Bacalhau',
          price: 14.99
      },
      {
          origin: 'Japan',
          food: 'Sushi',
          price: 40
      },
      {
          origin: 'America',
          food: 'Corn dogs',
          price: 3.99
      },
  ];

  console.log('My Taxed Food List:', getTaxedFoods(foodsArr, 'America'));

  /* With the following Array, create a JS Function with two args, "todosArr" and "isCompleted"
  Filter and return your todos that match the arg isCompleted */

  const getTodoList = (todosArr, isCompleted) => {
      let arrCopy = [...todosArr];

      return arrCopy.filter((todo) => todo.completed === isCompleted);
  };

  const todosArr = [{
          id: 1,
          copy: 'Study JavaScript',
          completed: false
      },
      {
          id: 2,
          copy: 'Feed Cats',
          completed: true
      },
      {
          id: 3,
          copy: 'Take out Trash',
          completed: false
      },
      {
          id: 4,
          copy: 'Clean room',
          completed: true
      },
      {
          id: 5,
          copy: 'Make lunch for the week',
          completed: false
      },
      {
          id: 6,
          copy: 'Publish Code to Github',
          completed: true
      },
  ];

  console.log('My Todo List:', getTodoList(todosArr, true));