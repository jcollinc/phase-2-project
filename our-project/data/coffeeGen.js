const coffeeArray = [
    {
        "title": "Iced Coffee",
        "description": "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
        "ingredients": [
            "Coffee",
            "Ice",
            "Sugar*",
            "Cream*"
        ],
        "image": "https://m.psecn.photoshelter.com/img-get/I00005qK6JDWR.pc/s/1000?1644909155",
        "id": 1
    },
    {
        "title": "Iced Espresso",
        "description": "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener. You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos, lattes and flat whites.",
        "ingredients": [
            "Espresso",
            "Ice",
            "Sugar*",
            "Cream*"
        ],
        "image": "https://m.psecn.photoshelter.com/img-get/I0000sjnJs4wHqRM/s/1000?1644909155",
        "id": 2
    },
    {
        "title": "Cold Brew",
        "description": "The trendiest of the iced coffee bunch, cold brew coffees are made by steeping coffee beans from anywhere between 6-36 hours, depending on how strong you would like your cold brew. Once the beans are done steeping, add cold milk or cream.",
        "ingredients": [
            "Long steeped coffee",
            "Ice"
        ],
        "image": "https://m.psecn.photoshelter.com/img-get/I0000amogsm1oCF0/s/1000?1644909154",
        "id": 3
    },
    {
        "title": "Frappuccino",
        "description": "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that’s topped with whipped cream and syrup. ",
        "ingredients": [
            "Espresso",
            "Blended ice",
            "Whip*"
        ],
        "image": "https://m.psecn.photoshelter.com/img-get/I0000wV3RRvRZ_gs/s/1000?1644909154",
        "id": 4
    },
    {
        "title": "Nitro",
        "description": "A cold brew + nitrogen bubbles = a cold brew coffee with a frothy, Guinness-like consistency. (It’s poured via a nitro tap, too.)",
        "ingredients": [
            "Coffee",
            "Nitrogen bubbles",
            "Sugar*",
            "Cream*"
        ],
        "image": "https://m.psecn.photoshelter.com/img-get/I0000ZeFNWdeIMxY/s/1000?1644909155",
        "id": 5
    },
    {
        "title": "Cold Brew with Milk",
        "description": "Cold Brew. With Milk. Perfect.",
        "ingredients": [
            "Long steeped coffee",
            "Milk",
            "Ice"
        ],
        "image": "https://m.psecn.photoshelter.com/img-get/I0000ugonBT7Tkyg/s/1000?1644909154",
        "id": 6
    }
]


export const getRandomCoffee = () => {
    coffeeArray[Math.floor(Math.random() * coffeeArray.length)]
}