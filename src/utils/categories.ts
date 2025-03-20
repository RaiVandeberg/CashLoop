import foodSvg from "../assets/food.svg"
import otherSvg from "../assets/others.svg"
import serviceSvg from "../assets/services.svg"
import transportSvg from "../assets/transport.svg"
import accomodationSvg from "../assets/accommodation.svg"

export const CATEGORIES = {
    food: {
        name: "Alimentação",
        icon: foodSvg
    },
    transport: {
        name: "Transporte",
        icon: transportSvg
    },
    accomodation: {
        name: "Hospedagem",
        icon: accomodationSvg
    },
    service: {
        name: "Serviços",
        icon: serviceSvg
    },
    other: {
        name: "Outros",
        icon: otherSvg
    }
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
keyof typeof CATEGORIES>