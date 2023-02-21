// array of object
const array = [{ id: 1, name: "sobuj", roll: 64 }];
// viewing property of an array object
//console.log(array[0].name);

// little more complex
const data = {
  count: 5000,
  data: [
    { id: 21, name: "ashik", job: "student" },
    { id: 24, name: "maruf", job: "student" },
  ],
};
//console.log(data.data[0].name);
// ---------------
const user = {
  name: "sobuj",
  address: {
    street: {
      first: "dhanmondi 15",
      second: "opposite of habib heritage",
    },
    postoffice: "dhanmondi",
    city: "dhaka",
  },
};
console.log(user.address.city);
