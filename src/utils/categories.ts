import foodSvg from "../assets/food.svg"
import otherSvg from "../assets/others.svg"
import serviceSvg from "../assets/services.svg"
import transportSvg from "../assets/transport.svg"
import accomodationSvg from "../assets/accommodation.svg"

export const CATEGORIES = {
    food: {
        label: "Alimentação",
        icon: foodSvg
    },
    transport: {
        label: "Transporte",
        icon: transportSvg
    },
    accomodation: {
        label: "Hospedagem",
        icon: accomodationSvg
    },
    service: {
        label: "Serviços",
        icon: serviceSvg
    },
    other: {
        label: "Outros",
        icon: otherSvg
    }
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
keyof typeof CATEGORIES>