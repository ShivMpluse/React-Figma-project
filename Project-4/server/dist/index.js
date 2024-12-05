"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));

    // Stored data

    const foodData = [
        {
            name: "Boilded Egg",
            price: 10,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "dinner",
        },
        {
            name: "ANMOL",
            price: 35,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "lunch",
        },
        {
            name: "VIVEK",
            price: 41,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "Breakfast",
        },
        {
            name: "ABHISHEK",
            price: 52,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "dinner",
        },
        {
            name: "ANUSHKA",
            price: 52,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "dinner"
        },
        {
            name: "RAJESH",
            price: 45,
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
            image: "/images/cake.png",
            type: "lunch"
        },
        {
            name: "PRIYA",
            price: 30,
            text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
            image: "/images/chicken.png",
            type: "snack"
        },
        {
            name: "SUNITA",
            price: 60,
            text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
            image: "/images/ramen.png",
            type: "dinner"
        },
        {
            name: "VIKRAM",
            price: 35,
            text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
            image: "/images/burger.png",
            type: "lunch"
        },
        {
            name: "MEERA",
            price: 40,
            text: "Expedita distinctio nemo praesentium cumque, dolorem soluta corrupti temporibus est.",
            image: "/images/egg.png",
            type: "breakfast"
        },
        {
            name: "ROHIT",
            price: 28,
            text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
            image: "/images/ramen.png",
            type: "snack"
        },
        {
            name: "KAVITA",
            price: 55,
            text: "Quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
            image: "/images/burger.png",
            type: "dinner"
        },
        {
            name: "ANITA",
            price: 22,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            image: "/images/egg.png",
            type: "breakfast"
        },
        {
            name: "ROHAN",
            price: 75,
            text: "Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            image: "/images/burger.png",
            type: "dinner"
        },
        {
            name: "PANKAJ",
            price: 60,
            text: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus.",
            image: "/images/egg.png",
            type: "lunch"
        },
        {
            name: "SUSHILA",
            price: 48,
            text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
            image: "/images/burger.png",
            type: "snack"
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map