const mongoose = require("mongoose");
const Customer = require("./models/user");

mongoose
  .connect(
    "mongodb+srv://Kumar_Sundaram:E7TtCYV@H55Dfhx@cluster0.onuvu.mongodb.net/banking",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

const v = async () => {
  await Customer.deleteMany({});
  await Customer.insertMany([
    {
      username: "Camilla Frederiksen",
      email: "camilla_frederiksen@gmail.com",
      Balance: 50000,
      avatar: "camilla-frederiksen.jpg",
      contact: 9312929394,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam .",
    },
    {
      username: "Frank Holleman",
      email: "frank_holleman@gmail.com",
      Balance: 50000,
      avatar: "frank-holleman.jpg",
      contact: 9836627712,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.",
    },
    {
      username: "Gursimrat Ganda",
      email: "gursimrat_ganda@gmail.com",
      Balance: 50000,
      avatar: "gursimrat-ganda.jpg",
      contact: 9262553389,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.",
    },
    {
      username: "Ilaya Raja",
      email: "ilaya_raja@gmail.com",
      Balance: 50000,
      avatar: "ilaya-raja.jpg",
      contact: 9624416625,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam.",
    },
    {
      username: "Jyotirmoy Gupta",
      email: "jyotirmoy_gupta@gmail.com",
      Balance: 50000,
      avatar: "jyotirmoy-gupta.jpg",
      contact: 9862617895,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.",
    },
    {
      username: "Kashish Goswami",
      email: "kashish_goswami@gmail.com",
      Balance: 50000,
      avatar: "kashish-goswami.jpg",
      contact: 9674422565,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.",
    },
    {
      username: "Kushagra Kevat",
      email: "kushagra_kevat@gmail.com",
      Balance: 50000,
      avatar: "kushagra-kevat.jpg",
      contact: 9853452261,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam.",
    },
    {
      username: "Manpreet Singh",
      email: "manpreet_singh@gmail.com",
      Balance: 50000,
      avatar: "manpreet-singh.jpg",
      contact: 9675656565,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.",
    },

    {
      username: "Pranav Kumar",
      email: "pranav_kumar@gmail.com",
      Balance: 50000,
      avatar: "pranav-kumar.jpg",
      contact: 9656896425,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.",
    },
    {
      username: "Sheela Devi",
      email: "sheela_devi@gmail.com",
      Balance: 50000,
      avatar: "sheela-devi.jpg",
      contact: 9687872565,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.",
    },
  ]);
};

v();
